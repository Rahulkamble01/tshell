package com.cts.tshell.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Assessment;
import com.cts.tshell.service.AssessmentService;

@RequestMapping("/rest/assessment/")
@RestController
public class AssessmentController {
	
	@Autowired
	private AssessmentService assessmentService;
	
	@GetMapping("/top5/{id}")
	public List<Assessment> getTop5PerformersBySkill(@PathVariable("id") int skillId){
		return assessmentService.getTop5PerformersBySkill(skillId);
	}
	@GetMapping("/history")
	public List<Assessment> getHistoryByUser(@PathVariable("id") int userId){
		return assessmentService.getHistoryByUser(userId);
	}

}
