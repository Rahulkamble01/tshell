package com.cts.tshell.service;

import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.tshell.bean.Skill;
import com.cts.tshell.repository.SkillRepository;

@Service
public class SkillService {

	private final static Logger LOGGER = LoggerFactory.getLogger(SkillService.class);

	private SkillRepository skillRepository;

	@Autowired
	public void setSkillRepository(SkillRepository skillRepository) {
		this.skillRepository = skillRepository;
	}

	@Transactional
	public List<Skill> getRecent5Skills() {
		LOGGER.info("start");
		List<Skill> recent5Skills = skillRepository.fetchRecentSkills();
		LOGGER.debug("recent5Skills -> " + recent5Skills);
		if (recent5Skills.size() >= 5) {
			LOGGER.debug("size of json data ->" + recent5Skills);
			return recent5Skills.subList(0, 5);
		}
		return recent5Skills;

	}

}
