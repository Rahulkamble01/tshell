package com.cts.tshell.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.cts.tshell.bean.Skill;
import com.cts.tshell.repository.SkillRepository;

@Service
public class SkillService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(SkillService.class);
	
	@Autowired
	private SkillRepository skillRepository;
	
	@Transactional
	public Skill findSkill(int id) {
		LOGGER.info("Start");
		Skill skill=skillRepository.findSkillById(id);
		LOGGER.debug("Skill : {}",skill);
		LOGGER.info("End");
		return skill;
	}

}
