package com.cts.tshell.service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.cts.tshell.bean.ReferenceSkill;
import com.cts.tshell.bean.Skill;
import com.cts.tshell.repository.ReferenceSkillRepository;
import com.cts.tshell.repository.SkillRepository;

/**
 * A condition evaluation report message that can logged or printed.
 * @author Adil Ansari, 729745
 * @author Saikat Singh Mahapatra, 729710
 * @since 1.0.0
 */
@Service
public class SkillService {

	private static final Logger LOGGER = LoggerFactory.getLogger(SkillService.class);

	@Autowired
	private SkillRepository skillRepository;

	@Autowired
	private ReferenceSkillRepository refernceSkillRepository;

	public Date getCurrentTimeUsingCalendar() {
		Calendar cal = Calendar.getInstance();
		LOGGER.debug("CAL", cal);
		cal.add(Calendar.DAY_OF_YEAR, -30);
		Date date = cal.getTime();
		return date;
	}

	@Transactional
	public List<Skill> getTop4Skills() {
		LOGGER.info("Initialising getTop4Skills()");
		Page<Skill> topSearchedSkills = skillRepository.findBySkillTop4(PageRequest.of(0, 4));
		LOGGER.info("Top4Skills fetched {}", topSearchedSkills.getContent());
		return topSearchedSkills.getContent();
	}

	@Transactional
	public List<Skill> getSkills() {
		LOGGER.info("Initialising getSkills()");
		List<Skill> allSkills = skillRepository.findAll();
		LOGGER.info("Skills fetched from getSkills() {}", allSkills);
		return allSkills;
	}

	@Transactional
	public Skill getSkillById(int skillId) {
		LOGGER.info("Initialising getSkillById() with ID : {}", skillId);
		Skill result = skillRepository.findById(skillId);
		LOGGER.info("Skill for id: {} is fetched : {}", skillId, result);
		return result;
	}

	@Transactional
	public Skill getSkillByName(String skillname) {
		LOGGER.info("Initialising getSkillByName() with Skill Name: {}", skillname);
		Skill result = skillRepository.findByName(skillname);
		LOGGER.debug("Skill Fetched with Name {} is {}", skillname, result);
		return result;
	}

	@Transactional
	public void updateSkillSearch(Skill skill) {
		LOGGER.info("Initialising UpdateSkillSearch() for {} to update searchCount", skill.getName());
		LOGGER.debug("Updating {}'s SearchCount from {} to {}", skill.getName(), skill.getSearchCount(),
				skill.getSearchCount() + 1);
		skill.setSearchCount(skill.getSearchCount() + 1);
		LOGGER.info("skillCount Updated");
		skillRepository.save(skill);
	}

	@Transactional
	public void addOrUpdateSkill(Skill skill) {
		LOGGER.debug("Updating {}'s SearchCount from {} to {}", skill.getName());
		LOGGER.info("Skill Updated");
		LOGGER.debug("Updated Skill", skill);
		skillRepository.save(skill);
	}

	@Transactional
	public List<Skill> getRecent5Skills(Date date) {
		LOGGER.info("Initialising getRecent5Skills() with current Date {} ", date);
		List<Skill> recent5Skills = skillRepository.fetchRecentSkills(date);

		if (recent5Skills.size() >= 5) {
			LOGGER.debug("Filtering skills to limited Numbers \n" + recent5Skills);
			return recent5Skills.subList(0, 5);
		}

		LOGGER.debug("Skill are fetched {}", recent5Skills);
		return recent5Skills;
	}

	@Transactional
	public List<Skill> getTopAccessedtests() {
		LOGGER.info("Initialising getTopAccessedTests()");
		Page<Skill> topAccessedtests = skillRepository.findBySkillTop5(PageRequest.of(0, 5));
		LOGGER.info("TopAccessed tests are fetched {}", topAccessedtests.getContent());
		return topAccessedtests.getContent();
	}

	@Transactional
	public long getSkillCount() {
		LOGGER.info("Initialising getSkillCount()");
		long skillCount = skillRepository.totalSkillCount();
		LOGGER.debug("Skills Numbers are fetched {}", skillCount);
		return skillCount;
	}

	public List<ReferenceSkill> getRefernceSkill(int skillId) {
		LOGGER.info("Initialising getReferenceSkill() with ID: {}", skillId);
		List<ReferenceSkill> result = refernceSkillRepository.findBySkillId(skillId);
		LOGGER.info("List of Reference Skills are fetched {}", result);
		return result;
	}

	@Transactional
	public void addReferenceSkill(ReferenceSkill referenceSkill) {
		LOGGER.info("Initialising addReferenceSkill() with skill: {}", referenceSkill.getReferenceSkill().getName());
		refernceSkillRepository.save(referenceSkill);
		LOGGER.info("ReferenceSkill Updated");
	}

	public void deleteReferenceSkill(int refskillId) {
		LOGGER.info("Initialising deleteReferenceSkill() with ReferenceSkill ID: {}", refskillId);
		ReferenceSkill referenceSkill = new ReferenceSkill();
		referenceSkill.setId(refskillId);
		LOGGER.info("Reference Skill fetched!");
		refernceSkillRepository.delete(referenceSkill);
		LOGGER.info("Reference Skill deleted!");
	}

	public List<Skill> getSkillByKeys(String pressedKeys) {
		LOGGER.info("Initialising getSkillByKeys() with key pressed by user: {}", pressedKeys);
		List<Skill> result = skillRepository.findSkillNames(pressedKeys);
		LOGGER.info("Skill matched with \"{}\" are fetched {}", pressedKeys, result);
		return result;
	}
}
