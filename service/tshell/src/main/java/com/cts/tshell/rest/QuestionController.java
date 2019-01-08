package com.cts.tshell.rest;

import java.util.List;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Question;
import com.cts.tshell.bean.Skill;
import com.cts.tshell.bean.Topic;
import com.cts.tshell.bean.Views;
import com.cts.tshell.service.QuestionService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/question")
public class QuestionController {

	private static final Logger LOGGER = LoggerFactory.getLogger(QuestionController.class);
	@Autowired
	private QuestionService questionService;

	@GetMapping("/allquestionid/{skillId}")
	public Set<Integer> fetchAllQuestionId(@PathVariable int skillId) {
		LOGGER.info("START : Getting all Question Ids from fetchAllQuestionId()  of QuestionController");
		LOGGER.debug("SkillId :  {}", skillId);

		return questionService.fetchQuestionsID(skillId);
	}

	@GetMapping("/questionId/{questionId}")
	public String fetchQuestionById(@PathVariable int questionId) throws JsonProcessingException {
		LOGGER.info("START :Getting Question By Id from  fetchQuestionById()  of QuestionController");
		LOGGER.debug("Question Id {}", questionId);

		List<Question> questions = questionService.getQuestionById(questionId);
		LOGGER.info("Start Writing JSON String using JSON VIEW CLASS");
		ObjectMapper mapper = new ObjectMapper();
		String result = mapper.writerWithView(Views.Public.class).writeValueAsString(questions);
		return result;
	}

}
