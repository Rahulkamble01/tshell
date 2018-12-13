package com.cts.tshell.controller;

<<<<<<< HEAD
=======



import java.util.List;

>>>>>>> rel1
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Skill;
import com.cts.tshell.service.SkillService;
@RestController

@RequestMapping("/rest/skill")
public class SkillController {



	@Autowired
	private SkillService skillService;
<<<<<<< HEAD
=======
	


	@Autowired
	public void setSkillService(SkillService skillService) {
		this.skillService = skillService;
	}
	
	@GetMapping("/recentlyAddedSkillList")
	public List<Skill> getRecentSkills(){
		
		return skillService.getSkills();
	}

>>>>>>> rel1
}
	


