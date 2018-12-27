package com.cts.tshell.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Option;
import com.cts.tshell.bean.Question;
import com.cts.tshell.service.QuestionService;

@ControllerAdvice
@RestController
@RequestMapping("/question")
public class QuestionController {
	private static final Logger LOGGER = LoggerFactory.getLogger(QuestionController.class);
	private QuestionService questionService;

	@Autowired
	public void setQuestionService(QuestionService questionService) {
		this.questionService = questionService;
	}

	@PostMapping("/option/add")
	public void addOption(@RequestBody Option option) {
		LOGGER.info("start");
		LOGGER.debug("Option: {}", option);
		questionService.saveOption(option);
		LOGGER.info("end");
	}

	@GetMapping("/review/{skillId}")
	public List<Question> getSingleReviewQuestion(@PathVariable int skillId) {

		LOGGER.info("START");
		LOGGER.debug("SkillId {} ", skillId);
		List<Question> questionList = questionService.getSingleReviewQuestion(skillId);
		LOGGER.debug("Question List : {}", questionList);
		LOGGER.info("END");
		return questionList;
	}

	@GetMapping("/option/delete/{id}")
	public void deleteOptionById(@PathVariable int id) {
		LOGGER.info("start of deleteOptionById controller");
		Option option = questionService.getOptionById(id);
		questionService.deleteOption(option);
		LOGGER.info("end of deleteOptionById controller");

	}
}
