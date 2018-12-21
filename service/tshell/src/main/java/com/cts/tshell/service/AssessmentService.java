package com.cts.tshell.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cts.tshell.bean.Assessment;
import com.cts.tshell.repository.AssessmentRepository;

@Service
public class AssessmentService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(AssessmentService.class);
	
	@Autowired
	private AssessmentRepository assessmentRepository;
	
	@Transactional
	public List<Assessment> findTop5AssessmentBasedSkill(int skillId){
		LOGGER.debug("SkillId : "+skillId);
		return assessmentRepository.findTop5BySkill(skillId);
	}

}
