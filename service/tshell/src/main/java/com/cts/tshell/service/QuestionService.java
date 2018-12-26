package com.cts.tshell.service;

import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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

	@Transactional
	public List<Question> getSingleReviewQuestion(int skillId) {

		LOGGER.info("START");
		LOGGER.debug("Skill Id {} ", skillId);
		/*
		 * Passing the skillId along with Pageable object with page and size parameters
		 * to QustionRepository
		 */
		Page<Question> questionPage = questionRepository.findReviewQuestion(skillId, PageRequest.of(0, 1));
		LOGGER.debug("Question Page : {}", questionPage);
		/*
		 * getContent() method gives the contents of the page object returned from
		 * Question Repository.
		 */
		List<Question> questionList = questionPage.getContent();
		LOGGER.debug("Question List : {}", questionList);
		/*
		 * The below code is for changing the status of the obtained questions.
		 */
		for (Question eachQuestion : questionList) {
			eachQuestion.setStatus("In Review");
			LOGGER.debug("Question (Modified Status) : {}", eachQuestion);
			questionRepository.save(eachQuestion);
		}
		return questionList;
	}

	@Transactional
	public void deleteOption(Option option) {
		LOGGER.info("start of delete Option");
		optionRepository.delete(option);
		LOGGER.debug(" (delete)Option By Id details are{}", option);
		LOGGER.info("end of delete Option");
	}

	@Transactional
	public Option getOptionById(int id) {
		Option option = optionRepository.fetchOptionDetailsById(id);
		LOGGER.debug(" Inside service......Option By Id details are{}", option);
		return option;
	}

}
