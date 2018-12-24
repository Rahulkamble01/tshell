package com.cts.tshell.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Question;
import com.cts.tshell.bean.QuestionAnswerType;
import com.cts.tshell.bean.QuestionDifficultyLevel;
import com.cts.tshell.bean.Skill;
import com.cts.tshell.service.QuestionService;

@RestController
@RequestMapping("/question")
public class QuestionController {

	private static final Logger LOGGER = LoggerFactory.getLogger(QuestionController.class);
	@Autowired
	private QuestionService questionService;

	@GetMapping("/list/{id}")
	public List<Skill> getAllQuestion(@PathVariable int id) {
		LOGGER.info("START : getAllQuestion()  of QuestionController");
		LOGGER.debug("SkillId {}", id);
		return questionService.fetchAllQuestion(id);
	}

	//QRepositoery
	@GetMapping("/all/{id}")
	public List<Question> fetchAllQuestion(@PathVariable int id) {
		LOGGER.info("START : getAllQuestion()  of QuestionController");
		LOGGER.debug("SkillId {}", id);
		return questionService.getAllQuestion(id);
	}

	@GetMapping("/allquestionid/{skillId}")
	public long[] fetchAllQuestionId(@PathVariable int skillId) {
		LOGGER.info("START :Getting all Question Ids from fetchAllQuestionId()  of QuestionController");
		LOGGER.debug("SkillId :  {}", skillId);
		return questionService.fetchAllQuestionsID(skillId);
	}

	
}
