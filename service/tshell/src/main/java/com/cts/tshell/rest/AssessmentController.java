package com.cts.tshell.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Assessment;
import com.cts.tshell.bean.AssessmentQuestion;
import com.cts.tshell.bean.TopicWiseScore;
import com.cts.tshell.bean.Views;
import com.cts.tshell.service.AssessmentService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/assessment")
public class AssessmentController {

	@Autowired
	private AssessmentService assessmentService;

	private static final Logger LOGGER = LoggerFactory.getLogger(AssessmentController.class);

	@PostMapping("/start")
	public String startAssesment(@RequestBody Assessment assessment) {

		LOGGER.info("START : startAssesment() of AssessmentController");
		LOGGER.debug("Assesment Object : ", assessment);
		return assessmentService.startAssessment(assessment);

	}

	@PostMapping("/saveresponse")
	public void saveAssesmentResponse(@RequestBody AssessmentQuestion assessmentQuestion) {

		LOGGER.info("START : saveAssesmentResponse() of AssessmentController");
		LOGGER.debug("AssessmentQuestionOption Object : ", assessmentQuestion);
		assessmentService.saveAssessmentResponse(assessmentQuestion);
	}

	@PostMapping("/submit")
	public void submitAssesment(@RequestBody Assessment assessment) {

		LOGGER.info("START : st() of AssessmentController");
		LOGGER.debug("Assessment Object : ", assessment);
		assessmentService.submitAssesment(assessment);
	}

	@GetMapping("/score/{assessmentId}")
	public String evaluateAssesment(@PathVariable("assessmentId") int assessmentId) throws JsonProcessingException  {

		LOGGER.info("START : evaluateAssesment() of AssessmentController");
		LOGGER.debug("Assessment Id : ", assessmentId);
		Assessment assessment = assessmentService.evaluateScore(assessmentId);
		ObjectMapper mapper = new ObjectMapper();
		String result = mapper.writerWithView(Views.Public.class).writeValueAsString(assessment);
		return result;

	}
	
	@GetMapping("/topicscore/{assessmentId}")
	public List<TopicWiseScore> getTopicwiseScore(@PathVariable int assessmentId){
		 List<TopicWiseScore> assessment = assessmentService.getTopicWiseScore(assessmentId);
		 assessment.toArray();
		 return assessment;
	}
}
