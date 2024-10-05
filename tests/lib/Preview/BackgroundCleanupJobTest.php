<?php
/**
 * SPDX-FileCopyrightText: 2018 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 */

namespace Test\Preview;

use OC\Preview\BackgroundCleanupJob;
use OC\Preview\Storage\Root;
use OC\PreviewManager;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\Files\File;
use OCP\Files\IMimeTypeLoader;
use OCP\Files\IRootFolder;
use OCP\Files\NotFoundException;
use OCP\IDBConnection;
use Test\Traits\MountProviderTrait;
use Test\Traits\UserTrait;

/**
 * Class BackgroundCleanupJobTest
 *
 * @group DB
 *
 * @package Test\Preview
 */
class BackgroundCleanupJobTest extends \Test\TestCase {
	use MountProviderTrait;
	use UserTrait;

	/** @var string */
	private $userId;

	/** @var bool */
	private $trashEnabled;

	/** @var IDBConnection */
	private $connection;

	/** @var PreviewManager */
	private $previewManager;

	/** @var IRootFolder */
	private $rootFolder;

	/** @var IMimeTypeLoader */
	private $mimeTypeLoader;

	private ITimeFactory $timeFactory;

	protected function setUp(): void {
		parent::setUp();

		$this->userId = $this->getUniqueID();
		$user = $this->createUser($this->userId, $this->userId);

		$storage = new \OC\Files\Storage\Temporary([]);
		$this->registerMount($this->userId, $storage, '');

		$this->loginAsUser($this->userId);
		$this->logout();
		$this->loginAsUser($this->userId);

		$appManager = \OC::$server->getAppManager();
		$this->trashEnabled = $appManager->isEnabledForUser('files_trashbin', $user);
		$appManager->disableApp('files_trashbin');

		$this->connection = \OC::$server->getDatabaseConnection();
		$this->previewManager = \OC::$server->getPreviewManager();
		$this->rootFolder = \OC::$server->get(IRootFolder::class);
		$this->mimeTypeLoader = \OC::$server->getMimeTypeLoader();
		$this->timeFactory = \OCP\Server::get(ITimeFactory::class);
	}

	protected function tearDown(): void {
		if ($this->trashEnabled) {
			$appManager = \OC::$server->getAppManager();
			$appManager->enableApp('files_trashbin');
		}

		$this->logout();

		parent::tearDown();
	}

	private function getRoot(): Root {
		return new Root(
			\OC::$server->get(IRootFolder::class),
			\OC::$server->getSystemConfig()
		);
	}

	private function setup11Previews(): array {
		$userFolder = $this->rootFolder->getUserFolder($this->userId);

		$files = [];
		for ($i = 0; $i < 11; $i++) {
			$file = $userFolder->newFile($i . '.txt');
			$file->putContent('hello world!');
			$this->previewManager->getPreview($file);
			$files[] = $file;
		}

		return $files;
	}

	private function countPreviews(Root $previewRoot, array $fileIds): int {
		$i = 0;

		foreach ($fileIds as $fileId) {
			try {
				$previewRoot->getFolder((string)$fileId);
			} catch (NotFoundException $e) {
				continue;
			}

			$i++;
		}

		return $i;
	}

	public function testCleanupSystemCron(): void {
		$files = $this->setup11Previews();
		$fileIds = array_map(function (File $f) {
			return $f->getId();
		}, $files);

		$root = $this->getRoot();

		$this->assertSame(11, $this->countPreviews($root, $fileIds));
		$job = new BackgroundCleanupJob($this->timeFactory, $this->connection, $root, $this->mimeTypeLoader, true);
		$job->run([]);

		foreach ($files as $file) {
			$file->delete();
		}

		$root = $this->getRoot();
		$this->assertSame(11, $this->countPreviews($root, $fileIds));
		$job->run([]);

		$root = $this->getRoot();
		$this->assertSame(0, $this->countPreviews($root, $fileIds));
	}

	public function testCleanupAjax(): void {
		if ($this->connection->getShardDefinition('filecache')) {
			$this->markTestSkipped('ajax cron is not supported for sharded setups');
			return;
		}
		$files = $this->setup11Previews();
		$fileIds = array_map(function (File $f) {
			return $f->getId();
		}, $files);

		$root = $this->getRoot();

		$this->assertSame(11, $this->countPreviews($root, $fileIds));
		$job = new BackgroundCleanupJob($this->timeFactory, $this->connection, $root, $this->mimeTypeLoader, false);
		$job->run([]);

		foreach ($files as $file) {
			$file->delete();
		}

		$root = $this->getRoot();
		$this->assertSame(11, $this->countPreviews($root, $fileIds));
		$job->run([]);

		$root = $this->getRoot();
		$this->assertSame(1, $this->countPreviews($root, $fileIds));
		$job->run([]);

		$root = $this->getRoot();
		$this->assertSame(0, $this->countPreviews($root, $fileIds));
	}

	public function testOldPreviews(): void {
		if ($this->connection->getShardDefinition('filecache')) {
			$this->markTestSkipped('old previews are not supported for sharded setups');
			return;
		}
		$appdata = \OC::$server->getAppDataDir('preview');

		$f1 = $appdata->newFolder('123456781');
		$f1->newFile('foo.jpg', 'foo');
		$f2 = $appdata->newFolder('123456782');
		$f2->newFile('foo.jpg', 'foo');
		$f2 = $appdata->newFolder((string)PHP_INT_MAX - 1);
		$f2->newFile('foo.jpg', 'foo');

		/*
		 * Cleanup of OldPreviewLocations should only remove folders on AppData level,
		 * therefore this file should stay untouched.
		 */
		$appdata->getAppDataFolder()->newFile('not-a-directory', 'foo');

		$appdata = \OC::$server->getAppDataDir('preview');
		$this->assertSame(4, count($appdata->getDirectoryListing()));

		$job = new BackgroundCleanupJob($this->timeFactory, $this->connection, $this->getRoot(), $this->mimeTypeLoader, true);
		$job->run([]);

		$appdata = \OC::$server->getAppDataDir('preview');

		// Check if the `not-a-directory` file is still present
		$directoryListing = $appdata->getDirectoryListing();
		$this->assertSame(1, count($directoryListing));
		$this->assertSame('not-a-directory', $directoryListing[0]->getName());
	}
}
