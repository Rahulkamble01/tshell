package com.cts.tshell.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cts.tshell.bean.Skill;
import com.cts.tshell.repository.SkillRepository;

@Service
public class SkillService {
	
	@Autowired
	private SkillRepository skillRepository;	
	
}
