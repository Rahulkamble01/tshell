package com.cts.tshell.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Assessment;
import com.cts.tshell.bean.AssessmentQuestion;
import com.cts.tshell.bean.AssessmentQuestionOption;
import com.cts.tshell.service.AssessmentService;

@RestController
@RequestMapping("/assessment")
public class AssessmentController {

	@Autowired
	private AssessmentService assessmentService;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(AssessmentController.class);
	
	
	@PostMapping("/start")
	public String startAssesment(@RequestBody Assessment assessment){

		LOGGER.info("START : startAssesment() of AssessmentController");
		LOGGER.debug("Assesment Object : ", assessment);
		return assessmentService.startAssessment(assessment);
		
	}
	
	@PostMapping("/saveresponse")
	public void saveAssesmentResponse(@RequestBody AssessmentQuestion assessmentQuestion){

		LOGGER.info("START : saveAssesmentResponse() of AssessmentController");
		LOGGER.debug("AssessmentQuestionOption Object : ", assessmentQuestion);
		 assessmentService.saveAssessmentResponse(assessmentQuestion);
		
	}
	
	@PostMapping("/response")
	public void saveResponse(@RequestBody AssessmentQuestionOption assessmentQuestionOption){

		LOGGER.info("START : saveResponse() of AssessmentController");
		//LOGGER.debug("AssessmentQuestionOption Object : ", assessmentQuestion);
		 assessmentService.saveResponse(assessmentQuestionOption);
		
	}
}
