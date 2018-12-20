package com.cts.tshell.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Skill;
import com.cts.tshell.service.SkillService;

@RestController
public class SkillController {
	@Autowired
	private SkillService skillService;
	@GetMapping("/rest1/list")
	public List<Skill> getTop5SearchedSkills(){
		
		return skillService.getTop5Skills();
	}
	

}
