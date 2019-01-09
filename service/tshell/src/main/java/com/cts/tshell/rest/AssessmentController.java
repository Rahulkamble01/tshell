package com.cts.tshell.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Assessment;
import com.cts.tshell.bean.Views;
import com.cts.tshell.service.AssessmentService;
import com.cts.tshell.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/assessment")
public class AssessmentController {

private static final Logger LOGGER = LoggerFactory.getLogger(AssessmentController.class);
	
	@Autowired
	private AssessmentService assessmentService;

	@Autowired
	public UserService userService;


//	@RequestMapping(value = "/top5list/{skillId}", method = RequestMethod.GET)
//	public List<Assessment> findTop5Performers(@PathVariable("skillId") int skillId){
//		LOGGER.info("AssessmentController->findTop5PerformersOfSkill");
//		return assessmentService.findTop5AssessmentBasedSkill(skillId);
//	}
//	
	@GetMapping("/top5list/{skillId}")
	public String findTop5Performers(@PathVariable("skillId") int skillId) throws JsonProcessingException{
		LOGGER.info("Start");
		LOGGER.debug("Skill Id:"+skillId);
		List<Assessment> assessments=assessmentService.findTop5AssessmentBasedSkill(skillId);	
		LOGGER.debug("Assessments : {}",assessments);
		ObjectMapper mapper = new ObjectMapper();
		String result=mapper.writerWithView(Views.Public.class).writeValueAsString(assessments);
		LOGGER.info("End");
		return result;
	}
	
	@GetMapping("/assessmentcount")
	public long getTotalNumberofAssessments() {
		LOGGER.info("start");
		long assessmentCount = assessmentService.getAssessmentCount();
		LOGGER.debug("totalAssessments -> {}", assessmentCount);
		return assessmentCount;
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
