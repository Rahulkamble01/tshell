package com.cts.tshell.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.Search;
import com.cts.tshell.bean.Option;
import com.cts.tshell.bean.Question;
import com.cts.tshell.bean.Views;
import com.cts.tshell.service.QuestionService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

//@ControllerAdvice
@RestController
@RequestMapping("/question/")
public class QuestionController {
	private static final Logger LOGGER = LoggerFactory.getLogger(QuestionController.class);
	private QuestionService questionService;

	@Autowired
	public void setQuestionService(QuestionService questionService) {
		this.questionService = questionService;
	}

	@PostMapping("/option/add")
	public String addOption(@RequestBody Option option) throws JsonProcessingException {
		LOGGER.info("start");
		LOGGER.debug("Option: {}", option);
		Question question = questionService.saveOption(option);
		LOGGER.info("Getting New Question");
		//Question question = questionService.getQuestion(option.getQuestion().getId());
		LOGGER.debug("Question: {}", question);
		ObjectMapper mapper = new ObjectMapper();
		String questionString = mapper.writerWithView(Views.Public.class).writeValueAsString(question);
		LOGGER.debug("Question String : {}", questionString);
		LOGGER.info("end");
        return questionString;
	}

	
	@GetMapping("/review/{skillId}")
	public String getSingleReviewQuestion(@PathVariable int skillId) throws JsonProcessingException {
		LOGGER.info("START");
		LOGGER.debug("SkillId {} ", skillId);
		List<Question> questionList = questionService.getSingleReviewQuestion(skillId);
		LOGGER.debug("Question List : {}", questionList);
		ObjectMapper mapper = new ObjectMapper();
		String questions = mapper.writerWithView(Views.Public.class).writeValueAsString(questionList);
		LOGGER.debug("Questions as String : {}", questions);
		LOGGER.info("END");
		return questions;
	}

	@GetMapping("/option/delete/{id}")
	public boolean deleteOptionById(@PathVariable int id) {
		LOGGER.info("START");
		boolean optionDeleteStatus = false;
		LOGGER.debug("Option Delete Status(initial): {}",optionDeleteStatus);
		optionDeleteStatus = questionService.deleteOption(id);
		LOGGER.debug("Option Delete Status(final): {}",optionDeleteStatus);
		LOGGER.info("END");
		return optionDeleteStatus;
	}
	
	@GetMapping("/updatestatus/{questionId}/{status}/{skillId}")
	public String updateStatus(@PathVariable int questionId,@PathVariable String status ,@PathVariable int skillId) throws JsonProcessingException {
		LOGGER.info("START");
		LOGGER.debug("Question Id {} ",questionId);
		LOGGER.debug("Question Status {} ", status);
		LOGGER.debug("Skill Id {} ", skillId);
		questionService.updateStatus(questionId, status);
		List<Question> questionList = questionService.getSingleReviewQuestion(skillId);
		LOGGER.debug("Question List : {}", questionList);
		ObjectMapper mapper = new ObjectMapper();
		String questions = mapper.writerWithView(Views.Public.class).writeValueAsString(questionList);
		LOGGER.debug("Questions as String : {}", questionList);
		LOGGER.info("END");
		return questions;
	}
	
	@PostMapping("/searchedquestionslist")
	public String getAllQuestions(@RequestBody Search search) throws JsonProcessingException {
		LOGGER.info("Start Fetching Questions Based On Keyword .");
		String searchedQuestion = search.getKeyword();
		List<Question> allQuestions = questionService.fetchQuestionBasedOnKeyword(searchedQuestion);
		ObjectMapper mapper = new ObjectMapper();
		String questions = mapper.writerWithView(Views.Public.class).writeValueAsString(allQuestions);
		LOGGER.info("End Fetching Questions Based On Keyword .");
		return questions;
		
	}
	
	@PostMapping("/save")
	public boolean saveOptionDescription(@RequestBody Option option) {
		LOGGER.info("Starting Controller");
		LOGGER.info("Ending Controller");
		boolean isOptionEdited = questionService.saveOptionDescription(option);
		LOGGER.debug("isOptionEdited: {}",isOptionEdited);
		LOGGER.info("END");
		return isOptionEdited;
	}
	
	@PostMapping("/update")
	public String editQuestion(@RequestBody Question question) throws JsonProcessingException {
		LOGGER.info("START");
		LOGGER.debug("Question {}", question);
		Question updatedQuestion = questionService.updateQuestion(question);
		LOGGER.debug("Updated Question {}", updatedQuestion);
		ObjectMapper mapper = new ObjectMapper();
		String uQuestion = mapper.writerWithView(Views.Public.class).writeValueAsString(updatedQuestion);
		LOGGER.debug("Updated Question as String {}", uQuestion);
		LOGGER.info("END");
		return uQuestion;
	}
	
	@GetMapping("/option/updatestatus/{optionId}")
	public boolean updateOptionStatus(@PathVariable int optionId) {
		LOGGER.info("START");
		LOGGER.debug("Option Id {}", optionId);
		boolean modified = questionService.modifyOptionStatus(optionId);
		LOGGER.debug("Is Option status modified {}", modified);
		return modified;
	}
}
