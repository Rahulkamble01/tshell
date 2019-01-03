package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.cts.tshell.bean.Assessment;
import com.cts.tshell.bean.TopicWiseScore;

public interface AssessmentRepository extends JpaRepository<Assessment,Integer>  {

	Assessment findAssessmentById(int id);
	
	Assessment fetchAssesmentDetailById(@Param("assessmentId")int assessmentId);
	
	List<TopicWiseScore> getTopicWiseQuestionCount(@Param("assessmentId")int assessmentId);
}
