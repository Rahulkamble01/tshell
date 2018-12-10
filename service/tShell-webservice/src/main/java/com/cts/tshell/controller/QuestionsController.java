package com.cts.tshell.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.service.QuestionService;

@RestController
@RequestMapping("/contribute")
public class QuestionsController {
	
	private QuestionService questionService;
	
	@Autowired
	public void setQuestionService(QuestionService questionService) {
		this.questionService = questionService;
	}
}
