/*
  Warnings:

  - You are about to drop the column `RoomId` on the `Messages` table. All the data in the column will be lost.
  - Added the required column `roomId` to the `Messages` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Messages` DROP FOREIGN KEY `Messages_RoomId_fkey`;

-- AlterTable
ALTER TABLE `Messages` DROP COLUMN `RoomId`,
    ADD COLUMN `roomId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Messages` ADD CONSTRAINT `Messages_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Rooms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
