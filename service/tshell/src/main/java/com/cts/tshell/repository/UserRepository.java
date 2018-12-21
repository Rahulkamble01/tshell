package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.cts.tshell.bean.Question;

public interface UserRepository extends JpaRepository<Question, Integer>{	
 List<Question> findQuestionById(@Param("id")int id);
	
}
