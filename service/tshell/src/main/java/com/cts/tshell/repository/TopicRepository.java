package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cts.tshell.bean.Topic;
import com.cts.tshell.bean.TopicWeightage;

public interface TopicRepository extends JpaRepository<Topic,Integer> {

	
	@Query(value = "select * from topic  "+
			       "where tp_sk_id = :skillId "+
			  " ", nativeQuery = true)
	List<Topic> getTopicIdAndWeightage(@Param("skillId")int skillId);
		
}
