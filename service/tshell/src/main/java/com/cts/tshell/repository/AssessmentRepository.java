package com.cts.tshell.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cts.tshell.bean.Assessment;

@Repository
public interface AssessmentRepository extends JpaRepository<Assessment, Integer>{
	
	Page<Assessment> findTop5BySkill(@Param("skillId") int skillId, Pageable pageable);

}