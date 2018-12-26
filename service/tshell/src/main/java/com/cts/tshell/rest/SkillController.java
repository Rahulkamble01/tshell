package com.cts.tshell.rest;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Skill;
import com.cts.tshell.bean.Topic;
import com.cts.tshell.converter.NeoSkillToSkill;
import com.cts.tshell.service.SkillService;
import com.cts.tshell.service.TopicService;

@RestController
@RequestMapping("/")
public class SkillController {
	private static final Logger LOGGER = LoggerFactory.getLogger(SkillController.class);
	private SkillService skillService;
	private TopicService topicService;
	private NeoSkillToSkill neoSkillToSkill;
	
	@Autowired
	public void setTopicService(TopicService topicService) {
		this.topicService = topicService;
	}

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
	
	@RequestMapping(value = "/graph", method = RequestMethod.GET)
	public Map<String, Object> graph(@RequestParam(value = "limit", required = false) Integer limit) {
		System.out.println("Indsude+++++++++"+limit);
		if(limit == null){
			limit = 100;
		}
		System.out.println("Indsude+++++++++++"+limit);
//		System.out.println(skillService.graph(limit));
		return skillService.graph(limit);
	}
	
	@RequestMapping(value = "/updateSkillSearch", method = RequestMethod.POST)
	public void updateSkillSearch(@RequestBody Skill skill){
		LOGGER.debug("Accessing Database to update search count of {} with {}", skill.getName(), skill.getSearchCount());
		LOGGER.info("Updating skill searchCount from {} to {} ", skill.getSearchCount(), skill.getSearchCount()+1);
		skillService.updateSkillSearch(skill);
		LOGGER.debug("Existing from updateSearch Skill with skill \n{}", skill);
	}
	
	@RequestMapping(value = "/addSkill", method = RequestMethod.POST)
	public void UpdateSkill(@RequestBody Skill skill) {
		LOGGER.info("starting insertneSkills" );
		List<Topic> topics = skill.getTopics();
		LOGGER.debug("Recived skill from Browser: "+skill );
		LOGGER.debug("Recived topics from Browser: "+topics );
		skillService.updateSkill(skill);
		Skill skill2 = skillService.getSkillByName(skill.getName());
		LOGGER.debug("Recived skill from sevice: "+skill2 );
		for(Topic topic:topics){
			topic.setSkill(skill2);
			topicService.saveTopic(topic);
		}
		skill.setTopics(topics);
		LOGGER.info("ending inserting Skill" );
	}
}
