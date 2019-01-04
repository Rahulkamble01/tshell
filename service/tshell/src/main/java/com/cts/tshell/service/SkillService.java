package com.cts.tshell.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
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
	public List<Skill> getRecent5Skills(Date date) {
		LOGGER.info("start");
		List<Skill> recent5Skills = skillRepository.fetchRecentSkills(date);
		LOGGER.debug("recentSkills -> " + recent5Skills);
		if (recent5Skills.size() >= 5) {
			LOGGER.debug("size of json data ->" + recent5Skills);
			return recent5Skills.subList(0, 5);
		}
		return recent5Skills;
	}
	
	public Date getCurrentTimeUsingCalendar() {
	    Calendar cal = Calendar.getInstance();
	    LOGGER.debug("CAL",cal);
	    cal.add(Calendar.DAY_OF_YEAR,-30);
	    Date date=cal.getTime();
		return date;
	}

}
