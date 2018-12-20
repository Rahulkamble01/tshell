package com.cts.tshell.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.Skill;
import com.cts.tshell.service.SkillService;

@RestController
@RequestMapping("/skill")
public class SkillController {
	private static final Logger LOGGER = LoggerFactory.getLogger(SkillController.class);

	@Autowired
	private SkillService skillService;

	@GetMapping("/list/{name}")
	public Skill getSkillName(@PathVariable("name") String name) {
		LOGGER.info("start");
		LOGGER.debug("Skill details are {}", name);
		LOGGER.info("end");
		return skillService.gettingByName(name);
	}

	@PostMapping("/save")
	public ResponseEntity<Skill> changeSkillStatus(@RequestBody int id) {

		LOGGER.info("start");
		Skill skill = skillService.gettingById(id);
		skillService.save(skill);
		LOGGER.debug("Coupon details are" + skill);
		LOGGER.info("end");

		return new ResponseEntity<Skill>(skill, HttpStatus.OK);
	}
}
