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

	private final static Logger LOGGER = LoggerFactory.getLogger(SkillService.class);

	
	private SkillRepository skillRepository;

	@Autowired
	public void setSkillRepository(SkillRepository skillRepository) {
		this.skillRepository = skillRepository;
	}


	public List<Skill> getTopAccessedtests() {
		LOGGER.info("start ");
		Page<Skill> topAccessedtests = skillRepository.findBySkillTop5( PageRequest.of(0, 5));
		return topAccessedtests.getContent();
	}

}