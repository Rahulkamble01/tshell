package com.cts.tshell.services;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cts.tshell.bean.Question;
import com.cts.tshell.repository.QuestionRepository;

@Service
public class QuestionService {
	private static final Logger LOGGER = LoggerFactory.getLogger(QuestionService.class);
	@Autowired
	private QuestionRepository questionRepository;
	
	@Transactional
	public List<Question> findTotalQuestionContributed(int employeeId) {
		LOGGER.info("START");
		 List<Question> question =questionRepository.findTotalQuestionContributedById(employeeId);
		 LOGGER.debug("list of total no of question for each subject contributed {} ", question);
		 LOGGER.info("END");
		return question;
		
	}
//	@Transactional
//	public List<Question> findQuestion() {
//		LOGGER.info("id");
//		return userRepository.findQuestion();
//		
//	}
}
