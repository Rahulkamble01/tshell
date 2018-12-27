package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cts.tshell.bean.Question;

public interface QuestionRepository extends JpaRepository<Question,Integer> {

	List<Question> fetchQuestionById(@Param("questionId")int questionId);
	Question findQuestionById(int id);
	
	
	@Query(value = "select qu_id from question  "+
			  "left join topic_question on tq_qu_id = qu_id  "+
			  "left join topic on tp_id = tq_tp_id "+
			  " "+
			  "where qu_status = 'Approved' "+ "and tp_sk_id = :skillId "+
			  " ", nativeQuery = true)
	long[] getQuestionId(@Param("skillId")int skillId);
}
