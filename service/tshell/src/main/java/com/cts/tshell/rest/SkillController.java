package com.cts.tshell.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Skill;
import com.cts.tshell.bean.Topic;
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
	
	
	@PostMapping("/addskill")
	public void insertPost(@RequestBody Skill skill) {
	/*	System.out.println(skill);
		int topicid=skill.getTopics().getId();	
		Topic topic = skillService.getTopic(topicid);
		System.out.println(topic);
		skill.setTopic(topic);
		LOGGER.info("starting" );*/
		skillService.saveSkill(skill);
		LOGGER.debug("post details are" + skill);
		LOGGER.info("end" );
		
		
	}
	
	
}
