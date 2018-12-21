package com.cts.tshell.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Skill;
import com.cts.tshell.service.SkillService;

@RestController
@RequestMapping("/")
public class SkillController {
	private static final Logger LOGGER = LoggerFactory.getLogger(SkillController.class);
	private SkillService skillService;

	@Autowired
	public void setSkillService(SkillService skillService) {
		this.skillService = skillService;
	}

	@RequestMapping(value = "/skills", method = RequestMethod.GET)
	public List<Skill> getAllSkills() {
		LOGGER.debug("Fetching All Skills from database");
		LOGGER.info("All Skills Available" + skillService.getSkills());
		LOGGER.info("Returning with Skills");
		return skillService.getSkills();
	}
	
	@RequestMapping(value = "/updateSkillSearch", method = RequestMethod.POST)
	public void updateSkillSearch(@RequestBody Skill skill){
		LOGGER.debug("Accessing Database to update search count of {} with {}", skill.getName(), skill.getSearchCount());
		LOGGER.info("Updating skill searchCount from {} to {} ", skill.getSearchCount(), skill.getSearchCount()+1);
		skillService.updateSkillSearch(skill);
		LOGGER.debug("Existing from updateSearch Skill with skill \n{}", skill);
	}
}
