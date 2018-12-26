package com.cts.tshell.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Assessment;
import com.cts.tshell.service.AssessmentService;

@RestController
public class AssessmentController {
	public AssessmentService assessmentService;

	private static final Logger LOGGER = LoggerFactory.getLogger(AssessmentController.class);
	
	@Autowired
	public void setAssessmentService(AssessmentService assessmentService) {
		this.assessmentService = assessmentService;
	}
	
	@GetMapping("/getUser/{employeeId}")
	public List<Assessment> getUserId(@PathVariable("employeeId") int employeeId) {
		LOGGER.info("start");
		LOGGER.debug("employeeId: {} " , employeeId);
		LOGGER.info("end");
		return assessmentService.getUserId(employeeId);
	}
	
	
}
