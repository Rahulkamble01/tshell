package com.cts.tshell.service;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.tshell.bean.Topic;
import com.cts.tshell.repository.TopicRepository;

/**
 * A condition evaluation report message that can logged or printed.
 * @author Adil Ansari, 729745
 * @author Saikat Singh Mahapatra, 729710
 * @since 1.0.0
 */
@Service
public class TopicService {
	private static final Logger LOGGER = LoggerFactory.getLogger(SkillService.class);

	private TopicRepository topicRepository;

	@Autowired
	public void setTopicRepository(TopicRepository topicRepository) {
		this.topicRepository = topicRepository;
	}

	@Transactional
	public void saveTopic(Topic topic) {
		LOGGER.info("Initialising saveTopic() with Topic Name: {}", topic.getName());
		topicRepository.save(topic);
		LOGGER.info("{} is Saved", topic.getName());
	}

	@Transactional
	public void deleteTopic(Topic topic) {
		LOGGER.info("Initialising deleteTopic() with Topic Name: {}", topic.getName());
		topicRepository.delete(topic);
		LOGGER.debug("{} is deleted", topic.getName());
	}

}
