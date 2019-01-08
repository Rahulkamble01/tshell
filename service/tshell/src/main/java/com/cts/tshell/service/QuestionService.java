package com.cts.tshell.service;

import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cts.tshell.bean.Option;
import com.cts.tshell.bean.Question;
import com.cts.tshell.bean.User;
import com.cts.tshell.repository.OptionRepository;
import com.cts.tshell.repository.QuestionRepository;
import com.cts.tshell.repository.UserRepository;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;

/**
 * @author 730080
 *
 */
@Service
public class QuestionService {

	private static final Logger LOGGER = LoggerFactory.getLogger(QuestionService.class);
	private UserRepository userRepository;
	private QuestionRepository questionRepository;
	private OptionRepository optionRepository;

	@Autowired
	public void setOptionRepository(OptionRepository optionRepository) {
		this.optionRepository = optionRepository;
	}

	@Autowired
	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Autowired
	public void setQuestionRepository(QuestionRepository questionRepository) {
		this.questionRepository = questionRepository;
	}

	@Transactional
	public List<Question> readFile(MultipartFile file) {

		LOGGER.info("readFile() is called!");
		InputStreamReader reader = null;
		CSVReader csvReader = null;
		List<Question> uploadedQuestions = new ArrayList<Question>();
		// Reading file using InputStreamReader..
		try {
			reader = new InputStreamReader(file.getInputStream());
			csvReader = new CSVReaderBuilder(reader).withSkipLines(12).build();
			List<String[]> csvData = csvReader.readAll();
			for (String questionData[] : csvData) {
				Question question = new Question(questionData);
				uploadedQuestions.add(question);
			}
			csvReader.close();
			reader.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		LOGGER.info("readFile() execution is completed!");
		return uploadedQuestions;
	}

	@Transactional
	public void saveQuestionsForReview(List<Question> questions) {
		LOGGER.info("saveQuestionsForReview() service is called!");
		User user = userRepository.findByEmployeeId(123456);
		LOGGER.debug("Created user details -> {}", user);
		Date createdDate = new Date();
		for (Question question : questions) {
			question.setCreatedDate(createdDate);
			question.setStatus("Pending");
			question.setCreatedUser(user);
			for (Option option : question.getOptionList()) {
				optionRepository.save(option);
			}
			questionRepository.save(question);
		}
		LOGGER.info("saveQuestionsForReview() execution is completed!");
	}

	@Transactional
	public void saveQuestionsAsApproved(List<Question> questions) {
		LOGGER.info("saveQuestionsAsApproved() service is called!");
		User user = userRepository.findByEmployeeId(123456);
		Date createdDate = new Date();
		for (Question question : questions) {
			question.setCreatedDate(createdDate);
			question.setStatus("Approved");
			question.setCreatedUser(user);
			for (Option option : question.getOptionList()) {
				optionRepository.save(option);
			}
			questionRepository.save(question);
		}
		LOGGER.info("saveQuestionsAsApproved() execution is completed!");
	}
	// Batch processing code.. (Pending!)
	/*
	 * public void saveQuestionsForReview(List<Question> questions) {
	 * LOGGER.info("saveQuestionsForReview() service is called!"); //
	 * LOGGER.debug("Created user details {}", user);
	 * LOGGER.debug("Saving Questions for Review -> {}", questions); Transaction
	 * tx = null; Session session =
	 * HibernateUtil.getSessionFactory().openSession(); int batchSize = 5; try {
	 * tx = session.beginTransaction(); // User user = (User)
	 * session.get(User.class, 1);; for (int i = 0; i < questions.size(); i++) {
	 * LOGGER.info("Question {}. {}\n", i + 1, questions.get(i));
	 * questions.get(i).setCreatedUser(null); session.save(questions.get(i)); if
	 * (i > 0 && i % batchSize == 0) {
	 * LOGGER.info("Flushing and clearing the session!"); // flushing a batch of
	 * inserts and releasing memory session.flush(); session.clear(); } }
	 * tx.commit();
	 * 
	 * } catch (Exception e) { if (tx != null && tx.isActive()) tx.rollback();
	 * throw e; } finally { session.close(); } LOGGER.
	 * info("saveQuestionsForReview() service call execution is completed!"); }
	 */

}
