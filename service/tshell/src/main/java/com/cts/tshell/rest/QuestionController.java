package com.cts.tshell.rest;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.MultipartFile;

import com.cts.tshell.bean.Question;
import com.cts.tshell.service.QuestionService;

@SessionAttributes("questionsList")
@RestController
@RequestMapping("/question")
public class QuestionController {
	private static final Logger LOGGER = LoggerFactory.getLogger(QuestionController.class);
	private QuestionService questionService;

	@Autowired
	public void setQuestionService(QuestionService questionService) {
		this.questionService = questionService;
	}

	@PostMapping("/upload")
	public List<Question> uploadFile(@RequestParam("file") MultipartFile file, ModelMap model,
			HttpServletRequest request) {
		LOGGER.info("uploadFile() is called");
		LOGGER.debug("Content type is {}", file.getContentType());
		request.getSession(true);
		List<Question> questionsList = new ArrayList<Question>();
		questionsList = questionService.readFile(file);
		LOGGER.info("uploadFile() execution is completed!");
		model.addAttribute("questionsList", questionsList);
		return questionsList;
	}

	@PostMapping("/submitforreview")
	public void submitForReview(ModelMap model) {
		LOGGER.info("submitForReview() is called");
		List<Question> questions = (List<Question>) model.get("questionsList");
		questionService.saveQuestionsForReview(questions);
		LOGGER.info("submitForReview() execution is completed!");
	}

	@PostMapping("/approveandsubmit")
	public void submitAsApproved(ModelMap model) {
		LOGGER.info("submitAsApproved() is called");
		List<Question> questions = (List<Question>) model.get("questionsList");
		questionService.saveQuestionsAsApproved(questions);
		LOGGER.info("submitAsApproved() execution is completed!");
	}
}
