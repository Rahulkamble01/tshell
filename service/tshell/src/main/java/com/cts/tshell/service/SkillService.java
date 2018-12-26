package com.cts.tshell.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.cts.tshell.bean.Skill;
import com.cts.tshell.repository.SkillRepository;

@Service
public class SkillService {
	private static final Logger LOGGER = LoggerFactory.getLogger(SkillService.class);
	@Autowired
	private SkillRepository skillRepository;
/*
	public List<Skill> getTop4Skills() {
		LOGGER.info("start ");
		List<Skill> topSearchedSkills = skillRepository.fetchTopSearchedSkills();
		
		 * if(topSearchedSkills.size()>4){
		 * LOGGER.debug("top Searched Skills ->",topSearchedSkills); return
		 * topSearchedSkills.subList(0, 4); } else{ return topSearchedSkills; }
		 
		return topSearchedSkills;*/

	

	public List<Skill> getTop4Skills() {
		LOGGER.info("start ");
		Page<Skill> topSearchedSkills = skillRepository.findBySkillTop4( PageRequest.of(0, 4));
		return topSearchedSkills.getContent();
	}
}
