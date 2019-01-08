INSERT INTO `question`(qu_question,qu_status,qu_created_date)
VALUES ('Which of the following is not OOPS concept in Java?','Pending','2013-12-12'),
       ('Which of the following is a type of polymorphism in Java?','Pending','2017-11-12'),
       ('When does method overloading is determined?','Pending','2018-11-15'),
       ('What is it called if an object has its own lifecycle and there is no owner?','Pending','2018-12-10'),
       ('Which concept of Java is a way of converting real world objects in terms of class?','Pending','2018-12-05'),
       ('Which concept of Java is achieved by combining methods and attribute into a class?','Pending','2016-02-12');    
       
UPDATE `tshell`.`question` SET `qu_status`='Pending' WHERE `qu_id`='12';

UPDATE `tshell`.`question` SET `qu_status`='Pending' WHERE `qu_id`='11';

UPDATE `tshell`.`question` SET `qu_status`='Pending' WHERE `qu_id`='10';

UPDATE `tshell`.`question` SET `qu_status`='Pending' WHERE `qu_id`='9';

UPDATE `tshell`.`question` SET `qu_status`='Pending' WHERE `qu_id`='8';

UPDATE `tshell`.`question` SET `qu_status`='Pending' WHERE `qu_id`='7';

UPDATE `tshell`.`question` SET `qu_status`='Pending' WHERE `qu_id`='6';

UPDATE `tshell`.`question` SET `qu_status`='Pending' WHERE `qu_id`='5';

UPDATE `tshell`.`question` SET `qu_status`='Pending' WHERE `qu_id`='4';

UPDATE `tshell`.`question` SET `qu_status`='Pending' WHERE `qu_id`='3';

UPDATE `tshell`.`question` SET `qu_status`='Pending' WHERE `qu_id`='2';

UPDATE `tshell`.`question` SET `qu_status`='Pending' WHERE `qu_id`='1';

UPDATE `tshell`.`question_difficulty` SET `qd_difficulty`='Easy' WHERE `qd_id`='1';

INSERT INTO `tshell`.`question_difficulty` (`qd_id`, `qd_difficulty`) VALUES (2, 'Medium');

INSERT INTO `tshell`.`question_difficulty` (`qd_id`, `qd_difficulty`) VALUES (3, 'Hard');

UPDATE `tshell`.`question` SET `qu_qd_id`=2 WHERE `qu_id`='1';

UPDATE `tshell`.`question` SET `qu_qd_id`=2 WHERE `qu_id`='2';

UPDATE `tshell`.`question` SET `qu_qd_id`=2 WHERE `qu_id`='3';

UPDATE `tshell`.`question` SET `qu_qd_id`=2 WHERE `qu_id`='4';

UPDATE `tshell`.`question` SET `qu_qd_id`=2 WHERE `qu_id`='5';

UPDATE `tshell`.`question` SET `qu_qd_id`=2 WHERE `qu_id`='6';

UPDATE `tshell`.`question` SET `qu_qd_id`=2 WHERE `qu_id`='7';

UPDATE `tshell`.`question` SET `qu_qd_id`=2 WHERE `qu_id`='8';

UPDATE `tshell`.`question` SET `qu_qd_id`=2 WHERE `qu_id`='9';

UPDATE `tshell`.`question` SET `qu_qd_id`=2 WHERE `qu_id`='10';

UPDATE `tshell`.`question` SET `qu_qd_id`=2 WHERE `qu_id`='11';

UPDATE `tshell`.`question` SET `qu_qd_id`=2 WHERE `qu_id`='12';

UPDATE `tshell`.`question` SET `qu_qd_id`=2 WHERE `qu_id`='13';

UPDATE `tshell`.`question` SET `qu_qd_id`=2 WHERE `qu_id`='14';

UPDATE `tshell`.`question` SET `qu_qd_id`=2 WHERE `qu_id`='15';

UPDATE `tshell`.`question` SET `qu_qd_id`=2 WHERE `qu_id`='16';

UPDATE `tshell`.`question` SET `qu_qd_id`=2 WHERE `qu_id`='17';

UPDATE `tshell`.`question` SET `qu_qd_id`=2 WHERE `qu_id`='18';

delete from user where us_id = 1;

update question set qu_created_by_us_id = 3 where qu_created_by_us_id = 1 and qu_id <= 18;

INSERT INTO `tshell`.`topic_question` (`tq_tp_id`, `tq_qu_id`) VALUES (1, 13);

INSERT INTO `tshell`.`topic_question` (`tq_tp_id`, `tq_qu_id`) VALUES (1, 14);

INSERT INTO `tshell`.`topic_question` (`tq_tp_id`, `tq_qu_id`) VALUES (1, 15);

INSERT INTO `tshell`.`topic_question` (`tq_tp_id`, `tq_qu_id`) VALUES (1, 16);

INSERT INTO `tshell`.`topic_question` (`tq_tp_id`, `tq_qu_id`) VALUES (1, 17);

INSERT INTO `tshell`.`topic_question` (`tq_tp_id`, `tq_qu_id`) VALUES (1, 18);

update question set qu_reviewed_by_us_id = 3 where qu_reviewed_by_us_id = 1 and qu_id <= 18;

delete from question where qu_id < 13;

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Inheritance', 13, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Encapsulation', 13, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Polymorphism', 13, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Compilation', 13, 1);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES (' Compile time polymorphism', 14, 1);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Execution time polymorphism', 14, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Multiple polymorphism', 14, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Multilevel polymorphism', 14, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('At run time', 15, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('At compile time', 15, 1);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('At coding time', 15, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('At execution time', 15, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Aggregation', 16, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Composition', 16, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Encapsulation', 16, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Association', 16, 1);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Polymorphism', 17, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Encapsulation', 17, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Abstraction', 17, 1);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Inheritance', 17, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Encapsulation', 18, 1);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Inheritance', 18, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Polymorphism', 18, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Polymorphism', 18, 0);
