/*
  Warnings:

  - You are about to drop the `RoomsOnUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `RoomsOnUsers` DROP FOREIGN KEY `RoomsOnUsers_roomId_fkey`;

-- DropForeignKey
ALTER TABLE `RoomsOnUsers` DROP FOREIGN KEY `RoomsOnUsers_userId_fkey`;

-- DropTable
DROP TABLE `RoomsOnUsers`;

-- CreateTable
CREATE TABLE `_RoomsToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_RoomsToUser_AB_unique`(`A`, `B`),
    INDEX `_RoomsToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_RoomsToUser` ADD CONSTRAINT `_RoomsToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Rooms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RoomsToUser` ADD CONSTRAINT `_RoomsToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
