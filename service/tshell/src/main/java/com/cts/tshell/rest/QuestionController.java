package com.cts.tshell.rest;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.io.FilenameUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cts.tshell.bean.Question;
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

	@PostMapping("/upload")
	public List<Question> uploadFile(@RequestParam("file") MultipartFile file) {
		LOGGER.info("Backend is called!");
		List<Question> questionsList = new ArrayList<Question>();
		questionsList = questionService.readFile(file);
		LOGGER.info("Backend call is completed!");
		return questionsList;
	}
}
