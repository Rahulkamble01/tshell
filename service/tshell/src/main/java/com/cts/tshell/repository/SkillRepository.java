package com.cts.tshell.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cts.tshell.bean.Skill;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Integer>{

	@Query("select sk.id, sk.name from Skill sk where creationDate >=:inputDate   order by creationDate desc  ")
	List<Skill> fetchRecentSkills(@Param("inputDate") Date inputDate);
}
