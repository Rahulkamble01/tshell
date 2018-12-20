package com.cts.tshell.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	
	

}
