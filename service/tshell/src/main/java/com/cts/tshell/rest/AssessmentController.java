package com.cts.tshell.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Assessment;
import com.cts.tshell.bean.Views;
import com.cts.tshell.service.AssessmentService;
import com.cts.tshell.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class AssessmentController {
	public AssessmentService assessmentService;
	
	@Autowired
	public UserService userService;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(AssessmentController.class);
	
	@Autowired
	public void setAssessmentService(AssessmentService assessmentService) {
		this.assessmentService = assessmentService;
	}	
	
	@GetMapping("/getAssessment/{userId}")
	public String getAssessmentsOfUserById(@PathVariable("userId") int userId) throws JsonProcessingException{
		LOGGER.info("start");
		LOGGER.debug("userId: {} " , userId);
		LOGGER.info("end");
		List<Assessment> assessments=assessmentService.getAssessmentsOfUserById(userId);
		ObjectMapper mapper = new ObjectMapper();
		String result=mapper.writerWithView(Views.Public.class).writeValueAsString(assessments);
		return result;
	}
}
