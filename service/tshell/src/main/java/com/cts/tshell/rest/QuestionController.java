package com.cts.tshell.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Question;
import com.cts.tshell.bean.Topic;
import com.cts.tshell.bean.User;
import com.cts.tshell.service.QuestionService;
@ControllerAdvice
@RestController
@RequestMapping("/question")
public class QuestionController extends TshellController{
	private static final Logger LOGGER = LoggerFactory.getLogger(QuestionController.class);
	@Autowired
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
	public List<User> getUser(@PathVariable String userId){
		LOGGER.info("starting getUser method" );
		List<User> user = questionService.getUser(userId);
		LOGGER.debug("User details are:{}" + user);
		LOGGER.info("end" );
		return user;
		
	}
		@GetMapping("/contributed/{employeeId}")
	public List<Question> totalQuestionContributed(@PathVariable("employeeId") int employeeId) {
		LOGGER.info(" START");
		List<Question> totalQuestion = questionService.findTotalQuestionContributed(employeeId);
		LOGGER.debug("total no of question contributed for each subject : {} ", totalQuestion);
		LOGGER.info("END");
		return totalQuestion;

		
	}
		
	@GetMapping("/questioncount")
	public long getQuestionCount() {
		LOGGER.info("start");
		long questionCount = questionService.getQuestionCount();
		LOGGER.debug("QuestionCount  -> {}", questionCount );
		return questionCount ;
	}
}

	




