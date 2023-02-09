/*
  Warnings:

  - You are about to drop the `MessageGroups` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MessageGroupsToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Messages` DROP FOREIGN KEY `Messages_messageGroupId_fkey`;

-- DropForeignKey
ALTER TABLE `_MessageGroupsToUser` DROP FOREIGN KEY `_MessageGroupsToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_MessageGroupsToUser` DROP FOREIGN KEY `_MessageGroupsToUser_B_fkey`;

-- DropTable
DROP TABLE `MessageGroups`;

-- DropTable
DROP TABLE `_MessageGroupsToUser`;

-- CreateTable
CREATE TABLE `Rooms` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_RoomsToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_RoomsToUser_AB_unique`(`A`, `B`),
    INDEX `_RoomsToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Messages` ADD CONSTRAINT `Messages_messageGroupId_fkey` FOREIGN KEY (`messageGroupId`) REFERENCES `Rooms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RoomsToUser` ADD CONSTRAINT `_RoomsToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Rooms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RoomsToUser` ADD CONSTRAINT `_RoomsToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
