package com.cts.tshell.service;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.tshell.bean.Option;
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

	public List<Question> getQuestionById(int questionId) {
		List<Question> questionList = questionRepository.fetchQuestionById(questionId);
		for(Question question : questionList){
			for(Option option : question.getOptionList()){
				option.setAnswer(false);
			}
		}
		return questionList;
		// System.out.println(questionList.size()); * for (Question question :
		// questionList) { for (Topic topic : question.getTopicList()) {
		// topic.setQuestions(null); } }
	}

	public Set<Integer> fetchQuestionsID(int skillId) {
		Set<Integer> generated2 = new HashSet<Integer>();

		int topicId;
		int weightage;
		int numbersNeeded;
		long[] mapping;
		int max;
		List<Topic> topics = topicRepository.getTopicIdAndWeightage(skillId);
		for (Topic topic : topics) {
			topicId = topic.getId();
			weightage = topic.getWeightage();
			numbersNeeded = (int) Math.round(weightage * 0.40);
			mapping = questionRepository.getQuestionId(topicId, skillId);
			max = mapping.length;

			if (max < numbersNeeded) {
				throw new IllegalArgumentException("Can't ask for more numbers than are available");
			}
			Random rng = new Random();
			// Note: use LinkedHashSet to maintain insertion order
			Set<Integer> generated = new HashSet<Integer>();

			while (generated.size() < numbersNeeded) {
				int next = rng.nextInt(max) + 1;
				// As we're adding to a set, this will automatically do a
				// containment check
				int questionId = (int) mapping[next];
				generated.add(questionId);
			}
			generated2.addAll(generated);
		}

		return generated2;
	}

	public List<Question> getAllQuetions() {
		return questionRepository.findAll();
	}

}
