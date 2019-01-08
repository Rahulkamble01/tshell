package com.cts.tshell.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cts.tshell.bean.Option;
import com.cts.tshell.bean.Question;
import com.cts.tshell.bean.Topic;
import com.cts.tshell.bean.User;
import com.cts.tshell.repository.OptionRepository;
import com.cts.tshell.repository.QuestionRepository;
import com.cts.tshell.repository.TopicRepository;
import com.cts.tshell.repository.UserRepository;

@Service
public class QuestionService {

	private static final Logger LOGGER = LoggerFactory.getLogger(QuestionService.class);

	private QuestionRepository questionRepository;
	private TopicRepository topicRepository;
	private OptionRepository optionRepository;
	private UserRepository userRepository;

	@Autowired
	public void setoptionRepository(OptionRepository optionRepository) {
		this.optionRepository = optionRepository;
	}
	@Autowired
	public void setQuestionRepository(QuestionRepository questionRepository) {
		this.questionRepository = questionRepository;
	}

	@Autowired
	public void setTopicRepository(TopicRepository topicRepository) {
		this.topicRepository = topicRepository;
	}

	@Autowired
	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	@Transactional
	public void saveQuestion(Question question) {
		LOGGER.info("starting saveQuestion method");
		Topic t = topicRepository.findTopicByName(question.getTopic());		
		if(t.getQuestions()!=null){
			List<Question> questionList=t.getQuestions();
			questionList.add(question);
			LOGGER.info("Adding a question if not null :{}"+questionList.add(question));
			t.setQuestions(questionList);
		}else{
			List<Question> questionList=new ArrayList<Question>();
			questionList.add(question);
			LOGGER.info("Adding a question :{}"+questionList.add(question));
			t.setQuestions(questionList);
		}
		topicRepository.save(t);
		Question latestQn=questionRepository.fetchLatestQn();	 
		
		for(Option option: question.getOptionList()){
			
			option.setId(0);
			option.setQuestion(latestQn);
			optionRepository.save(option);
		}

	}
	@Transactional
	public List<User> getUser(String userId){
		LOGGER.info("starting getUser method");
		List<User> userInfo = (List<User>) userRepository.findAllById(userId);
		LOGGER.info("userInfo :{}"+userInfo);
		LOGGER.info("end of getUser()");
		return userInfo;
		
	}

	@Transactional
	public List<Topic> getAllTopics(int skillId) {
		LOGGER.info("starting getAllTopics method");
		List<Topic> topics = (List<Topic>) topicRepository.findTopics(skillId);
		LOGGER.debug("Topic List : {}"+topics);
		LOGGER.info("end of getAllTopics method");
		return topics;
	}
	@Transactional
	public List<Question> findTotalQuestionContributed(int employeeId) {
		LOGGER.info("START");
		List<Question> question = questionRepository.findTotalQuestionContributedById(employeeId);
		LOGGER.debug("list of total no of question for each subject contributed : {} ", question);
		LOGGER.info("END");
		return question;

	}

	@Transactional
	public long getQuestionCount() {
		LOGGER.info("start");
		long questionCount = questionRepository.totalQuestionsCount();
		LOGGER.debug("QuestionCount -> {}", questionCount);
		return questionCount;
	}

	

}
