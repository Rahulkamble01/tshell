package com.cts.tshell.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Skill;
import com.cts.tshell.service.SkillService;

@RestController
@RequestMapping("/rest/skill/")
public class SkillController {
	
	@Autowired
	private SkillService skillService;

	
	@GetMapping("getall")
	public List<Skill> showAllSkill(){
		
		return skillService.getAllSkill();
	}
	
	
}
