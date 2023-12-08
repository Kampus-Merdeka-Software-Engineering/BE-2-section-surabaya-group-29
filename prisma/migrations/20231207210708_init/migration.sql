/*
  Warnings:

  - A unique constraint covering the columns `[cat_id]` on the table `News` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cat_id` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `waktu_baca` to the `News` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `News` ADD COLUMN `cat_id` INTEGER NOT NULL,
    ADD COLUMN `waktu_baca` VARCHAR(191) NOT NULL,
    MODIFY `judul` TEXT NOT NULL,
    MODIFY `deskripsi` TEXT NOT NULL,
    MODIFY `isiBerita` TEXT NOT NULL,
    MODIFY `penulis` VARCHAR(191) NOT NULL,
    MODIFY `foto` TEXT NOT NULL;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cat_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `News_cat_id_key` ON `News`(`cat_id`);

-- AddForeignKey
ALTER TABLE `News` ADD CONSTRAINT `News_cat_id_fkey` FOREIGN KEY (`cat_id`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
