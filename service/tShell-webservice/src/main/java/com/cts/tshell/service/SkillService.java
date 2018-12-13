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

	/*
	 * @Transactional public Skill getSkillByName(String name) { return
	 * skillRepository.findByName(name); }
	 */
	@Transactional
	public Skill gettingByName(String name) {
		LOGGER.info("start");
		LOGGER.debug("Skill details are {}", name);
		LOGGER.info("end");
		return skillRepository.findByName(name);
		/*
		 * System.out.println(redeem); return redeem;
		 */
	}

	@Transactional
	public Skill gettingById(int id) {
		LOGGER.info("start");
		LOGGER.debug("Skill details are {}", id);
		LOGGER.info("end");
		return skillRepository.findById(id);
		/*
		 * System.out.println(redeem); return redeem;
		 */
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

	
	
	/*@Autowired
	public void setSkillRepository(SkillRepository skillRepository) {
		this.skillRepository = skillRepository;
	}
	
	@Transactional
	public List<Skill> getSkills(){
		return skillRepository.findById();
	}
*/

}
