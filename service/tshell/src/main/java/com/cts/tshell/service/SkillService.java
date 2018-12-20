package com.cts.tshell.service;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.tshell.bean.Skill;
import com.cts.tshell.repository.SkillRepository;

@Service
public class SkillService {
	private static final Logger LOGGER = LoggerFactory.getLogger(SkillService.class);

	@Autowired
	private SkillRepository skillRepository;

	@Transactional
	public Skill gettingByName(String name) {
		LOGGER.info("start");
		LOGGER.debug("Skill details are {}", name);
		LOGGER.info("end");
		return skillRepository.findByName(name);

	}

	@Transactional
	public Skill gettingById(int id) {
		LOGGER.info("start");
		LOGGER.debug("Skill details are {}", id);
		LOGGER.info("end");
		return skillRepository.findById(id);

	}

	@Transactional
	public void save(Skill skill) {
		LOGGER.info("start");

		if (skill.getActive().equals("True")) {
			skill.setActive("False");
		} else {
			skill.setActive("True");
		}

		skillRepository.save(skill);
		LOGGER.debug("Skill details are {}", skill);
		LOGGER.info("end");
	}

}
