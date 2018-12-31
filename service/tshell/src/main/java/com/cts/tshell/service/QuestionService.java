package com.cts.tshell.service;

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
		LOGGER.info("start");

		int questionId = option.getQuestion().getId();
		Question question = questionRepository.fetchAllQuestionDetails(questionId);
		option.setQuestion(question);
		LOGGER.debug("Question: {}", question);
		optionRepository.save(option);
		question = questionRepository.fetchQuestionDetails(questionId);
		LOGGER.debug("Question: {}", question);
		LOGGER.info("end");
		return question;
	}

	@Transactional
	public void saveOptionDescription(Option option) {
		LOGGER.info("start");
		String description = option.getDescription();
		option = optionRepository.fetchOptionDetailsById(option.getId());
		option.setDescription(description);
		optionRepository.save(option);
		LOGGER.debug("Option By Id details are{} ", option);
		LOGGER.info("end");
	}

	@Transactional
	public List<Question> getSingleReviewQuestion(int skillId) {

		LOGGER.info("START");
		LOGGER.debug("Skill Id {} ", skillId);
		/*
		 * Passing the skillId along with Pageable object with page and size
		 * parameters to QustionRepository
		 */
		Page<Question> questionPage = questionRepository.findReviewQuestion(skillId, PageRequest.of(0, 1));
		LOGGER.debug("Question Page : {}", questionPage);
		/*
		 * getContent() method gives the contents of the page object returned
		 * from Question Repository.
		 */
		List<Question> questionList = questionPage.getContent();
		LOGGER.debug("Question List : {}", questionList);
		/*
		 * The below code is for changing the status of the obtained questions.
		 */
		/*
		 * for (Question eachQuestion : questionList) {
		 * eachQuestion.setStatus("In Review");
		 * LOGGER.debug("Question (Modified Status) : {}", eachQuestion);
		 * questionRepository.save(eachQuestion); }
		 */
		return questionList;
	}

	@Transactional
	public boolean deleteOption(int id) {
		LOGGER.info("start of delete Option");
		boolean optionDeleteStatus =  false;
		LOGGER.debug(" optionDeleteStatus {}", optionDeleteStatus);
		Option option = optionRepository.fetchOptionDetailsById(id);
		LOGGER.debug(" Option to be deleted {}", option);
		optionRepository.delete(option);
		optionDeleteStatus = true;
		LOGGER.debug(" optionDeleteStatus {}", optionDeleteStatus);
		LOGGER.info("end of delete Option");
		return optionDeleteStatus;
	}

//	@Transactional
//	public Option getOptionById(int id) {
//		Option option = optionRepository.fetchOptionDetailsById(id);
//		LOGGER.debug(" Inside service......Option By Id details are{}", option);
//		return option;
//	}
	
	@Transactional
	public void updateStatus(int questionId, String status) {
		LOGGER.info("START");
		LOGGER.debug("Question Id {}", questionId);
		LOGGER.debug("Question Status {}", status);
		Question question = questionRepository.findById(questionId);
		LOGGER.debug("Question with initial status {}", question);
		if (status.equals("approve")) {
			question.setStatus("Approved");
		} else if (status.equals("reject")) {
			question.setStatus("Rejected");
		}
		questionRepository.save(question);
		LOGGER.debug("Question with final status {} ", question);
		LOGGER.info("end");
	}

}
