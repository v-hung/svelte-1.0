-- CreateTable
CREATE TABLE `MessageGroups` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Messages` (
    `id` VARCHAR(191) NOT NULL,
    `senderID` VARCHAR(191) NOT NULL,
    `isRead` BOOLEAN NOT NULL DEFAULT false,
    `body` VARCHAR(191) NOT NULL,
    `messageGroupId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Messages_messageGroupId_key`(`messageGroupId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_MessageGroupsToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_MessageGroupsToUser_AB_unique`(`A`, `B`),
    INDEX `_MessageGroupsToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Messages` ADD CONSTRAINT `Messages_senderID_fkey` FOREIGN KEY (`senderID`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Messages` ADD CONSTRAINT `Messages_messageGroupId_fkey` FOREIGN KEY (`messageGroupId`) REFERENCES `MessageGroups`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MessageGroupsToUser` ADD CONSTRAINT `_MessageGroupsToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `MessageGroups`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MessageGroupsToUser` ADD CONSTRAINT `_MessageGroupsToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
