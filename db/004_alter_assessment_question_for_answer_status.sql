use tshell;

ALTER TABLE assessment_question ADD aq_is_correct BOOLEAN default false;

INSERT INTO `assessment` VALUES (1,'entry','2018-10-10 09:00:00',90,1,1,'2018-10-10 10:00:00'),(2,'exit','2018-10-15 01:00:00',97,1,1,'2018-10-15 02:00:00'),(3,'entry','2018-10-20 04:00:00',86,2,1,'2018-10-20 05:00:00'),(5,'entry','2018-10-20 04:00:00',88,3,1,'2018-10-20 05:00:00'),(6,'exit','2018-10-23 04:00:00',98,3,1,'2018-10-23 05:00:00'),(7,'entry','2018-10-20 04:00:00',86,4,1,'2018-10-20 05:00:00'),(8,'exit','2018-10-23 04:00:00',90,4,1,'2018-10-23 05:00:00'),(9,'entry','2018-10-10 09:00:00',90,1,2,'2018-10-10 10:00:00'),(10,'exit','2018-10-15 01:00:00',97,1,2,'2018-10-15 02:00:00'),(11,'entry','2018-10-20 04:00:00',86,2,2,'2018-10-20 05:00:00'),(12,'exit','2018-10-23 04:00:00',90,2,2,'2018-10-23 05:00:00'),(13,'entry','2018-10-20 04:00:00',88,3,2,'2018-10-20 05:00:00'),(14,'exit','2018-10-23 04:00:00',98,3,2,'2018-10-23 05:00:00'),(15,'entry','2018-10-20 04:00:00',86,4,2,'2018-10-20 05:00:00'),(16,'exit','2018-10-23 04:00:00',90,4,2,'2018-10-23 05:00:00'),(17,'entry','2018-10-10 09:00:00',90,1,3,'2018-10-10 10:00:00'),(18,'exit','2018-10-15 01:00:00',97,1,3,'2018-10-15 02:00:00'),(19,'entry','2018-10-20 04:00:00',86,2,3,'2018-10-20 05:00:00'),(20,'exit','2018-10-23 04:00:00',90,2,3,'2018-10-23 05:00:00'),(21,'entry','2018-10-20 04:00:00',88,3,3,'2018-10-20 05:00:00'),(22,'exit','2018-10-23 04:00:00',98,3,3,'2018-10-23 05:00:00'),(23,'entry','2018-10-20 04:00:00',86,4,3,'2018-10-20 05:00:00');

INSERT INTO `assessment_question` VALUES (1,1,1,1),(2,1,2,0),(3,1,3,1),(4,1,4,1),(5,1,5,1),(6,1,6,1),(7,1,7,1),(8,1,8,1),(9,1,9,0),(10,1,10,1),(11,2,1,1),(12,2,2,0),(13,2,3,1),(14,2,4,1),(15,2,5,1),(16,2,6,1),(17,2,7,1),(18,2,8,1),(19,2,9,1),(20,2,10,1);