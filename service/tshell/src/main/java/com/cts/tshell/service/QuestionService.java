package com.cts.tshell.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.tshell.repository.QuestionRepository;

@Service
public class QuestionService {

	private static final Logger LOGGER = LoggerFactory.getLogger(QuestionService.class);

	private QuestionRepository questionRepository;

	@Autowired
	public void setQuestionRepository(QuestionRepository questionRepository) {
		this.questionRepository = questionRepository;
	}

}
