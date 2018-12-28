package com.cts.tshell.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cts.tshell.bean.Topic;

@Repository
public interface TopicRepository extends JpaRepository<Topic,Integer>{
		
	Topic getTopicByName(String TopicName);
	
	Topic findSkillTopic(@Param("skillId") int skillId);
}
