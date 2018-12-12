package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.cts.tshell.bean.Assessment;

public interface AssessmentRepository extends JpaRepository<Assessment, Integer>{
	
	List<Assessment> findTop5BySkill(@Param("skillId") int id);

}
