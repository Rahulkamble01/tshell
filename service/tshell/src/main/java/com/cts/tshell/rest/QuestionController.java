package com.cts.tshell.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cts.tshell.bean.Option;
import com.cts.tshell.service.QuestionService;

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

}
