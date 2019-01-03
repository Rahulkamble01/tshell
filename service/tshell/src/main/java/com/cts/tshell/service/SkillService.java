package com.cts.tshell.service;

import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.cts.tshell.bean.Skill;
import com.cts.tshell.repository.SkillRepository;

@Service
public class SkillService {

	private static final Logger LOGGER = LoggerFactory.getLogger(SkillService.class);

/*
	public List<Skill> getTop4Skills() {
		LOGGER.info("start ");
		List<Skill> topSearchedSkills = skillRepository.fetchTopSearchedSkills();
		
		 * if(topSearchedSkills.size()>4){
		 * LOGGER.debug("top Searched Skills ->",topSearchedSkills); return
		 * topSearchedSkills.subList(0, 4); } else{ return topSearchedSkills; }
		 
		return topSearchedSkills;*/

	

	


	
	private SkillRepository skillRepository;


	@Autowired
	public void setSkillRepository(SkillRepository skillRepository) {
		this.skillRepository = skillRepository;
	}

	@Transactional
	public List<Skill> getTop4Skills() {
		LOGGER.info("start ");
		Page<Skill> topSearchedSkills = skillRepository.findBySkillTop4( PageRequest.of(0, 4));
		return topSearchedSkills.getContent();
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


	public List<Skill> getTopAccessedtests() {
		LOGGER.info("start ");
		Page<Skill> topAccessedtests = skillRepository.findBySkillTop5( PageRequest.of(0, 5));
		return topAccessedtests.getContent();
	}

}

