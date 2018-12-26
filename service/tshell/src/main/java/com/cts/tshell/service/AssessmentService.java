package com.cts.tshell.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cts.tshell.bean.Assessment;
import com.cts.tshell.repository.AssessmentRepository;

@Service
public class AssessmentService {

	public AssessmentRepository assessmentRepository;

	@Autowired
	public void setAssessmentRepository(AssessmentRepository assessmentRepository) {
		this.assessmentRepository = assessmentRepository;
	}
	
	@Transactional
	public List<Assessment> getUserId(int employeeId){
		return assessmentRepository.findUserHistory(employeeId);
	}
}
