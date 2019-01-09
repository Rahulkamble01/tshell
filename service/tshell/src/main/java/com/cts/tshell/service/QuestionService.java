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
import com.cts.tshell.bean.QuestionDifficultyLevel;
import com.cts.tshell.bean.Skill;
import com.cts.tshell.bean.Topic;
import com.cts.tshell.bean.User;
import com.cts.tshell.repository.OptionRepository;
import com.cts.tshell.repository.QuestionDifficultyLevelRepository;
import com.cts.tshell.repository.QuestionRepository;
import com.cts.tshell.repository.SkillRepository;
import com.cts.tshell.repository.TopicRepository;
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
	private QuestionDifficultyLevelRepository questionDifficultyLevelRepository;
	private TopicRepository topicRepository;
	private SkillRepository skillRepository;

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

	@Autowired
	public void setQuestionDifficultyLevelRepository(
			QuestionDifficultyLevelRepository questionDifficultyLevelRepository) {
		this.questionDifficultyLevelRepository = questionDifficultyLevelRepository;
	}

	@Autowired
	public void setTopicRepository(TopicRepository topicRepository) {
		this.topicRepository = topicRepository;
	}

	@Autowired
	public void setSkillRepository(SkillRepository skillRepository) {
		this.skillRepository = skillRepository;
	}

	@Transactional
	public List<Topic> getTopics(int skillId) {
		LOGGER.info("getTopics() is called!");
		Skill skill = skillRepository.findById(skillId);
		List<Topic> topics = topicRepository.findBySkill(skill);
		LOGGER.info("getTopics() execution is completed!");
		LOGGER.debug("No. of Topics are {}", topics.size());
		return topics;
	}

	@Transactional
	public List<Question> readFile(MultipartFile file) {

		LOGGER.info("readFile() is called!");
		InputStreamReader reader = null;
		CSVReader csvReader = null;
		// Getting Topics wrt skillId
		List<Topic> topics = getTopics(1);
		List<Question> uploadedQuestions = new ArrayList<Question>();
		// Reading file using InputStreamReader..
		try {
			reader = new InputStreamReader(file.getInputStream());
			csvReader = new CSVReaderBuilder(reader).withSkipLines(12).build();
			List<String[]> csvData = csvReader.readAll();
			for (String questionData[] : csvData) {
				Question question = new Question(questionData);
				// Validating entered topic with database
				boolean isTopicFound = false;
				for (Topic topic : topics) {
					isTopicFound = topic.getName().equalsIgnoreCase(questionData[0]);
				}
				if (isTopicFound) {
					question.setValidTopic(true);
					question.setTopic(questionData[0]);
				} else {
					question.setValidTopic(false);
				}
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
		User user = userRepository.findByEmployeeId("123456");
		QuestionDifficultyLevel questionDifficultyLevel = questionDifficultyLevelRepository.findById(2);
		LOGGER.debug("Question Difiiculty Level -> {}", questionDifficultyLevel);
		LOGGER.debug("Created user details -> {}", user);
		Date createdDate = new Date();
		for (Question question : questions) {
			Topic topic = topicRepository.findByName(question.getTopic());
			List<Question> topicQuestions = topic.getQuestions();
			question.setCreatedDate(createdDate);
			question.setStatus("Pending");
			question.setCreatedUser(user);
			question.setQuestionDifficultyLevel(questionDifficultyLevel);
			topicQuestions.add(question);
			topic.setQuestions(topicQuestions);
			for (Option option : question.getOptionList()) {
				option.setQuestion(question);
				optionRepository.save(option);
			}
			topicRepository.save(topic);

		}

		LOGGER.info("saveQuestionsForReview() execution is completed!");
	}

	@Transactional
	public void saveQuestionsAsApproved(List<Question> questions) {
		LOGGER.info("saveQuestionsAsApproved() service is called!");
		User user = userRepository.findByEmployeeId("123456");
		QuestionDifficultyLevel questionDifficultyLevel = questionDifficultyLevelRepository.findById(2);
		LOGGER.debug("Question Difiiculty Level -> {}", questionDifficultyLevel);
		Date createdDate = new Date();
		for (Question question : questions) {
			Topic topic = topicRepository.findByName(question.getTopic());
			List<Question> topicQuestions = topic.getQuestions();
			question.setCreatedDate(createdDate);
			question.setStatus("Approved");
			question.setQuestionDifficultyLevel(questionDifficultyLevel);
			question.setCreatedUser(user);
			topicQuestions.add(question);
			topic.setQuestions(topicQuestions);
			for (Option option : question.getOptionList()) {
				option.setQuestion(question);
				optionRepository.save(option);
			}
			topicRepository.save(topic);
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
