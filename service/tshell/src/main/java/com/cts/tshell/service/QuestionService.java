package com.cts.tshell.service;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;

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
	public List<Question> getAllQuestion(int questionId){
		 List<Question> questionList = questionRepository.fetchAllQuestion(questionId);
		 //System.out.println(questionList.size());
		 for (Question question : questionList ) {
			 for (Topic topic : question.getTopicList()){
				 topic.setQuestions(null);
			 }
		 }
		 return questionList ;
	}
	
	/*
	public long[]  fetchAllQuestionsID(int skillId){
		return questionRepository.getQuestionId(skillId);
		
	}*/
	
	
	public  Set<Integer>  fetchQuestionsID(int skillId){
		 int POOL_SIZE = 20;
		 int VAL_COUNT = 5;

		 long[]  mapping = questionRepository.getQuestionId(skillId);
		 long[] results;
		 int max = mapping.length;
		 int numbersNeeded = 40;
		 if (max < numbersNeeded)
		 {
		     throw new IllegalArgumentException("Can't ask for more numbers than are available");
		 }
		 Random rng = new Random(); // Ideally just create one instance globally
		 // Note: use LinkedHashSet to maintain insertion order
		 Set<Integer> generated = new LinkedHashSet<Integer>();
		 while (generated.size() < numbersNeeded)
		 {
		     Integer next = rng.nextInt(max) + 1;
		     // As we're adding to a set, this will automatically do a containment check
		     generated.add(next);
		 }
		 
		return generated;
	}
	
	
	public List<Question> getAllQuetions(){
		return questionRepository.findAll();
	}
	
	
	
}
