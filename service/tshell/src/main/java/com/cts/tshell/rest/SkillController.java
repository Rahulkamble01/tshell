package com.cts.tshell.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cts.tshell.bean.Skill;
import com.cts.tshell.bean.Views;
import com.cts.tshell.service.SkillService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/rest/skill/")
public class SkillController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(SkillController.class);
	
	@Autowired
	private SkillService skillService;
	
	@GetMapping("/getSkill/{skillId}")
	public String getSkill(@PathVariable("skillId")int id) throws JsonProcessingException {
		LOGGER.info("Start");
		LOGGER.debug("Skill Id:"+id);
		Skill skill = skillService.findSkill(id);		
		LOGGER.debug("Skill Object: {}",skill);
		ObjectMapper mapper = new ObjectMapper();
		String result=mapper.writerWithView(Views.Public.class).writeValueAsString(skill);
		LOGGER.info("End");
		return result;		
	}
	
}
