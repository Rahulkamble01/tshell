package com.cts.tshell.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Assessment;
import com.cts.tshell.service.AssessmentService;

@RestController
@RequestMapping("/")
public class AssessmentController {

private static final Logger LOGGER = LoggerFactory.getLogger(AssessmentController.class);
	
	@Autowired
	private AssessmentService assessmentService;
	
	@RequestMapping(value = "/top5list/{skillId}", method = RequestMethod.GET)
	public List<Assessment> findTop5Performers(@PathVariable("skillId") int skillId){
		LOGGER.info("AssessmentController->findTop5PerformersOfSkill");
		return assessmentService.findTop5AssessmentBasedSkill(skillId);
	}
}
