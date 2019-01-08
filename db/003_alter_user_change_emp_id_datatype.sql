ALTER TABLE `tshell`.`user` 
CHANGE COLUMN `us_emp_id` `us_emp_id` VARCHAR(10) NOT NULL ,
ADD UNIQUE INDEX `us_emp_id_UNIQUE` (`us_emp_id` ASC);
CHANGE COLUMN `us_last_login_time` `us_last_login_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ;

INSERT INTO `tshell`.`user` (`us_id`, `us_name`, `us_email`, `us_password`, `us_ur_id`, `us_emp_id`) VALUES ('', '', '', 'admin', '1', 'admin');




