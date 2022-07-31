-- MySQL dump 10.13  Distrib 8.0.29, for macos12.2 (x86_64)
--
-- Host: localhost    Database: asset_management_db
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assetDetails`
--

DROP TABLE IF EXISTS `assetDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assetDetails` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `asset_id` int unsigned NOT NULL,
  `manufacturer` varchar(255) NOT NULL,
  `modelName` varchar(255) NOT NULL,
  `modelNumber` varchar(255) NOT NULL,
  `serialNumber` varchar(255) NOT NULL,
  `processor` varchar(255) NOT NULL,
  `memory` varchar(255) NOT NULL,
  `storage` varchar(255) NOT NULL,
  `operatingSystem` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assetDetails`
--

LOCK TABLES `assetDetails` WRITE;
/*!40000 ALTER TABLE `assetDetails` DISABLE KEYS */;
INSERT INTO `assetDetails` VALUES (1,1,'Apple','A160','7he8nw213e','71219290','Intel','16','512','macOS','2022-07-30 18:01:07','2022-07-30 18:01:07'),(2,2,'Apple','A160','7he8nw213e','71219290','Intel','16','512','macOS','2022-07-30 18:01:26','2022-07-30 18:01:26');
/*!40000 ALTER TABLE `assetDetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assets`
--

DROP TABLE IF EXISTS `assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assets` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `companyId` varchar(255) NOT NULL,
  `category_id` int unsigned NOT NULL,
  `type_id` int unsigned NOT NULL,
  `sub_type_id` int unsigned NOT NULL,
  `currentOwnerId` varchar(255) NOT NULL,
  `currentDepartmentId` varchar(255) NOT NULL,
  `currentDivisionId` varchar(255) NOT NULL,
  `currentLocationId` varchar(255) NOT NULL,
  `currentState` varchar(255) NOT NULL,
  `isLeased` tinyint(1) NOT NULL,
  `isOwned` tinyint(1) NOT NULL,
  `approval` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assets`
--

LOCK TABLES `assets` WRITE;
/*!40000 ALTER TABLE `assets` DISABLE KEYS */;
INSERT INTO `assets` VALUES (1,'1234',1,1,1,'123','12345','2345','345','Active',1,0,'671231','2022-07-30 18:01:07','2022-07-30 18:01:07'),(2,'1234',1,1,1,'123','12345','2345','345','Active',1,0,'671231','2022-07-30 18:01:26','2022-07-30 18:01:26');
/*!40000 ALTER TABLE `assets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Physical Assets','2022-07-30 18:01:05','2022-07-30 18:54:47'),(2,'Physical Assets','2022-07-30 18:01:06','2022-07-30 18:01:06');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `asset_id` int unsigned NOT NULL,
  `commenterUserId` varchar(255) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,1,'90123','Test Comment 2','2022-07-30 18:01:07','2022-07-30 18:01:07'),(2,1,'90123','Test Comment 2','2022-07-30 18:01:07','2022-07-30 18:01:07'),(3,2,'90123','Test Comment 2','2022-07-30 18:01:26','2022-07-30 18:01:26'),(4,2,'90123','Test Comment 2','2022-07-30 18:01:26','2022-07-30 18:01:26');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `histories`
--

DROP TABLE IF EXISTS `histories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `histories` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `asset_id` int unsigned NOT NULL,
  `fromDate` date NOT NULL,
  `toDate` date NOT NULL,
  `ownerId` varchar(255) NOT NULL,
  `locationId` varchar(255) NOT NULL,
  `departmentId` varchar(255) NOT NULL,
  `divisionId` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `histories`
--

LOCK TABLES `histories` WRITE;
/*!40000 ALTER TABLE `histories` DISABLE KEYS */;
INSERT INTO `histories` VALUES (1,1,'2020-04-29','2020-06-28','2345','3456','4567','5678','2022-07-30 18:01:07','2022-07-30 18:01:07'),(2,1,'2020-04-29','2020-06-28','2345','3456','4567','5678','2022-07-30 18:01:07','2022-07-30 18:01:07'),(3,2,'2020-04-29','2020-06-28','2345','3456','4567','5678','2022-07-30 18:01:26','2022-07-30 18:01:26'),(4,2,'2020-04-29','2020-06-28','2345','3456','4567','5678','2022-07-30 18:01:26','2022-07-30 18:01:26');
/*!40000 ALTER TABLE `histories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leaseDetails`
--

DROP TABLE IF EXISTS `leaseDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leaseDetails` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `asset_id` int unsigned NOT NULL,
  `leaseStartDate` date NOT NULL,
  `leaseEndDate` date NOT NULL,
  `leaseCost` varchar(255) NOT NULL,
  `refreshDate` date NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leaseDetails`
--

LOCK TABLES `leaseDetails` WRITE;
/*!40000 ALTER TABLE `leaseDetails` DISABLE KEYS */;
INSERT INTO `leaseDetails` VALUES (1,1,'2021-11-07','2022-11-06','200','2022-05-02','2022-07-30 18:01:07','2022-07-30 18:01:07'),(2,2,'2021-11-07','2022-11-06','200','2022-05-02','2022-07-30 18:01:26','2022-07-30 18:01:26');
/*!40000 ALTER TABLE `leaseDetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lessorDetails`
--

DROP TABLE IF EXISTS `lessorDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lessorDetails` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `leaseDetail_id` int unsigned NOT NULL,
  `lessorName` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lessorDetails`
--

LOCK TABLES `lessorDetails` WRITE;
/*!40000 ALTER TABLE `lessorDetails` DISABLE KEYS */;
INSERT INTO `lessorDetails` VALUES (1,1,'Adam Smith','2022-07-30 18:01:07','2022-07-30 18:01:07'),(2,2,'Adam Smith','2022-07-30 18:01:26','2022-07-30 18:01:26');
/*!40000 ALTER TABLE `lessorDetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `licenses`
--

DROP TABLE IF EXISTS `licenses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `licenses` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `asset_id` int unsigned NOT NULL,
  `license` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `licenses`
--

LOCK TABLES `licenses` WRITE;
/*!40000 ALTER TABLE `licenses` DISABLE KEYS */;
INSERT INTO `licenses` VALUES (1,1,'Test License 2','2022-07-30 18:01:07','2022-07-30 18:01:07'),(2,1,'Test License 2','2022-07-30 18:01:07','2022-07-30 18:01:07'),(3,2,'Test License 2','2022-07-30 18:01:26','2022-07-30 18:01:26'),(4,2,'Test License 2','2022-07-30 18:01:26','2022-07-30 18:01:26');
/*!40000 ALTER TABLE `licenses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipping`
--

DROP TABLE IF EXISTS `shipping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shipping` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `asset_id` int unsigned NOT NULL,
  `shipping` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipping`
--

LOCK TABLES `shipping` WRITE;
/*!40000 ALTER TABLE `shipping` DISABLE KEYS */;
INSERT INTO `shipping` VALUES (1,1,'Test Shipping Detail','2022-07-30 18:01:07','2022-07-30 18:01:07'),(2,2,'Test Shipping Detail','2022-07-30 18:01:26','2022-07-30 18:01:26');
/*!40000 ALTER TABLE `shipping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subTypes`
--

DROP TABLE IF EXISTS `subTypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subTypes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `category_id` int unsigned NOT NULL,
  `type_id` int unsigned NOT NULL,
  `subTypeName` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subTypes`
--

LOCK TABLES `subTypes` WRITE;
/*!40000 ALTER TABLE `subTypes` DISABLE KEYS */;
INSERT INTO `subTypes` VALUES (1,1,1,'Breakfast bars','2022-07-30 18:01:05','2022-07-30 20:07:31'),(2,1,1,'Lounges','2022-07-30 18:01:05','2022-07-30 18:01:05'),(3,2,2,'Breakfast barbells','2022-07-30 18:01:06','2022-07-30 20:08:09'),(4,2,2,'Lounges','2022-07-30 18:01:06','2022-07-30 18:01:06');
/*!40000 ALTER TABLE `subTypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testcompany`
--

DROP TABLE IF EXISTS `testcompany`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `testcompany` (
  `Employee Id` bigint DEFAULT NULL,
  `First Name` text,
  `Last Name` text,
  `Middle Name` text,
  `Gender` text,
  `Date of Birth` text,
  `Joined Date` text,
  `Location` text,
  `Department` text,
  `Employment Type` text,
  `Title` text,
  `Work Email` text,
  `Personal Email` text,
  `Manager Work Email` text,
  `Personal Number` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testcompany`
--

LOCK TABLES `testcompany` WRITE;
/*!40000 ALTER TABLE `testcompany` DISABLE KEYS */;
INSERT INTO `testcompany` VALUES (1,'Test1','Name1','','Female','11/26/1984','06/13/2021','USA','Executive Leadership Team','Full Time','Chief Technology Officer','testcompany1_cto@mailinator.com','testcompany1_cto_personal@mailinator.com','testcompany1_ceo@mailinator.com','1012345678'),(2,'Test2','Name2','','Female','01/23/1985','06/13/2021','USA','Executive Leadership Team','Full Time','Chief People Officer','testcompany1_cpo@mailinator.com','testcompany1_cpo_personal@mailinator.com','testcompany1_ceo@mailinator.com','2012345678'),(3,'Test3','Name3','','Male','05/27/1996','06/13/2021','USA','Executive Leadership Team','Full Time','Chief Finance Officer','testcompany1_cfo@mailinator.com','testcompany1_cfo_personal@mailinator.com','testcompany1_ceo@mailinator.com','3012345678'),(4,'Test4','Name4','','Female','06/09/1993','06/13/2021','USA','Executive Leadership Team','Full Time','Chief Marketing Officer','testcompany1_cmo@mailinator.com','testcompany1_cmo_personal@mailinator.com','testcompany1_ceo@mailinator.com','4012345678'),(5,'Test5','Name5','','Female','08/08/1982','06/13/2021','USA','Executive Leadership Team','Full Time','Chief Sales Officer','testcompany1_cso@mailinator.com','testcompany1_cso_personal@mailinator.com','testcompany1_ceo@mailinator.com','5012345678'),(6,'Test6','Name6','','Male','05/08/1981','06/13/2021','USA','Executive Leadership Team','Full Time','Chief IT Officer','testcompany1_cio@mailinator.com','testcompany1_cio_personal@mailinator.com','testcompany1_ceo@mailinator.com','6012345678'),(7,'Test7','Name7','','Female','07/23/1994','06/13/2021','USA','Executive Leadership Team','Full Time','Chief Operations Officer','testcompany1_coo@mailinator.com','testcompany1_coo_personal@mailinator.com','testcompany1_ceo@mailinator.com','7012345678'),(8,'Test8','Name8','','Female','04/12/1991','06/13/2021','USA','Executive Leadership Team','Full Time','Chief Legal Officer','testcompany1_clo@mailinator.com','testcompany1_clo_personal@mailinator.com','testcompany1_ceo@mailinator.com','8012345678'),(9,'Test9','Name9','','Female','06/13/1983','06/13/2021','USA','Engineering','Full Time','Eng. Director 1','testcompany1_engdirector1@mailinator.com','testcompany1_engdirector1_personal@mailinator.com','testcompany1_cto@mailinator.com','9012345678'),(10,'Test10','Name10','','Male','10/15/1984','06/13/2021','USA','Engineering','Full Time','Eng. Sr. Manager 1','testcompany1_engsrmanager1@mailinator.com','testcompany1_engsrmanager1_personal@mailinator.com','testcompany1_engdirector1@mailinator.com','1001234567'),(11,'Test11','Name11','','Female','05/05/1980','06/13/2021','USA','Engineering','Full Time','Eng. Manager 1','testcompany1_engmanager1@mailinator.com','testcompany1_engmanager1_personal@mailinator.com','testcompany1_engsrmanager1@mailinator.com','1101234567'),(12,'Test12','Name12','','Male','11/20/1980','06/13/2021','USA','Engineering','Full Time','Eng. Manager 2','testcompany1_engmanager2@mailinator.com','testcompany1_engmanager2_personal@mailinator.com','testcompany1_engsrmanager1@mailinator.com','1201234567'),(13,'Test13','Name13','','Male','07/26/1980','06/13/2021','USA','Engineering','Full Time','Eng. Employee 1','testcompany1_engemployee1@mailinator.com','testcompany1_engemployee1_personal@mailinator.com','testcompany1_engmanager1@mailinator.com','1301234567'),(14,'Test14','Name14','','Female','07/23/1987','06/13/2021','USA','Engineering','Full Time','Eng. Employee 2','testcompany1_engemployee2@mailinator.com','testcompany1_engemployee2_personal@mailinator.com','testcompany1_engmanager1@mailinator.com','1401234567'),(15,'Test15','Name15','','Male','07/24/1988','06/13/2021','USA','Engineering','Full Time','Eng. Employee 3','testcompany1_engemployee3@mailinator.com','testcompany1_engemployee3_personal@mailinator.com','testcompany1_engmanager1@mailinator.com','1501234567'),(16,'Test16','Name16','','Male','01/19/1998','06/13/2021','USA','Engineering','Full Time','Eng. Employee 4','testcompany1_engemployee4@mailinator.com','testcompany1_engemployee4_personal@mailinator.com','testcompany1_engmanager2@mailinator.com','1601234567'),(17,'Test17','Name17','','Female','11/26/1991','06/13/2021','USA','Engineering','Full Time','Eng. Employee 5','testcompany1_engemployee5@mailinator.com','testcompany1_engemployee5_personal@mailinator.com','testcompany1_engmanager2@mailinator.com','1701234567'),(18,'Test18','Name18','','Female','02/08/1998','06/13/2021','USA','Engineering','Full Time','Eng. Employee 6','testcompany1_engemployee6@mailinator.com','testcompany1_engemployee6_personal@mailinator.com','testcompany1_engmanager2@mailinator.com','1801234567'),(19,'Test19','Name19','','Female','06/01/1999','06/13/2021','USA','HR','Full Time','HR Director 1','testcompany1_hrdirector1@mailinator.com','testcompany1_hrdirector1_personal@mailinator.com','testcompany1_cpo@mailinator.com','1901234567'),(20,'Test20','Name20','','Male','01/25/1992','06/13/2021','USA','HR','Full Time','HR Sr. Manager 1','testcompany1_hrsrmanager1@mailinator.com','testcompany1_hrsrmanager1_personal@mailinator.com','testcompany1_hrdirector1@mailinator.com','2001234567'),(21,'Test21','Name21','','Male','01/20/1987','06/13/2021','USA','HR','Full Time','HR Manager 1','testcompany1_hrmanager1@mailinator.com','testcompany1_hrmanager1_personal@mailinator.com','testcompany1_hrsrmanager1@mailinator.com','2101234567'),(22,'Test22','Name22','','Male','02/22/1999','06/13/2021','USA','HR','Full Time','HR Manager 2','testcompany1_hrmanager2@mailinator.com','testcompany1_hrmanager2_personal@mailinator.com','testcompany1_hrsrmanager1@mailinator.com','2201234567'),(23,'Test23','Name23','','Female','11/28/1993','06/13/2021','USA','HR','Full Time','HR Employee 1','testcompany1_hremployee1@mailinator.com','testcompany1_hremployee1_personal@mailinator.com','testcompany1_hrmanager1@mailinator.com','2301234567'),(24,'Test24','Name24','','Male','05/07/1994','06/13/2021','USA','HR','Full Time','HR Employee 2','testcompany1_hremployee2@mailinator.com','testcompany1_hremployee2_personal@mailinator.com','testcompany1_hrmanager1@mailinator.com','2401234567'),(25,'Test25','Name25','','Female','01/04/1989','06/13/2021','USA','HR','Full Time','HR Employee 3','testcompany1_hremployee3@mailinator.com','testcompany1_hremployee3_personal@mailinator.com','testcompany1_hrmanager1@mailinator.com','2501234567'),(26,'Test26','Name26','','Female','08/26/1982','06/13/2021','USA','HR','Full Time','HR Employee 4','testcompany1_hremployee4@mailinator.com','testcompany1_hremployee4_personal@mailinator.com','testcompany1_hrmanager2@mailinator.com','2601234567'),(27,'Test27','Name27','','Male','12/01/1985','06/13/2021','USA','HR','Full Time','HR Employee 5','testcompany1_hremployee5@mailinator.com','testcompany1_hremployee5_personal@mailinator.com','testcompany1_hrmanager2@mailinator.com','2701234567'),(28,'Test28','Name28','','Male','07/12/1993','06/13/2021','USA','HR','Full Time','HR Employee 6','testcompany1_hremployee6@mailinator.com','testcompany1_hremployee6_personal@mailinator.com','testcompany1_hrmanager2@mailinator.com','2801234567'),(29,'Test29','Name29','','Female','08/22/1983','06/13/2021','USA','Finance','Full Time','Finance Director 1','testcompany1_financedirector1@mailinator.com','testcompany1_financedirector1_personal@mailinator.com','testcompany1_cfo@mailinator.com','2901234567'),(30,'Test30','Name30','','Male','02/17/1989','06/13/2021','USA','Finance','Full Time','Finance Sr. Manager 1','testcompany1_financesrmanager1@mailinator.com','testcompany1_financesrmanager1_personal@mailinator.com','testcompany1_financedirector1@mailinator.com','3001234567'),(31,'Test31','Name31','','Male','02/24/1981','06/13/2021','USA','Finance','Full Time','Finance Manager 1','testcompany1_financemanager1@mailinator.com','testcompany1_financemanager1_personal@mailinator.com','testcompany1_financesrmanager1@mailinator.com','3101234567'),(32,'Test32','Name32','','Male','06/07/1993','06/13/2021','USA','Finance','Full Time','Finance Manager 2','testcompany1_financemanager2@mailinator.com','testcompany1_financemanager2_personal@mailinator.com','testcompany1_financesrmanager1@mailinator.com','3201234567'),(33,'Test33','Name33','','Female','02/20/1994','06/13/2021','USA','Finance','Full Time','Finance Employee 1','testcompany1_financeemployee1@mailinator.com','testcompany1_financeemployee1_personal@mailinator.com','testcompany1_financemanager1@mailinator.com','3301234567'),(34,'Test34','Name34','','Male','09/13/1983','06/13/2021','USA','Finance','Full Time','Finance Employee 2','testcompany1_financeemployee2@mailinator.com','testcompany1_financeemployee2_personal@mailinator.com','testcompany1_financemanager1@mailinator.com','3401234567'),(35,'Test35','Name35','','Male','02/18/1987','06/13/2021','USA','Finance','Full Time','Finance Employee 3','testcompany1_financeemployee3@mailinator.com','testcompany1_financeemployee3_personal@mailinator.com','testcompany1_financemanager1@mailinator.com','3501234567'),(36,'Test36','Name36','','Male','01/28/1981','06/13/2021','USA','Finance','Full Time','Finance Employee 4','testcompany1_financeemployee4@mailinator.com','testcompany1_financeemployee4_personal@mailinator.com','testcompany1_financemanager2@mailinator.com','3601234567'),(37,'Test37','Name37','','Female','08/08/1988','06/13/2021','USA','Finance','Full Time','Finance Employee 5','testcompany1_financeemployee5@mailinator.com','testcompany1_financeemployee5_personal@mailinator.com','testcompany1_financemanager2@mailinator.com','3701234567'),(38,'Test38','Name38','','Male','07/10/1999','06/13/2021','USA','Finance','Full Time','Finance Employee 6','testcompany1_financeemployee6@mailinator.com','testcompany1_financeemployee6_personal@mailinator.com','testcompany1_financemanager2@mailinator.com','3801234567'),(39,'Test39','Name39','','Male','06/02/1998','06/13/2021','USA','Marketing','Full Time','Marketing Director 1','testcompany1_marketingdirector1@mailinator.com','testcompany1_marketingdirector1_personal@mailinator.com','testcompany1_cmo@mailinator.com','3901234567'),(40,'Test40','Name40','','Female','04/02/1986','06/13/2021','USA','Marketing','Full Time','Marketing Sr. Manager 1','testcompany1_marketingsrmanager1@mailinator.com','testcompany1_marketingsrmanager1_personal@mailinator.com','testcompany1_marketingdirector1@mailinator.com','4001234567'),(41,'Test41','Name41','','Male','01/11/1981','06/13/2021','USA','Marketing','Full Time','Marketing Manager 1','testcompany1_marketingmanager1@mailinator.com','testcompany1_marketingmanager1_personal@mailinator.com','testcompany1_marketingsrmanager1@mailinator.com','4101234567'),(42,'Test42','Name42','','Female','04/15/1991','06/13/2021','USA','Marketing','Full Time','Marketing Manager 2','testcompany1_marketingmanager2@mailinator.com','testcompany1_marketingmanager2_personal@mailinator.com','testcompany1_marketingsrmanager1@mailinator.com','4201234567'),(43,'Test43','Name43','','Female','10/26/1996','06/13/2021','USA','Marketing','Full Time','Marketing Employee 1','testcompany1_marketingemployee1@mailinator.com','testcompany1_marketingemployee1_personal@mailinator.com','testcompany1_marketingmanager1@mailinator.com','4301234567'),(44,'Test44','Name44','','Female','09/02/1987','06/13/2021','USA','Marketing','Full Time','Marketing Employee 2','testcompany1_marketingemployee2@mailinator.com','testcompany1_marketingemployee2_personal@mailinator.com','testcompany1_marketingmanager1@mailinator.com','4401234567'),(45,'Test45','Name45','','Male','05/25/1990','06/13/2021','USA','Marketing','Full Time','Marketing Employee 3','testcompany1_marketingemployee3@mailinator.com','testcompany1_marketingemployee3_personal@mailinator.com','testcompany1_marketingmanager1@mailinator.com','4501234567'),(46,'Test46','Name46','','Male','04/11/1991','06/13/2021','USA','Marketing','Full Time','Marketing Employee 4','testcompany1_marketingemployee4@mailinator.com','testcompany1_marketingemployee4_personal@mailinator.com','testcompany1_marketingmanager2@mailinator.com','4601234567'),(47,'Test47','Name47','','Male','02/04/2000','06/13/2021','USA','Marketing','Full Time','Marketing Employee 5','testcompany1_marketingemployee5@mailinator.com','testcompany1_marketingemployee5_personal@mailinator.com','testcompany1_marketingmanager2@mailinator.com','4701234567'),(48,'Test48','Name48','','Male','06/21/1981','06/13/2021','USA','Marketing','Full Time','Marketing Employee 6','testcompany1_marketingemployee6@mailinator.com','testcompany1_marketingemployee6_personal@mailinator.com','testcompany1_marketingmanager2@mailinator.com','4801234567'),(49,'Test49','Name49','','Female','11/26/1981','06/13/2021','USA','Sales','Full Time','Sales Director 1','testcompany1_salesdirector1@mailinator.com','testcompany1_salesdirector1_personal@mailinator.com','testcompany1_cso@mailinator.com','4901234567'),(50,'Test50','Name50','','Female','06/14/1986','06/13/2021','USA','Sales','Full Time','Sales Sr. Manager 1','testcompany1_salessrmanager1@mailinator.com','testcompany1_salessrmanager1_personal@mailinator.com','testcompany1_salesdirector1@mailinator.com','5001234567'),(51,'Test51','Name51','','Female','08/20/1998','06/13/2021','USA','Sales','Full Time','Sales Manager 1','testcompany1_salesmanager1@mailinator.com','testcompany1_salesmanager1_personal@mailinator.com','testcompany1_salessrmanager1@mailinator.com','5101234567'),(52,'Test52','Name52','','Male','12/09/1984','06/13/2021','USA','Sales','Full Time','Sales Manager 2','testcompany1_salesmanager2@mailinator.com','testcompany1_salesmanager2_personal@mailinator.com','testcompany1_salessrmanager1@mailinator.com','5201234567'),(53,'Test53','Name53','','Male','06/21/1999','06/13/2021','USA','Sales','Full Time','Sales Employee 1','testcompany1_salesemployee1@mailinator.com','testcompany1_salesemployee1_personal@mailinator.com','testcompany1_salesmanager1@mailinator.com','5301234567'),(54,'Test54','Name54','','Male','10/19/1984','06/13/2021','USA','Sales','Full Time','Sales Employee 2','testcompany1_salesemployee2@mailinator.com','testcompany1_salesemployee2_personal@mailinator.com','testcompany1_salesmanager1@mailinator.com','5401234567'),(55,'Test55','Name55','','Male','02/09/1994','06/13/2021','USA','Sales','Full Time','Sales Employee 3','testcompany1_salesemployee3@mailinator.com','testcompany1_salesemployee3_personal@mailinator.com','testcompany1_salesmanager1@mailinator.com','5501234567'),(56,'Test56','Name56','','Male','12/05/1985','06/13/2021','USA','Sales','Full Time','Sales Employee 4','testcompany1_salesemployee4@mailinator.com','testcompany1_salesemployee4_personal@mailinator.com','testcompany1_salesmanager2@mailinator.com','5601234567'),(57,'Test57','Name57','','Female','10/12/1988','06/13/2021','USA','Sales','Full Time','Sales Employee 5','testcompany1_salesemployee5@mailinator.com','testcompany1_salesemployee5_personal@mailinator.com','testcompany1_salesmanager2@mailinator.com','5701234567'),(58,'Test58','Name58','','Female','01/15/2000','06/13/2021','USA','Sales','Full Time','Sales Employee 6','testcompany1_salesemployee6@mailinator.com','testcompany1_salesemployee6_personal@mailinator.com','testcompany1_salesmanager2@mailinator.com','5801234567'),(59,'Test59','Name59','','Male','11/23/1981','06/13/2021','USA','IT','Full Time','IT Director 1','testcompany1_itdirector1@mailinator.com','testcompany1_itdirector1_personal@mailinator.com','testcompany1_cio@mailinator.com','5901234567'),(60,'Test60','Name60','','Female','12/15/1983','06/13/2021','USA','IT','Full Time','IT Sr. Manager 1','testcompany1_itsrmanager1@mailinator.com','testcompany1_itsrmanager1_personal@mailinator.com','testcompany1_itdirector1@mailinator.com','6001234567'),(61,'Test61','Name61','','Male','06/11/1999','06/13/2021','USA','IT','Full Time','IT Manager 1','testcompany1_itmanager1@mailinator.com','testcompany1_itmanager1_personal@mailinator.com','testcompany1_itsrmanager1@mailinator.com','6101234567'),(62,'Test62','Name62','','Female','07/18/1998','06/13/2021','USA','IT','Full Time','IT Manager 2','testcompany1_itmanager2@mailinator.com','testcompany1_itmanager2_personal@mailinator.com','testcompany1_itsrmanager1@mailinator.com','6201234567'),(63,'Test63','Name63','','Male','09/01/1988','06/13/2021','USA','IT','Full Time','IT Employee 1','testcompany1_itemployee1@mailinator.com','testcompany1_itemployee1_personal@mailinator.com','testcompany1_itmanager1@mailinator.com','6301234567'),(64,'Test64','Name64','','Female','08/25/1992','06/13/2021','USA','IT','Full Time','IT Employee 2','testcompany1_itemployee2@mailinator.com','testcompany1_itemployee2_personal@mailinator.com','testcompany1_itmanager1@mailinator.com','6401234567'),(65,'Test65','Name65','','Male','03/01/1984','06/13/2021','USA','IT','Full Time','IT Employee 3','testcompany1_itemployee3@mailinator.com','testcompany1_itemployee3_personal@mailinator.com','testcompany1_itmanager1@mailinator.com','6501234567'),(66,'Test66','Name66','','Female','05/09/1983','06/13/2021','USA','IT','Full Time','IT Employee 4','testcompany1_itemployee4@mailinator.com','testcompany1_itemployee4_personal@mailinator.com','testcompany1_itmanager2@mailinator.com','6601234567'),(67,'Test67','Name67','','Male','08/23/1991','06/13/2021','USA','IT','Full Time','IT Employee 5','testcompany1_itemployee5@mailinator.com','testcompany1_itemployee5_personal@mailinator.com','testcompany1_itmanager2@mailinator.com','6701234567'),(68,'Test68','Name68','','Male','07/15/1999','06/13/2021','USA','IT','Full Time','IT Employee 6','testcompany1_itemployee6@mailinator.com','testcompany1_itemployee6_personal@mailinator.com','testcompany1_itmanager2@mailinator.com','6801234567'),(69,'Test69','Name69','','Male','08/24/1990','06/13/2021','USA','Operations','Full Time','Operations Director 1','testcompany1_operationsdirector1@mailinator.com','testcompany1_operationsdirector1_personal@mailinator.com','testcompany1_coo@mailinator.com','6901234567'),(70,'Test70','Name70','','Female','06/22/1987','06/13/2021','USA','Operations','Full Time','Operations Sr. Manager 1','testcompany1_operationssrmanager1@mailinator.com','testcompany1_operationssrmanager1_personal@mailinator.com','testcompany1_operationsdirector1@mailinator.com','7001234567'),(71,'Test71','Name71','','Female','12/04/1998','06/13/2021','USA','Operations','Full Time','Operations Manager 1','testcompany1_operationsmanager1@mailinator.com','testcompany1_operationsmanager1_personal@mailinator.com','testcompany1_operationssrmanager1@mailinator.com','7101234567'),(72,'Test72','Name72','','Female','07/28/1981','06/13/2021','USA','Operations','Full Time','Operations Manager 2','testcompany1_operationsmanager2@mailinator.com','testcompany1_operationsmanager2_personal@mailinator.com','testcompany1_operationssrmanager1@mailinator.com','7201234567'),(73,'Test73','Name73','','Male','10/20/1997','06/13/2021','USA','Operations','Full Time','Operations Employee 1','testcompany1_operationsemployee1@mailinator.com','testcompany1_operationsemployee1_personal@mailinator.com','testcompany1_operationsmanager1@mailinator.com','7301234567'),(74,'Test74','Name74','','Female','11/28/1993','06/13/2021','USA','Operations','Full Time','Operations Employee 2','testcompany1_operationsemployee2@mailinator.com','testcompany1_operationsemployee2_personal@mailinator.com','testcompany1_operationsmanager1@mailinator.com','7401234567'),(75,'Test75','Name75','','Female','08/27/1981','06/13/2021','USA','Operations','Full Time','Operations Employee 3','testcompany1_operationsemployee3@mailinator.com','testcompany1_operationsemployee3_personal@mailinator.com','testcompany1_operationsmanager1@mailinator.com','7501234567'),(76,'Test76','Name76','','Female','08/28/1982','06/13/2021','USA','Operations','Full Time','Operations Employee 4','testcompany1_operationsemployee4@mailinator.com','testcompany1_operationsemployee4_personal@mailinator.com','testcompany1_operationsmanager2@mailinator.com','7601234567'),(77,'Test77','Name77','','Male','08/07/1987','06/13/2021','USA','Operations','Full Time','Operations Employee 5','testcompany1_operationsemployee5@mailinator.com','testcompany1_operationsemployee5_personal@mailinator.com','testcompany1_operationsmanager2@mailinator.com','7701234567'),(78,'Test78','Name78','','Female','11/15/1998','06/13/2021','USA','Operations','Full Time','Operations Employee 6','testcompany1_operationsemployee6@mailinator.com','testcompany1_operationsemployee6_personal@mailinator.com','testcompany1_operationsmanager2@mailinator.com','7801234567'),(79,'Test79','Name79','','Male','11/03/1996','06/13/2021','USA','Legal','Full Time','Legal Director 1','testcompany1_legaldirector1@mailinator.com','testcompany1_legaldirector1_personal@mailinator.com','testcompany1_clo@mailinator.com','7901234567'),(80,'Test80','Name80','','Female','04/23/1996','06/13/2021','USA','Legal','Full Time','Legal Sr. Manager 1','testcompany1_legalsrmanager1@mailinator.com','testcompany1_legalsrmanager1_personal@mailinator.com','testcompany1_legaldirector1@mailinator.com','8001234567'),(81,'Test81','Name81','','Male','08/22/1989','06/13/2021','USA','Legal','Full Time','Legal Manager 1','testcompany1_legalmanager1@mailinator.com','testcompany1_legalmanager1_personal@mailinator.com','testcompany1_legalsrmanager1@mailinator.com','8101234567'),(82,'Test82','Name82','','Male','09/21/1980','06/13/2021','USA','Legal','Full Time','Legal Manager 2','testcompany1_legalmanager2@mailinator.com','testcompany1_legalmanager2_personal@mailinator.com','testcompany1_legalsrmanager1@mailinator.com','8201234567'),(83,'Test83','Name83','','Female','05/08/1993','06/13/2021','USA','Legal','Full Time','Legal Employee 1','testcompany1_legalemployee1@mailinator.com','testcompany1_legalemployee1_personal@mailinator.com','testcompany1_legalmanager1@mailinator.com','8301234567'),(84,'Test84','Name84','','Female','06/20/1990','06/13/2021','USA','Legal','Full Time','Legal Employee 2','testcompany1_legalemployee2@mailinator.com','testcompany1_legalemployee2_personal@mailinator.com','testcompany1_legalmanager1@mailinator.com','8401234567'),(85,'Test85','Name85','','Female','05/09/1985','06/13/2021','USA','Legal','Full Time','Legal Employee 3','testcompany1_legalemployee3@mailinator.com','testcompany1_legalemployee3_personal@mailinator.com','testcompany1_legalmanager1@mailinator.com','8501234567'),(86,'Test86','Name86','','Male','10/18/1993','06/13/2021','USA','Legal','Full Time','Legal Employee 4','testcompany1_legalemployee4@mailinator.com','testcompany1_legalemployee4_personal@mailinator.com','testcompany1_legalmanager2@mailinator.com','8601234567'),(87,'Test87','Name87','','Male','11/05/1991','06/13/2021','USA','Legal','Full Time','Legal Employee 5','testcompany1_legalemployee5@mailinator.com','testcompany1_legalemployee5_personal@mailinator.com','testcompany1_legalmanager2@mailinator.com','8701234567'),(88,'Test88','Name88','','Male','07/01/1988','06/13/2021','USA','Legal','Full Time','Legal Employee 6','testcompany1_legalemployee6@mailinator.com','testcompany1_legalemployee6_personal@mailinator.com','testcompany1_legalmanager2@mailinator.com','8801234567');
/*!40000 ALTER TABLE `testcompany` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tutorials`
--

DROP TABLE IF EXISTS `tutorials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tutorials` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `published` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tutorials`
--

LOCK TABLES `tutorials` WRITE;
/*!40000 ALTER TABLE `tutorials` DISABLE KEYS */;
INSERT INTO `tutorials` VALUES (1,'My Tut 1','description 1',0,'2022-07-05 01:02:35','2022-07-05 01:02:35'),(2,'My Tut 2','description 2',1,'2022-07-05 01:02:42','2022-07-19 02:15:53'),(3,'My Tut 3','description 3',0,'2022-07-05 01:02:51','2022-07-05 01:02:51'),(4,'My Tut 4','description 4',1,'2022-07-05 01:02:57','2022-07-05 01:03:19'),(5,'My Tut 5','description 5',0,'2022-07-05 01:03:03','2022-07-05 01:03:03'),(6,'My Tut 6','description 6',0,'2022-07-05 01:03:08','2022-07-05 01:03:08'),(7,'My Tut 7','description 7',0,'2022-07-05 01:49:31','2022-07-05 01:49:31');
/*!40000 ALTER TABLE `tutorials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types`
--

DROP TABLE IF EXISTS `types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `types` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `category_id` int unsigned NOT NULL,
  `typeName` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,1,'Infrastructure','2022-07-30 18:01:05','2022-07-30 18:49:03'),(2,2,'Infrastructure','2022-07-30 18:01:06','2022-07-30 18:49:52');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `valueDetails`
--

DROP TABLE IF EXISTS `valueDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `valueDetails` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `asset_id` int unsigned NOT NULL,
  `purchaseValue` varchar(255) NOT NULL,
  `currentValue` varchar(255) NOT NULL,
  `purchaseOrderId` varchar(255) NOT NULL,
  `purchaseDetails` varchar(255) NOT NULL,
  `purchasedBy` varchar(255) NOT NULL,
  `purchaseDate` date NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `valueDetails`
--

LOCK TABLES `valueDetails` WRITE;
/*!40000 ALTER TABLE `valueDetails` DISABLE KEYS */;
INSERT INTO `valueDetails` VALUES (1,1,'2100','1400','1234','Test Details','23456','2020-12-13','2022-07-30 18:01:07','2022-07-30 18:01:07'),(2,2,'2100','1400','1234','Test Details','23456','2020-12-13','2022-07-30 18:01:26','2022-07-30 18:01:26');
/*!40000 ALTER TABLE `valueDetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `warrantyDetails`
--

DROP TABLE IF EXISTS `warrantyDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `warrantyDetails` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `asset_id` int unsigned NOT NULL,
  `hasWarranty` tinyint(1) NOT NULL,
  `warrantyStartDate` date NOT NULL,
  `warrantyEndDate` date NOT NULL,
  `warrantyPlanName` varchar(255) NOT NULL,
  `warrantyDocument` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warrantyDetails`
--

LOCK TABLES `warrantyDetails` WRITE;
/*!40000 ALTER TABLE `warrantyDetails` DISABLE KEYS */;
INSERT INTO `warrantyDetails` VALUES (1,1,1,'2020-03-08','2021-03-08','Generic Name','Test Document','2022-07-30 18:01:07','2022-07-30 18:01:07'),(2,2,1,'2020-03-08','2021-03-08','Generic Name','Test Document','2022-07-30 18:01:26','2022-07-30 18:01:26');
/*!40000 ALTER TABLE `warrantyDetails` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-31 13:30:33
