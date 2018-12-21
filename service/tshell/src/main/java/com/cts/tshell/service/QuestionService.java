package com.cts.tshell.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.tshell.bean.Skill;
import com.cts.tshell.bean.Topic;
import com.cts.tshell.repository.SkillRepository;
import com.cts.tshell.repository.TopicRepository;

@Service
public class QuestionService {

	@Autowired
	private SkillRepository skillRepository;
	
	@Autowired 
	private TopicRepository topicRepository;
	
	public List<Skill> fetchAllQuestion(int skillId){
		return skillRepository.fetchAllSkillQuestion(skillId);
	}
	
	public List<Topic> fetchAllQuestionsID(int id){
		return topicRepository.getAllQuestionById(id);
	}
}
