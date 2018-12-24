package com.cts.tshell.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.tshell.bean.Question;
import com.cts.tshell.bean.Skill;
import com.cts.tshell.bean.Topic;
import com.cts.tshell.repository.QuestionRepository;
import com.cts.tshell.repository.SkillRepository;
import com.cts.tshell.repository.TopicRepository;

@Service
public class QuestionService {

	@Autowired
	private SkillRepository skillRepository;
	
	@Autowired 
	private TopicRepository topicRepository;
	
	@Autowired 
	private QuestionRepository questionRepository;
	
	public List<Skill> fetchAllQuestion(int skillId){
		return skillRepository.fetchAllSkillQuestion(skillId);
	}
	public List<Question> getAllQuestion(int skillId){
		 List<Question> questionList = questionRepository.fetchAllQuestion(skillId);
		 System.out.println(questionList.size());
		 for (Question question : questionList ) {
			 for (Topic topic : question.getTopicList()){
				 topic.setQuestions(null);
			 }
		 }
		 System.out.println(questionList.size());
		 return questionList ;
	}
	
	
	public long[]  fetchAllQuestionsID(int skillId){
		return questionRepository.getQuestionId(skillId);
	}
	
	
	public List<Question> getAllQuetions(){
		return questionRepository.findAll();
	}
	
	
	
}
