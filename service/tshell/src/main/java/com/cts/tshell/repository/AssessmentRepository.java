package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cts.tshell.bean.Assessment;

@Repository
public interface AssessmentRepository extends JpaRepository<Assessment, Integer>{
	
	List<Assessment> findTop5BySkill(@Param("skillId") int skillId);

}