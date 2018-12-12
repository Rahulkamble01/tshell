package com.cts.tshell.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.tshell.bean.Skill;
import com.cts.tshell.repository.SkillRepository;

@Service
public class SkillService {

	private SkillRepository skillRepository;
	
	@Autowired
	public void setSkillRepository(SkillRepository skillRepository) {
		this.skillRepository = skillRepository;
	}
	
	@Transactional
	public List<Skill> getSkills(){
		return skillRepository.findById();
	}
}
