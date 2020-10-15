-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `departaments`
--

DROP TABLE IF EXISTS `departaments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departaments` (
  `iddepartaments` int unsigned NOT NULL AUTO_INCREMENT,
  `departaments_name` varchar(255) NOT NULL,
  `departaments_image` varchar(255) NOT NULL,
  PRIMARY KEY (`iddepartaments`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departaments`
--

LOCK TABLES `departaments` WRITE;
/*!40000 ALTER TABLE `departaments` DISABLE KEYS */;
INSERT INTO `departaments` VALUES (1,'Eletrônicos','./temp/img/dep/departamento-eletronicos.png'),(2,'Informática','./temp/img/dep/departamento-informatica.png'),(3,'Sapataria','./temp/img/dep/departamento-sapataria.png');
/*!40000 ALTER TABLE `departaments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departaments_has_products`
--

DROP TABLE IF EXISTS `departaments_has_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departaments_has_products` (
  `departaments_iddepartament` int unsigned DEFAULT NULL,
  `products_idproducts` int unsigned DEFAULT NULL,
  KEY `departaments_has_products_departaments_iddepartament_foreign` (`departaments_iddepartament`),
  KEY `departaments_has_products_products_idproducts_foreign` (`products_idproducts`),
  CONSTRAINT `departaments_has_products_departaments_iddepartament_foreign` FOREIGN KEY (`departaments_iddepartament`) REFERENCES `departaments` (`iddepartaments`),
  CONSTRAINT `departaments_has_products_products_idproducts_foreign` FOREIGN KEY (`products_idproducts`) REFERENCES `product` (`idproduct`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departaments_has_products`
--

LOCK TABLES `departaments_has_products` WRITE;
/*!40000 ALTER TABLE `departaments_has_products` DISABLE KEYS */;
INSERT INTO `departaments_has_products` VALUES (1,4),(1,5),(1,6),(1,7),(1,8),(1,9),(1,10),(1,11),(1,12);
/*!40000 ALTER TABLE `departaments_has_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations`
--

DROP TABLE IF EXISTS `knex_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knex_migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int DEFAULT NULL,
  `migration_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations`
--

LOCK TABLES `knex_migrations` WRITE;
/*!40000 ALTER TABLE `knex_migrations` DISABLE KEYS */;
INSERT INTO `knex_migrations` VALUES (1,'20201003121330_user.js',1,'2020-10-14 17:09:34'),(2,'20201003125319_product.js',1,'2020-10-14 17:09:34'),(3,'20201003125854_products-photos.js',1,'2020-10-14 17:09:34'),(4,'20201003130149_portage.js',1,'2020-10-14 17:09:34'),(5,'20201003152846_products_has_user.js',1,'2020-10-14 17:09:35'),(6,'20201007172729_departaments.js',1,'2020-10-14 17:09:35'),(7,'20201007173227_departaments_has_products.js',1,'2020-10-14 17:09:35');
/*!40000 ALTER TABLE `knex_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations_lock`
--

DROP TABLE IF EXISTS `knex_migrations_lock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knex_migrations_lock` (
  `index` int unsigned NOT NULL AUTO_INCREMENT,
  `is_locked` int DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations_lock`
--

LOCK TABLES `knex_migrations_lock` WRITE;
/*!40000 ALTER TABLE `knex_migrations_lock` DISABLE KEYS */;
INSERT INTO `knex_migrations_lock` VALUES (1,0);
/*!40000 ALTER TABLE `knex_migrations_lock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `portage`
--

DROP TABLE IF EXISTS `portage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `portage` (
  `idportage` int unsigned NOT NULL AUTO_INCREMENT,
  `portage_date` varchar(255) NOT NULL,
  `portage_price` varchar(255) NOT NULL,
  `portage_days` varchar(255) NOT NULL,
  `portage_type` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idportage`),
  UNIQUE KEY `portage_portage_price_unique` (`portage_price`),
  UNIQUE KEY `portage_portage_days_unique` (`portage_days`),
  UNIQUE KEY `portage_portage_type_unique` (`portage_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `portage`
--

LOCK TABLES `portage` WRITE;
/*!40000 ALTER TABLE `portage` DISABLE KEYS */;
/*!40000 ALTER TABLE `portage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `idproduct` int unsigned NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `product_price` double NOT NULL,
  `product_amount` int NOT NULL,
  `user_iduser` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `product_about` varchar(255) NULL,
  PRIMARY KEY (`idproduct`),
  KEY `product_user_iduser_foreign` (`user_iduser`),
  CONSTRAINT `product_user_iduser_foreign` FOREIGN KEY (`user_iduser`) REFERENCES `user` (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product`(`idproduct`,
`product_name`,
`product_price`,
`product_amount`,
`user_iduser`,
`created_at`,
`updated_at`) VALUES (1,'Macarrão',20.5,5,1,'2020-10-14 17:10:11','2020-10-14 17:10:11'),(2,'Carro',20.5,5,1,'2020-10-14 17:10:11','2020-10-14 17:10:11'),(3,'Moto',20.5,5,1,'2020-10-14 17:10:11','2020-10-14 17:10:11),(4,'biquini 01',20.3,300,1,'2020-10-14 19:58:40','2020-10-14 19:58:40),(5,'biquini 02',20.3,300,1,'2020-10-14 20:02:31','2020-10-14 20:02:31),(6,'biquini 03',20.3,300,1,'2020-10-14 20:03:24','2020-10-14 20:03:24),(7,'biquini 04',20.3,300,1,'2020-10-14 20:03:26','2020-10-14 20:03:26),(8,'short 01',20.3,300,1,'2020-10-14 20:04:27','2020-10-14 20:04:27),(9,'short 02',20.3,300,1,'2020-10-14 20:04:45','2020-10-14 20:04:45),(10,'short 03',20.3,300,1,'2020-10-14 20:04:47','2020-10-14 20:04:47),(11,'short 04',20.3,300,1,'2020-10-14 20:04:51','2020-10-14 20:04:51),(12,'short',20.3,300,4,'2020-10-14 20:19:38','2020-10-14 20:19:38);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_has_user`
--

DROP TABLE IF EXISTS `products_has_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_has_user` (
  `products_idproducts` int unsigned DEFAULT NULL,
  `user_iduser` int unsigned DEFAULT NULL,
  `products_has_user_date` timestamp NULL DEFAULT NULL,
  `products_has_user_qtd` int DEFAULT NULL,
  `portage_idportage` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `products_has_user_products_idproducts_foreign` (`products_idproducts`),
  KEY `products_has_user_user_iduser_foreign` (`user_iduser`),
  KEY `products_has_user_portage_idportage_foreign` (`portage_idportage`),
  CONSTRAINT `products_has_user_portage_idportage_foreign` FOREIGN KEY (`portage_idportage`) REFERENCES `portage` (`idportage`),
  CONSTRAINT `products_has_user_products_idproducts_foreign` FOREIGN KEY (`products_idproducts`) REFERENCES `product` (`idproduct`),
  CONSTRAINT `products_has_user_user_iduser_foreign` FOREIGN KEY (`user_iduser`) REFERENCES `user` (`iduser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_has_user`
--

LOCK TABLES `products_has_user` WRITE;
/*!40000 ALTER TABLE `products_has_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_has_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_photos`
--

DROP TABLE IF EXISTS `products_photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_photos` (
  `idphoto` int unsigned NOT NULL AUTO_INCREMENT,
  `products_photos_dir` varchar(255) NOT NULL,
  `products_idproduct` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idphoto`),
  KEY `products_photos_products_idproduct_foreign` (`products_idproduct`),
  CONSTRAINT `products_photos_products_idproduct_foreign` FOREIGN KEY (`products_idproduct`) REFERENCES `product` (`idproduct`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_photos`
--

LOCK TABLES `products_photos` WRITE;
/*!40000 ALTER TABLE `products_photos` DISABLE KEYS */;
INSERT INTO `products_photos` VALUES (1,'/temp/img/3105b57bb6c1cfc183444fe8b3a69b0a-biquini01.jpeg',4,'2020-10-14 20:01:44','2020-10-14 20:01:44'),(2,'/temp/img/88a13d5ffc965fa07ec7876abbed2e9a-biquini02.jpeg',5,'2020-10-14 20:02:51','2020-10-14 20:02:51'),(3,'/temp/img/f1688203f43fd2aab8cb43905aa477ba-biquini03.jpeg',6,'2020-10-14 20:03:41','2020-10-14 20:03:41'),(4,'/temp/img/1e7f1794ffe28d34a25bd9560f1e72e5-biquini04.webp',7,'2020-10-14 20:03:53','2020-10-14 20:03:53'),(5,'/temp/img/692c6cb4ac2d83d896700c6abbe7f74a-short01.jpeg',8,'2020-10-14 20:04:38','2020-10-14 20:04:38'),(6,'/temp/img/019972416b21a733942445451dc0747c-short02.jpeg',9,'2020-10-14 20:05:03','2020-10-14 20:05:03'),(9,'/temp/img/7e1148a9f0c3d95cb659b5f8eb2a7781-019972416b21a733942445451dc0747c-short02.jpeg',12,'2020-10-14 20:19:45','2020-10-14 20:19:45');
/*!40000 ALTER TABLE `products_photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `iduser` int unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `user_lastname` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_pass` varchar(255) NOT NULL,
  `user_whatsapp` varchar(255) NOT NULL,
  `user_photo` varchar(255) NOT NULL,
  `user_city` varchar(255) NOT NULL,
  `user_state` varchar(255) NOT NULL,
  `user_district` varchar(255) NOT NULL,
  `user_postalcode` varchar(255) NOT NULL,
  `user_cpf` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`iduser`),
  UNIQUE KEY `user_user_email_unique` (`user_email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'jhonis','oliver','joneivison355@gmail.com','$2a$12$eaPNICyYAc/bLvXELxJUKeJqnP.0JBgo9izZWcibJ2jgHXJpP/NJu','739999999999','/temp/foto','ubaitaba','bahia','belavista','45545000','12345678901','2020-10-14 17:10:11','2020-10-14 17:10:11'),(2,'jhonis1','oliver1','joneivison355@gmail.com1','$2a$12$eaPNICyYAc/bLvXELxJUKeJqnP.0JBgo9izZWcibJ2jgHXJpP/NJu','7399999999991','/temp/foto1','ubaitaba1','bahia1','belavista1','455450001','12345678901','2020-10-14 17:10:11','2020-10-14 17:10:11'),(3,'jhonis2','oliver2','joneivison355@gmail.com2','$2a$12$eaPNICyYAc/bLvXELxJUKeJqnP.0JBgo9izZWcibJ2jgHXJpP/NJu','7399999999992','/temp/foto2','ubaitaba2','bahia2','belavista2','455450002','12345678902','2020-10-14 17:10:11','2020-10-14 17:10:11'),(4,'joni','oliveira','oi@gmail.com','$2a$12$B24bEEZASltlgX9IJpDO1.01F06M3AyPTO6Mngiy58R2vrCGkEZKO','73999553301','thumbnail.png','','','','','11111111111','2020-10-14 18:13:34','2020-10-14 18:13:34');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-14 21:49:29
