package com.cts.tshell.service;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.tshell.bean.Option;
import com.cts.tshell.bean.Question;
import com.cts.tshell.repository.OptionRepository;
import com.cts.tshell.repository.QuestionRepository;

@Service
public class QuestionService {

	private static final Logger LOGGER = LoggerFactory.getLogger(QuestionService.class);

	private QuestionRepository questionRepository;

	private OptionRepository optionRepository;

	@Autowired
	public void setQuestionRepository(QuestionRepository questionRepository) {
		this.questionRepository = questionRepository;
	}

	@Autowired
	public void setOptionRepository(OptionRepository optionRepository) {
		this.optionRepository = optionRepository;
	}

	@Transactional
	public void saveOption(Option option) {
		LOGGER.info("start");
		
		int questionId = option.getQuestion().getId();
		Question question = questionRepository.fetchAllQuestionDetails(questionId);
		option.setQuestion(question);
		LOGGER.debug("Question: {}", question);
		optionRepository.save(option);
		LOGGER.info("end");
	}

}
