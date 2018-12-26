package com.cts.tshell.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Assessment;
import com.cts.tshell.service.AssessmentService;

@RestController
public class AssessmentController {

	@Autowired
	private AssessmentService assessmentService;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(AssessmentController.class);
	
	
	@PostMapping("/start/assessment")
	public String startAssesment(@RequestBody Assessment assessment){

		LOGGER.info("START : startAssesment() of AssessmentController");
		LOGGER.debug("Assesment Object : ", assessment);
		return assessmentService.startAssessment(assessment);
		
	}
}
