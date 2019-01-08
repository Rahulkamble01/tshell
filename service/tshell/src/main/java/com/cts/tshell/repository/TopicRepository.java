package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.cts.tshell.bean.Topic;

public interface TopicRepository  extends JpaRepository<Topic, Integer>{
	
	List<Topic>  findTopics(@Param("skillId")int skillId);

}
