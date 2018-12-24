package com.cts.tshell.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Question;
import com.cts.tshell.services.QuestionService;

@ControllerAdvice
@RestController
public class QuestionController extends TshellController{
	private static final Logger LOGGER = LoggerFactory.getLogger(QuestionService.class);

	@Autowired
	private QuestionService questionService;

	@GetMapping("/totalQuestionContributed/{employeeId}")
	public List<Question> totalQuestionContributed(@PathVariable("employeeId") int employeeId) {
		LOGGER.info(" START");
		List<Question> totalQuestion = questionService.findTotalQuestionContributed(employeeId);
		LOGGER.debug("total no of question contributed for each subject {} ", totalQuestion);
		LOGGER.info("END");
		return totalQuestion;

		
	}

}
