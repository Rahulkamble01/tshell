package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cts.tshell.bean.Topic;

@Repository
public interface TopicRepository extends JpaRepository<Topic, Integer>{

	
	Topic findTopicByName(@Param("name")String name);

	List<Topic> findTopics(@Param("skillId") int skillId);
	
	Topic getTopicByName(String TopicName);

}

