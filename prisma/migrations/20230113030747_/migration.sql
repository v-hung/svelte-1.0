/*
  Warnings:

  - Made the column `type` on table `GroupQuestions` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `GroupQuestions` MODIFY `type` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Passages` MODIFY `content` TEXT NOT NULL;
