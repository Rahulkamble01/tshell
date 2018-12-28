package com.cts.tshell.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cts.tshell.bean.AssessmentQuestionOption;

public interface AssessmentQuestionOptionRepository extends JpaRepository<AssessmentQuestionOption, Integer> {

//	@Query("insert into assessment_question_option (ao_op_id, ao_aq_id, ao_is_selected) values (?, ?, ?) ", nativeQuery = true )
//	 void saveData(AssessmentQuestionOption assessmentQuestionOption);
}
