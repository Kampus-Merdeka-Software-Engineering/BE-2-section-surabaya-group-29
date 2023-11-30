-- CreateTable
CREATE TABLE `News` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(100) NOT NULL,
    `deskripsi` VARCHAR(100) NOT NULL,
    `isiBerita` VARCHAR(100) NOT NULL,
    `penulis` VARCHAR(100) NOT NULL,
    `foto` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
