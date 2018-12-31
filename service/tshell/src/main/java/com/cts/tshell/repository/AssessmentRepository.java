package com.cts.tshell.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.cts.tshell.bean.Assessment;

public interface AssessmentRepository extends JpaRepository<Assessment,Integer>  {

	Assessment findAssessmentById(int id);
	Assessment fetchAssesmentDetailById(@Param("assessmentId")int assessmentId);
}
