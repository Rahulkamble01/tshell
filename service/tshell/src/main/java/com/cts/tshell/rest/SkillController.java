package com.cts.tshell.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Skill;
import com.cts.tshell.service.SkillService;

@RestController
@RequestMapping("/skill")
public class SkillController {

	private final static Logger LOGGER = LoggerFactory.getLogger(SkillService.class);

	private SkillService skillService;

	@Autowired
	public void setSkillService(SkillService skillService) {
		this.skillService = skillService;
	}

	@GetMapping("/recentSkillList")
	public List<Skill> getRecentSkills() {
		LOGGER.info("start");
		List<Skill> skills = skillService.getRecent5Skills();
		LOGGER.debug("SkillController -> {}", skills);
		return skills;
	}
}
