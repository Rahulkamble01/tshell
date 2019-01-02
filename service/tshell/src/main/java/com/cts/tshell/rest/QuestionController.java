package com.cts.tshell.rest;

import java.util.List;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Question;
import com.cts.tshell.bean.Skill;
import com.cts.tshell.bean.Topic;
import com.cts.tshell.service.QuestionService;

@RestController
@RequestMapping("/question")
public class QuestionController {

	private static final Logger LOGGER = LoggerFactory.getLogger(QuestionController.class);
	@Autowired
	private QuestionService questionService;

	@GetMapping("/list/{id}")
	public List<Skill> getAllQuestion(@PathVariable int id) {
		LOGGER.info("START : getAllQuestion()  of QuestionController");
		LOGGER.debug("SkillId {}", id);
		return questionService.fetchAllQuestion(id);
	}

	// QRepositoery
	/*
	 * @GetMapping("/all/{id}") public List<Question>
	 * fetchAllQuestion(@PathVariable int id) {
	 * LOGGER.info("START : getAllQuestion()  of QuestionController");
	 * LOGGER.debug("SkillId {}", id); return
	 * questionService.getAllQuestion(id); }
	 */

	@GetMapping("/questionId/{questionId}")
	public List<Question> fetchAllQuestion(@PathVariable int questionId) {
		LOGGER.info("START : getAllQuestion()  of QuestionController");
		LOGGER.debug("Question Id {}", questionId);
		return questionService.getQuestionById(questionId);
	}

	@GetMapping("/allquestionid/{skillId}")
	public Set<Integer> fetchAllQuestionId(@PathVariable int skillId) {
		LOGGER.info("START :Getting all Question Ids from fetchAllQuestionId()  of QuestionController");
		LOGGER.debug("SkillId :  {}", skillId);
		return questionService.fetchQuestionsID(skillId);
	}

	/*@GetMapping("/topic")
	public void sav(){
		
		System.out.println(questionService.getTopicListandWeightage());
		for(Topic topic : questionService.getTopicListandWeightage()){
			int weightage = topic.getWeightage();
			System.out.println(weightage);
		}
	}*/
}
