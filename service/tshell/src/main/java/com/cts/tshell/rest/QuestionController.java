package com.cts.tshell.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Question;
import com.cts.tshell.bean.Topic;
import com.cts.tshell.bean.User;
import com.cts.tshell.service.QuestionService;

@RestController
@RequestMapping("/rest")
public class QuestionController {
	private static final Logger LOGGER = LoggerFactory.getLogger(QuestionController.class);
	private QuestionService questionService;

	@Autowired
	public void setQuestionService(QuestionService questionService) {
		this.questionService = questionService;
	}
		
	@GetMapping("/getTopics/{skillId}")
	public List<Topic> getTopics(@PathVariable int skillId) {
		 LOGGER.info("Start Question Controller");
		 List<Topic> topics = questionService.getAllTopics(skillId);
		 LOGGER.debug("Topics :{}"+topics);
		return topics;
	}
	
	@PostMapping("/addQuestion")
	 public void insertQuestion(@RequestBody Question question){
		LOGGER.info("starting insertQuestion method" );
		questionService.saveQuestion(question);
		LOGGER.info("end" );
	}
	
	@GetMapping("/getUser/{userId}")
	public List<User> getUser(@PathVariable int userId){
		LOGGER.info("starting getUser method" );
		List<User> user = questionService.getUser(userId);
		LOGGER.debug("User details are:{}" + user);
		LOGGER.info("end" );
		return user;
		
	}

	
}
