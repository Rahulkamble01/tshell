package com.cts.tshell.rest;



import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.cts.tshell.service.AssessmentService;

@RestController
@RequestMapping("/assessment")
public class AssessmentController {

	private final static Logger LOGGER = LoggerFactory.getLogger(AssessmentController.class);
	@Autowired
	private AssessmentService assessmentService;
	
	@GetMapping("/assessmentcount")
	public long getTotalNumberofAssessments() {
		LOGGER.info("start");
		long assessmentCount = assessmentService.getAssessmentCount();
		LOGGER.debug("totalAssessments -> {}", assessmentCount);
		return assessmentCount;
	}
	
}
