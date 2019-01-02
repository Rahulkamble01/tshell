package com.cts.tshell.service;

import java.util.HashSet;
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

	public List<Skill> fetchAllQuestion(int skillId) {
		return skillRepository.fetchAllSkillQuestion(skillId);
	}

	public List<Question> getQuestionById(int questionId) {
		List<Question> questionList = questionRepository.fetchQuestionById(questionId);
		// System.out.println(questionList.size());
		for (Question question : questionList) {
			for (Topic topic : question.getTopicList()) {
				topic.setQuestions(null);
			}
		}
		return questionList;
	}

	/*
	 * public long[] fetchAllQuestionsID(int skillId){ return
	 * questionRepository.getQuestionId(skillId);
	 * 
	 * }
	 */

	public Set<Integer> fetchQuestionsID(int skillId) {
		Set<Integer> generated2 = new HashSet<Integer>();

		int topicId;
		int weightage;
		int numbersNeeded;
		long[] mapping;
		int j=1;
		int max;
		List<Topic> topics = topicRepository.getTopicIdAndWeightage(skillId);
		for (Topic topic : topics) {
			System.out.println("Inside loop : " +j);
			topicId = topic.getId();
			weightage = topic.getWeightage();
			numbersNeeded = (int) Math.round(weightage * 0.40);
			System.out.println(topicId);
			System.out.println(weightage);
			System.out.println(numbersNeeded);
			mapping = questionRepository.getQuestionId(topicId, skillId);
			for (int i = 0; i < mapping.length; i++) {
				System.out.print(mapping[i] + ",");
			}
			System.out.println(" ");
			max = mapping.length;

			if (max < numbersNeeded) {
				throw new IllegalArgumentException("Can't ask for more numbers than are available");
			}
			Random rng = new Random(); 
			// Note: use LinkedHashSet to maintain insertion order
			Set<Integer> generated = new HashSet<Integer>();
			System.out.println("Starting While Loop : "+j );
			while (generated.size() < numbersNeeded) {
				int next = rng.nextInt(max) + 1;
				// As we're adding to a set, this will automatically do a
				// containment check
				int questionId = (int) mapping[next];
				generated.add(questionId);

			}
			System.out.println("While Loop Ended : "+j );
			System.out.println(generated);
			generated2.addAll(generated);
			System.out.println(generated2);
			j++;
			rng = null;
		}

		return generated2;
	}

	public List<Question> getAllQuetions() {
		return questionRepository.findAll();
	}

	// Not needeed only for test
	// public List<Topic> getTopicListandWeightage() {

	// }

}
