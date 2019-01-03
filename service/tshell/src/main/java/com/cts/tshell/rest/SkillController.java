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

public class SkillController extends TshellController {
	private static final Logger LOGGER = LoggerFactory.getLogger(SkillController.class);
	@Autowired
	private SkillService skillService;

	@GetMapping("/top4searchedskills")
	public List<Skill> getTop4SearchedSkills() {
		LOGGER.info("start ");
		List<Skill> top4SearchedSkills = skillService.getTop4Skills();
		LOGGER.debug("Top 4 Searched Skills ->", top4SearchedSkills);
		return top4SearchedSkills;
	}

	@GetMapping("/recentSkillList")
	public List<Skill> getRecentSkills() {
		LOGGER.info("start");
		List<Skill> skills = skillService.getRecent5Skills();
		LOGGER.debug("SkillController -> {}", skills);
		return skills;
	}




	@GetMapping("/gettop5tests")
	public List<Skill> getTopAccessedtests() {
		LOGGER.info("start");
		List<Skill> topAccessedtests = skillService.getTopAccessedtests();
		LOGGER.debug("top5 accessed tests ->", topAccessedtests);
		return topAccessedtests;

	}
}

