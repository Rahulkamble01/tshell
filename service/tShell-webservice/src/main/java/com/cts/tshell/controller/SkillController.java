package com.cts.tshell.controller;

<<<<<<< HEAD
public class SkillController {

=======
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Skill;
import com.cts.tshell.service.SkillService;

@RestController
@RequestMapping("/rest/skill")
public class SkillController {
	
	@Autowired
	private SkillService skillService;
	
>>>>>>> ffc510c6f816d46d9d96b95fe168d669d46600c9
}
