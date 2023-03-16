/*
  Warnings:

  - You are about to drop the column `image` on the `GroupQuestions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `GroupQuestions` DROP COLUMN `image`,
    ADD COLUMN `image_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `GroupQuestions` ADD CONSTRAINT `GroupQuestions_image_id_fkey` FOREIGN KEY (`image_id`) REFERENCES `Images`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
