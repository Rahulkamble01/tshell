package com.cts.tshell.service;

import java.util.List;

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
	private SkillRepository skillRepository;

	@Autowired
	public void setSkillRepository(SkillRepository skillRepository) {
		this.skillRepository = skillRepository;
	}

	@org.springframework.transaction.annotation.Transactional
	public List<Skill> getSkills() {
		LOGGER.info("Starting getSkill() inside SkillRepository");
		return (List<Skill>) skillRepository.findAll();
	}
	
	@Transactional
	public Skill getSkillByName(String skillname){
		
		LOGGER.info("Starting getSkillbyName() inside SkillService");
		LOGGER.debug("recived skillname from controller: "+skillname);
		return skillRepository.findByName(skillname);
	}

	@Transactional
	public void updateSkillSearch(Skill skill) {
		LOGGER.debug("Updating {}'s SearchCount from {} to {}", skill.getName(), skill.getSearchCount(), skill.getSearchCount()+1);
		skill.setSearchCount(skill.getSearchCount()+1);
		LOGGER.info("Skill Updated");
		LOGGER.debug("Updated Skill", skill);
		skillRepository.save(skill);
	}
	
	@Transactional
	public void updateSkill(Skill skill) {
		LOGGER.debug("Updating {}'s SearchCount from {} to {}", skill.getName());
		LOGGER.info("Skill Updated");
		LOGGER.debug("Updated Skill", skill);
		skillRepository.save(skill);
	}

}
