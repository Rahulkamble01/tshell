package com.cts.tshell.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Skill;
import com.cts.tshell.bean.Topic;
import com.cts.tshell.service.SkillService;
import com.cts.tshell.service.TopicService;

@RestController
@RequestMapping("/")
public class SkillController {
	private static final Logger LOGGER = LoggerFactory.getLogger(SkillController.class);
	private SkillService skillService;

	@Autowired
	public void setSkillService(SkillService skillService) {
		this.skillService = skillService;
	}
	private TopicService topicService;

	@Autowired
	public void setTopicService(TopicService topicService) {
		this.topicService = topicService;
	}

	@RequestMapping(value = "/skills", method = RequestMethod.GET)
	public List<Skill> getAllSkills() {
		LOGGER.debug("Fetching All Skills from database");
		LOGGER.info("All Skills Available" + skillService.getSkills());
		LOGGER.info("Returning with Skills");
		return skillService.getSkills();
	}
	
	
	@PostMapping("/addskill")
	public int insertnewSkill(@RequestBody Skill skill) {
		
		LOGGER.info("starting insertnewSkills" );
		
		String skillName = skill.getName();
		
		Skill skill1=skillService.getSkillByName(skillName);
		System.out.println("the skill we get isisisisisisisis : :"+skill1);
		int addStatus;
		
		
		if(skill1!=null){
			addStatus=1;
		}
		else{
			List<Topic> topics = skill.getTopics();
			LOGGER.debug("Recived skill from Browser: "+skill );
			LOGGER.debug("Recived topics from Browser: "+topics );
			
			skillService.saveSkill(skill);
			
			Skill skill2 = skillService.getSkillByName(skill.getName());
			
			LOGGER.debug("Recived skill from sevice: "+skill2 );

			for(Topic topic:topics){
				topic.setSkill(skill2);
				topicService.saveTopic(topic);
			}
			
			skill.setTopics(topics);
		
			addStatus=2;
			LOGGER.info("ending inserting Skill" );
		
		}
		
		return addStatus;	
	}
	
	
}
