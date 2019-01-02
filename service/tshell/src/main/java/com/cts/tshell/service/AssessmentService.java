package com.cts.tshell.service;

import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.tshell.bean.Assessment;
import com.cts.tshell.repository.AssessmentRepository;

@Service
public class AssessmentService {

	private final static Logger LOGGER = LoggerFactory.getLogger(AssessmentService.class);
	@Autowired
	private AssessmentRepository assessmentRepository;
	
	@Transactional
	public List<Assessment> getTotalCountAssessment(){
		LOGGER.info("start");
		List<Assessment> totalAssessmentCount = assessmentRepository.totalAssessments();
		LOGGER.debug("totalAssessmentCount -> " + totalAssessmentCount);
		
		return totalAssessmentCount;
	}
}
