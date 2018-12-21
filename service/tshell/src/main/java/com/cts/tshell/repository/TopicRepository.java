package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.cts.tshell.bean.Topic;

public interface TopicRepository extends JpaRepository<Topic,Integer> {

	List<Topic> getAllQuestionById(@Param("id")int id);
//	@Query(value = "select qu_id from question  "
//			+ "left join topic_question on tq_qu_id=qu_id  "
//			+ "left join topic on tp_id = tq_tp_id "
//			+ "left join skill on sk_id = tp_sk_id "
//			+ "where tp_sk_id=1 & qu_status='Approved' "
//			+ " ", nativeQuery = true)
//		Topic getAllQuestionsByID();
//		
		
}
