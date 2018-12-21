package com.cts.tshell.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Skill;
import com.cts.tshell.bean.Topic;
import com.cts.tshell.service.QuestionService;

@RestController
public class QuestionController {

	@Autowired
	private QuestionService questionService;
	
	

	@GetMapping("/question/{id}")
	public List<Skill> getAllQuestion(@PathVariable int id) {
		System.out.println("isndide");
		return questionService.fetchAllQuestion(id);
	} 
	@GetMapping("/id/{id}")
	public List<Topic> getAllQuestionId(@PathVariable int id) {
		System.out.println("isndide");
		return questionService.fetchAllQuestionsID(id);
	} 

}
