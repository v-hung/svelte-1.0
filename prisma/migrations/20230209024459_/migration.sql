/*
  Warnings:

  - You are about to drop the column `messageGroupId` on the `Messages` table. All the data in the column will be lost.
  - Added the required column `RoomId` to the `Messages` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Messages` DROP FOREIGN KEY `Messages_messageGroupId_fkey`;

-- AlterTable
ALTER TABLE `Messages` DROP COLUMN `messageGroupId`,
    ADD COLUMN `RoomId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Messages` ADD CONSTRAINT `Messages_RoomId_fkey` FOREIGN KEY (`RoomId`) REFERENCES `Rooms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
