SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

DROP SCHEMA IF EXISTS `tShell` ;
CREATE SCHEMA IF NOT EXISTS `tShell` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci ;
USE `tShell` ;

-- -----------------------------------------------------
-- Table `tShell`.`user_role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tShell`.`user_role` ;

CREATE  TABLE IF NOT EXISTS `tShell`.`user_role` (
  `ur_id` INT NOT NULL AUTO_INCREMENT ,
  `ur_role` VARCHAR(45) NOT NULL ,
  PRIMARY KEY (`ur_id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tShell`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tShell`.`user` ;

CREATE  TABLE IF NOT EXISTS `tShell`.`user` (
  `us_id` INT NOT NULL AUTO_INCREMENT ,
  `us_name` VARCHAR(45) NOT NULL ,
  `us_email` VARCHAR(45) NOT NULL ,
  `us_password` VARCHAR(45) NOT NULL ,
  `us_ur_id` INT NOT NULL ,
  `us_emp_id` INT NULL ,
  `us_image` LONGBLOB NULL ,
  PRIMARY KEY (`us_id`) ,
  INDEX `us_ur_id` (`us_ur_id` ASC) ,
  CONSTRAINT `us_ur_id`
    FOREIGN KEY (`us_ur_id` )
    REFERENCES `tShell`.`user_role` (`ur_id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tShell`.`skill`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tShell`.`skill` ;

CREATE  TABLE IF NOT EXISTS `tShell`.`skill` (
  `sk_id` INT NOT NULL AUTO_INCREMENT ,
  `sk_name` VARCHAR(45) NOT NULL ,
  `sk_search_count` INT NULL ,
  `sk_active` VARCHAR(45) NOT NULL ,
  `sk_test_count` INT NULL ,
  `sk_description` VARCHAR(140) NULL ,
  `sk_image` LONGBLOB NULL ,
  PRIMARY KEY (`sk_id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tShell`.`topic`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tShell`.`topic` ;

CREATE  TABLE IF NOT EXISTS `tShell`.`topic` (
  `tp_id` INT NOT NULL AUTO_INCREMENT ,
  `tp_name` VARCHAR(45) NOT NULL ,
  `tp_sk_id` INT NOT NULL ,
  PRIMARY KEY (`tp_id`) ,
  INDEX `tp_sk_id` (`tp_sk_id` ASC) ,
  CONSTRAINT `tp_sk_id`
    FOREIGN KEY (`tp_sk_id` )
    REFERENCES `tShell`.`skill` (`sk_id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tShell`.`assessment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tShell`.`assessment` ;

CREATE  TABLE IF NOT EXISTS `tShell`.`assessment` (
  `as_id` INT NOT NULL AUTO_INCREMENT ,
  `as_type` VARCHAR(6) NOT NULL ,
  `as_date` DATETIME NOT NULL ,
  `as_score` FLOAT NOT NULL ,
  `as_sk_id` INT NOT NULL ,
  `as_us_id` INT NOT NULL ,
  PRIMARY KEY (`as_id`) ,
  INDEX `as_sk_id` (`as_sk_id` ASC) ,
  INDEX `as_us_id` (`as_us_id` ASC) ,
  CONSTRAINT `as_sk_id`
    FOREIGN KEY (`as_sk_id` )
    REFERENCES `tShell`.`skill` (`sk_id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `as_us_id`
    FOREIGN KEY (`as_us_id` )
    REFERENCES `tShell`.`user` (`us_id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tShell`.`question_difficulty`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tShell`.`question_difficulty` ;

CREATE  TABLE IF NOT EXISTS `tShell`.`question_difficulty` (
  `qd_id` INT NOT NULL AUTO_INCREMENT ,
  `qd_difficulty` VARCHAR(7) NOT NULL ,
  PRIMARY KEY (`qd_id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tShell`.`question`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tShell`.`question` ;

CREATE  TABLE IF NOT EXISTS `tShell`.`question` (
  `qu_id` INT NOT NULL AUTO_INCREMENT ,
  `qu_question` VARCHAR(100) NOT NULL ,
  `qu_qd_id` INT NOT NULL ,
  `qu_status` VARCHAR(45) NOT NULL ,
  `qu_us_id` INT NULL ,
  PRIMARY KEY (`qu_id`) ,
  INDEX `qu_df_id` (`qu_qd_id` ASC) ,
  INDEX `qu_us_fk` (`qu_us_id` ASC) ,
  CONSTRAINT `qu_df_id`
    FOREIGN KEY (`qu_qd_id` )
    REFERENCES `tShell`.`question_difficulty` (`qd_id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `qu_us_fk`
    FOREIGN KEY (`qu_us_id` )
    REFERENCES `tShell`.`user` (`us_id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tShell`.`option`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tShell`.`option` ;

CREATE  TABLE IF NOT EXISTS `tShell`.`option` (
  `op_id` INT NOT NULL AUTO_INCREMENT ,
  `op_description` VARCHAR(45) NOT NULL ,
  `op_qu_id` INT NOT NULL ,
  `op_is_correct` TINYINT(1) NULL ,
  PRIMARY KEY (`op_id`) ,
  INDEX `op_qu_fk` (`op_qu_id` ASC) ,
  CONSTRAINT `op_qu_fk`
    FOREIGN KEY (`op_qu_id` )
    REFERENCES `tShell`.`question` (`qu_id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tShell`.`topic_question`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tShell`.`topic_question` ;

CREATE  TABLE IF NOT EXISTS `tShell`.`topic_question` (
  `tq_id` INT NOT NULL AUTO_INCREMENT ,
  `tq_tp_id` INT NOT NULL ,
  `tq_qu_id` INT NOT NULL ,
  PRIMARY KEY (`tq_id`) ,
  INDEX `tq_tp_id` (`tq_tp_id` ASC) ,
  INDEX `tq_qu_id` (`tq_qu_id` ASC) ,
  CONSTRAINT `tq_tp_id`
    FOREIGN KEY (`tq_tp_id` )
    REFERENCES `tShell`.`topic` (`tp_id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `tq_qu_id`
    FOREIGN KEY (`tq_qu_id` )
    REFERENCES `tShell`.`question` (`qu_id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tShell`.`user_skill`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tShell`.`user_skill` ;

CREATE  TABLE IF NOT EXISTS `tShell`.`user_skill` (
  `uk_id` INT NOT NULL AUTO_INCREMENT ,
  `uk_us_id` INT NOT NULL ,
  `uk_sk_id` INT NOT NULL ,
  PRIMARY KEY (`uk_id`) ,
  INDEX `uk_us_id` (`uk_us_id` ASC) ,
  INDEX `uk_sk_id` (`uk_sk_id` ASC) ,
  CONSTRAINT `uk_us_id`
    FOREIGN KEY (`uk_us_id` )
    REFERENCES `tShell`.`user` (`us_id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `uk_sk_id`
    FOREIGN KEY (`uk_sk_id` )
    REFERENCES `tShell`.`skill` (`sk_id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tShell`.`assessment_question`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tShell`.`assessment_question` ;

CREATE  TABLE IF NOT EXISTS `tShell`.`assessment_question` (
  `aq_id` INT NOT NULL AUTO_INCREMENT ,
  `aq_as_id` INT NOT NULL ,
  `aq_qu_id` INT NOT NULL ,
  PRIMARY KEY (`aq_id`) ,
  INDEX `aq_as_id` (`aq_as_id` ASC) ,
  INDEX `aq_qu_id` (`aq_qu_id` ASC) ,
  CONSTRAINT `aq_as_id`
    FOREIGN KEY (`aq_as_id` )
    REFERENCES `tShell`.`assessment` (`as_id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `aq_qu_id`
    FOREIGN KEY (`aq_qu_id` )
    REFERENCES `tShell`.`question` (`qu_id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tShell`.`assessment_question_option`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tShell`.`assessment_question_option` ;

CREATE  TABLE IF NOT EXISTS `tShell`.`assessment_question_option` (
  `ao_id` INT NOT NULL AUTO_INCREMENT ,
  `ao_aq_id` INT NULL ,
  `ao_op_id` INT NULL ,
  `ao_is_selected` TINYINT(1) NULL DEFAULT 0 ,
  PRIMARY KEY (`ao_id`) ,
  INDEX `ao_aq_fk` (`ao_aq_id` ASC) ,
  INDEX `ao_op_fk` (`ao_op_id` ASC) ,
  CONSTRAINT `ao_aq_fk`
    FOREIGN KEY (`ao_aq_id` )
    REFERENCES `tShell`.`assessment_question` (`aq_id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ao_op_fk`
    FOREIGN KEY (`ao_op_id` )
    REFERENCES `tShell`.`option` (`op_id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
