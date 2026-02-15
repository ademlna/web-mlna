-- phpMyAdmin SQL Dump
-- version 5.2.1deb3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 06 Feb 2026 pada 12.56
-- Versi server: 8.0.45-0ubuntu0.24.04.1
-- Versi PHP: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mlna`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `account`
--

CREATE TABLE `account` (
  `account_id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(64) NOT NULL,
  `role` enum('admin','user') NOT NULL,
  `email` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` text NOT NULL,
  `photo_profile` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `account`
--

INSERT INTO `account` (`account_id`, `name`, `role`, `email`, `password`, `photo_profile`, `created_at`, `updated_at`) VALUES
('8382d5f1-fa0e-4f4e-a36c-31c592e13933', 'John Doe', 'admin', 'john1@gmail.com', '$2y$12$oor54RIG4jaONTnW/kkB/uEQG96JF5DrdIJ46GrnWuL8RJ5NEYueC', '', '2025-10-14 05:14:03', '2025-10-14 05:14:03'),
('d0a99078-a80d-11f0-b8a0-269af84ebf3e', 'Ade Maulana', 'user', 'ademaulanahidayah3103@gmail.com', '$2y$10$cg4n8sD5P6rul58p36hbcO8gHnKh9W38vRI00CZ2BoXwHJFgJ.QBG', '', '2025-10-17 06:57:18', '2025-10-17 06:57:18');

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `category_id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`category_id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'Landscape', '-', '2025-10-13 08:23:00', '2025-10-13 08:23:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `photo`
--

CREATE TABLE `photo` (
  `photo_id` varchar(36) NOT NULL,
  `location` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `caption` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `filename` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `category_id` int NOT NULL,
  `account_id` varchar(36) NOT NULL,
  `taken_at` date NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `photo`
--

INSERT INTO `photo` (`photo_id`, `location`, `caption`, `filename`, `category_id`, `account_id`, `taken_at`, `created_at`, `updated_at`) VALUES
('6ee8d3df-5aaa-4963-b09d-80862424adfe', 'Yogyakarta,Indoensia', 'perjalanan2', '6ba989d6-90c2-472f-ba6a-c1f7fa388884.jpeg', 1, 'd0a99078-a80d-11f0-b8a0-269af84ebf3e', '2025-10-19', '2025-10-19 10:59:50', '2025-10-19 10:59:50');

-- --------------------------------------------------------

--
-- Struktur dari tabel `photo_tag`
--

CREATE TABLE `photo_tag` (
  `photo_tag_id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `photo_id` varchar(36) NOT NULL,
  `tag` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `photo_tag`
--

INSERT INTO `photo_tag` (`photo_tag_id`, `photo_id`, `tag`) VALUES
('d4323ce5-e7ec-4a3d-b78e-b3dcb9faff5c', '6ee8d3df-5aaa-4963-b09d-80862424adfe', 'pantaisea'),
('e54ab072-94ce-44bc-b9c3-c91d74b5707c', '6ee8d3df-5aaa-4963-b09d-80862424adfe', 'indonesia');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`account_id`);

--
-- Indeks untuk tabel `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indeks untuk tabel `photo`
--
ALTER TABLE `photo`
  ADD PRIMARY KEY (`photo_id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `account_id` (`account_id`);

--
-- Indeks untuk tabel `photo_tag`
--
ALTER TABLE `photo_tag`
  ADD PRIMARY KEY (`photo_tag_id`),
  ADD KEY `photo_id` (`photo_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `photo`
--
ALTER TABLE `photo`
  ADD CONSTRAINT `photo_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `photo_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `photo_ibfk_3` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ketidakleluasaan untuk tabel `photo_tag`
--
ALTER TABLE `photo_tag`
  ADD CONSTRAINT `photo_tag_ibfk_1` FOREIGN KEY (`photo_id`) REFERENCES `photo` (`photo_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
