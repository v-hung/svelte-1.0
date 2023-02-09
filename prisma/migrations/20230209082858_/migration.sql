/*
  Warnings:

  - You are about to drop the `_RoomsToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_RoomsToUser` DROP FOREIGN KEY `_RoomsToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_RoomsToUser` DROP FOREIGN KEY `_RoomsToUser_B_fkey`;

-- DropTable
DROP TABLE `_RoomsToUser`;

-- CreateTable
CREATE TABLE `RoomsOnUsers` (
    `roomId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`roomId`, `userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RoomsOnUsers` ADD CONSTRAINT `RoomsOnUsers_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Rooms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomsOnUsers` ADD CONSTRAINT `RoomsOnUsers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
