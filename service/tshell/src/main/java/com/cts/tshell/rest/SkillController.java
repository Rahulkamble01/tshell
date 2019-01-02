package com.cts.tshell.rest;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.NeoSkill;
import com.cts.tshell.bean.Skill;
import com.cts.tshell.bean.Topic;
import com.cts.tshell.converter.SkillToNeoSkill;
import com.cts.tshell.service.SkillService;
import com.cts.tshell.service.TopicService;

@RestController
@RequestMapping("/")
public class SkillController {
	private static final Logger LOGGER = LoggerFactory.getLogger(SkillController.class);
	private SkillService skillService;
	private TopicService topicService;
	private SkillToNeoSkill skillToNeoSkill;

	@Autowired
	public void setSkillToNeoSkill(SkillToNeoSkill skillToNeoSkill) {
		this.skillToNeoSkill = skillToNeoSkill;
	}

	@Autowired
	public void setSkillService(SkillService skillService) {
		this.skillService = skillService;
	}

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

	@RequestMapping(value = "/graph", method = RequestMethod.GET)
	public Map<String, Object> graph(@RequestParam(value = "limit", required = false) Integer limit) {
		System.out.println("Indsude+++++++++" + limit);
		if (limit == null) {
			limit = 100;
		}
		System.out.println("Indsude+++++++++++" + limit);
		// System.out.println(skillService.graph(limit));
		return skillService.graph(limit);
	}

	@RequestMapping(value = "/graph/{skillName}", method = RequestMethod.GET)
	public List<NeoSkill> graph(@PathVariable String skillName) {
		System.out.println("Indsude+++++++++++ {}" + skillName);
		// System.out.println(skillService.graph(limit));
		return skillService.graph(skillName);
	}

	@RequestMapping(value = "/updateSkillSearch", method = RequestMethod.POST)
	public void updateSkillSearch(@RequestBody Skill skill) {
		LOGGER.debug("Accessing Database to update search count of {} with {}", skill.getName(),
				skill.getSearchCount());
		LOGGER.info("Updating skill searchCount from {} to {} ", skill.getSearchCount(), skill.getSearchCount() + 1);
		skillService.updateSkillSearch(skill);
		LOGGER.debug("Existing from updateSearch Skill with skill \n{}", skill);
	}

	@RequestMapping(value = "/deleteTopic", method = RequestMethod.POST)
	public void deleteSkillTopic(@RequestBody String string) {
		LOGGER.debug("Initialising Topic deletion Process");
		String[] splited = string.split("\\s+");
		LOGGER.debug("Fetching Object of Skill Object of {}", splited[0]);
		Skill skill = new Skill();
		skill = skillService.getSkillById(Integer.parseInt(splited[1]));
		LOGGER.debug("Skill Object Fetched");
		LOGGER.debug("Initialising Topics of skill");

		for (Topic topics : skill.getTopics()) {
			if (topics.getName().equals(splited[0])) {
				LOGGER.debug("Deleting {}", topics);
				topicService.deleteTopic(topics);
				LOGGER.debug("{} Deleted", topics);
			}
		}
		LOGGER.debug("Exiting Topic deletion Process");
	}

	@RequestMapping(value = "/updateSkill", method = RequestMethod.POST)
	public int UpdateSkill(@RequestBody Skill skill) {
		LOGGER.info("starting insertneSkills");
		LOGGER.debug("Recived skill from Browser: " + skill);
		System.out.println("skillname" + skill.getName());
		int addStatus = 0;
		Skill checkSkill = skillService.getSkillByName(skill.getName());
		if (checkSkill == null) {
			List<Topic> topics = skill.getTopics();
			LOGGER.debug("Recived topics from Browser: " + topics);
			skillService.addOrUpdateSkill(skill);
			Skill skill2 = skillService.getSkillByName(skill.getName());
			LOGGER.debug("Recived skill from sevice: " + skill2);
			for (Topic topic : topics) {
				topic.setSkill(skill2);
				topicService.saveTopic(topic);
			}
			skill.setTopics(topics);
			LOGGER.info("ending Update Skill");

			// skillService.addOrUpdateNeoSkill(skillToNeoSkill.convert(skill2));
			// System.out.println("{}"+ skillToNeoSkill);
			addStatus = 2;
		} else {
			addStatus = 1;
		}
		return addStatus;
	}

	@PostMapping("/addskill")
	public int addOrUpdateSkill(@RequestBody Skill skill) {
		LOGGER.info("starting insertnewSkills");
		String skillName = skill.getName();
		Skill skill1 = skillService.getSkillByName(skillName);
		System.out.println("the skill we get isisisisisisisis : :" + skill1);
		int addStatus;
		if (skill1 != null) {
			addStatus = 1;
		} else {
			List<Topic> topics = skill.getTopics();
			LOGGER.debug("Recived skill from Browser: " + skill);
			LOGGER.debug("Recived topics from Browser: " + topics);
			skillService.addOrUpdateSkill(skill);
			Skill skill2 = skillService.getSkillByName(skill.getName());
			LOGGER.debug("Recived skill from sevice: " + skill2);
			for (Topic topic : topics) {
				topic.setSkill(skill2);
				topicService.saveTopic(topic);
			}
			skill.setTopics(topics);
			addStatus = 2;
			LOGGER.info("ending inserting Skill");
		}
		return addStatus;
	}

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
}
