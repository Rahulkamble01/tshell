DROP TABLE IF EXISTS `reference_skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reference_skill` (
  `rs_id` int(11) NOT NULL AUTO_INCREMENT,
  `rs_sk_id` int(11) NOT NULL,
  `rs_ref_id` int(11) NOT NULL,
  `rs_classifier` varchar(45) NOT NULL,
  PRIMARY KEY (`rs_id`),
  KEY `rs_sk_id` (`rs_sk_id`),
  KEY `rs_ref_id` (`rs_ref_id`),
  CONSTRAINT `rs_ref_id` FOREIGN KEY (`rs_ref_id`) REFERENCES `skill` (`sk_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `rs_sk_id` FOREIGN KEY (`rs_sk_id`) REFERENCES `skill` (`sk_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;


alter table `tshell`.`skill` modify sk_description varchar(500);

alter table `tshell`.`topic` modify tp_percentage int not null default 0;

alter table `tshell`.`user` modify us_otp varchar(50) DEFAULT NULL;

alter table `tshell`.`user` add us_signup_otp varchar(45) DEFAULT NULL;
alter table `tshell`.`user` add us_signup_otp_time datetime DEFAULT NULL;
alter table `tshell`.`user` add us_signup_otp_verify_status varchar(6) DEFAULT NULL;

INSERT INTO `skill` VALUES (8,'Java',682,'active',5,'Java is a programming language created by James Gosling from Sun Microsystems (Sun) in 1991. The target of Java is to write a program once and then run this program on multiple operating systems.',NULL,'2018-12-27'), (7,'JS',51,'active',5,'JavaScript is the programming language of HTML and the Web.',NULL,'2018-10-10'),(6,'HTML12',26,'deactive',5,'HTML stands for Hyper Text Markup Language. HTML describes the structure of Web pages using markup. HTML elements are the building blocks of HTML pages. HTML elements are represented by tags.',NULL,'2018-10-10'),(9,'Node',15,'active',5,'Node.js is an open source server environment. Node.js is free. Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.). Node.js uses JavaScript on the server',NULL,'2018-10-10');