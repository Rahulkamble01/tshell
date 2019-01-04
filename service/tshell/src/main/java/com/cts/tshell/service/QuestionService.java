package com.cts.tshell.service;

import java.util.Date;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
	public Question saveOption(Option option) {
		LOGGER.info("START");
		int questionId = option.getQuestion().getId();
		LOGGER.debug("Question Id: {}", questionId);
		Question question = questionRepository.fetchAllQuestionDetails(questionId);
		/*
		 * this below line was added because the hibernate cache was not updating and it
		 * was returning the same object without recently added option to front end.
		 */
		question.getOptionList().add(option);
		LOGGER.debug("Question: {}", question);
		option.setQuestion(question);
		LOGGER.debug("Option: {}", option);
		optionRepository.save(option);
		Question updatedQuestion = questionRepository.fetchQuestionDetails(questionId);
		LOGGER.debug("Updated Question: {}", updatedQuestion);
		LOGGER.info("end");
		return updatedQuestion;
	}

	@Transactional
	public List<Question> getSingleReviewQuestion(int skillId) {

		LOGGER.info("START");
		LOGGER.debug("Skill Id: {} ", skillId);
		// [BELOW] Passing the skillId along with Pageable object with page and size
		// parameters to QuestionRepository
		Page<Question> questionPage = questionRepository.findReviewQuestion(skillId, PageRequest.of(0, 1));
		LOGGER.debug("Question Page : {}", questionPage);
		// [BELOW] getContent() method gives the contents of the page object returned
		// from Question Repository.
		List<Question> questionList = questionPage.getContent();
		LOGGER.debug("Question List : {}", questionList);
		// [BELOW] The below code is for changing the status of the obtained questions.

		for (Question eachQuestion : questionList) {
			eachQuestion.setStatus("In Review");
			LOGGER.debug("Question (Modified Status) : {}", eachQuestion);
			questionRepository.save(eachQuestion);
		}

		return questionList;
	}

	@Transactional
	public boolean deleteOption(int id) {
		LOGGER.info("start of delete Option");
		boolean optionDeleteStatus = false;
		LOGGER.debug(" optionDeleteStatus {}", optionDeleteStatus);
		Option option = optionRepository.fetchOptionDetailsById(id);
		LOGGER.debug(" Option to be deleted {}", option);
		optionRepository.delete(option);
		option = optionRepository.fetchOptionDetailsById(id);
		LOGGER.debug(" Option after deletion: {}", option);
		if (option == null)
			optionDeleteStatus = true;
		else
			optionDeleteStatus = false;
		LOGGER.debug(" optionDeleteStatus {}", optionDeleteStatus);
		LOGGER.info("end of delete Option");
		return optionDeleteStatus;
	}

	@Transactional
	public void updateStatus(int questionId, String status) {
		LOGGER.info("START");
		LOGGER.debug("Question Id: {}", questionId);
		LOGGER.debug("Question Status: {}", status);
		Date reviewedDate = new Date();
		Question question = questionRepository.findById(questionId);
		LOGGER.debug("Question with initial status {}", question);
		if (status.equals("approve")) {
			question.setStatus("Approved");
		} else if (status.equals("reject")) {
			question.setStatus("Rejected");
		}
		question.setReviewedDate(reviewedDate);
		questionRepository.save(question);
		LOGGER.debug("Question with final status {} ", question);
		LOGGER.info("end");
	}

	@Transactional
	public List<Question> fetchQuestionBasedOnKeyword(String searchedQuestion) {
		LOGGER.info("Start");
		List<Question> questions = (List<Question>) questionRepository.fetchQuestionBasedOnKeyword(searchedQuestion);
		LOGGER.debug("Questions are: " + questions);
		for (Question question : questions) {
			LOGGER.debug("Qu Id: {}", question.getId());
			LOGGER.debug("Question: {}", question.getQuestion());
			question = questionRepository.findQuestionWithOptions(question.getId());
		}
		LOGGER.info("End");
		return questions;
	}

	@Transactional
	public boolean saveOptionDescription(Option option) {
		LOGGER.info("start");
		Option actualOption = optionRepository.fetchOptionDetailsById(option.getId());
		LOGGER.debug("Actual Option: {}", actualOption);
		String initialDescription = actualOption.getDescription();
		LOGGER.debug("Initial Description: {}", initialDescription);
		actualOption.setDescription(option.getDescription());
		LOGGER.debug("Actual Option (modified) : {}", actualOption);
		optionRepository.save(actualOption);
		actualOption = optionRepository.fetchOptionDetailsById(option.getId());
		LOGGER.debug("Actual Option (from database) : {}", actualOption);
		if (actualOption.getDescription().equals(initialDescription))
			return false;
		else
			return true;
	}

	@Transactional
	public Question updateQuestion(Question question) {
		LOGGER.info("START");
		int questionId = question.getId();
		LOGGER.debug("Question Id: {} ", questionId);
		Question actualQuestion = questionRepository.findById(questionId);
		LOGGER.debug("Actual Question: {} ", actualQuestion);
		actualQuestion.setQuestion(question.getQuestion());
		LOGGER.debug("Actual Question (modified): {} ", actualQuestion);
		questionRepository.save(actualQuestion);
		Question updatedQuestion = questionRepository.findById(questionId);
		LOGGER.debug("Updated Question: {} ", actualQuestion);
		LOGGER.info("END");
		return updatedQuestion;
	}

	@Transactional
	public boolean modifyOptionStatus(int optionId) {
		LOGGER.info("START");
		LOGGER.debug("Option Id: {} ", optionId);
		Option option = optionRepository.findById(optionId);
		LOGGER.debug("Option {} ", option);
		boolean initialOptionStatus = option.isAnswer();
		LOGGER.debug("Initial Option Status: {} ", initialOptionStatus);
		option.setAnswer(!option.isAnswer());
		LOGGER.debug("Option: {} ", option);
		optionRepository.save(option);
		Option uOption = optionRepository.findById(optionId);
		LOGGER.debug("Updated Option: {} ", uOption);
		return !uOption.isAnswer() == initialOptionStatus;
	}

}
