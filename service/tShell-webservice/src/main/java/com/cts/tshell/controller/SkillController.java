package com.cts.tshell.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Skill;
import com.cts.tshell.service.SkillService;

@RestController
public class SkillController {

	private SkillService skillService;
	
	@Autowired
	public void setSkillService(SkillService skillService) {
		this.skillService = skillService;
	}
	
	@GetMapping("/recentlyAddedSkillList")
	public List<Skill> getRecentSkills(){
		
		return skillService.getSkills();
	}
}
