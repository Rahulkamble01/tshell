package com.cts.tshell.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cts.tshell.bean.Assessment;
import com.cts.tshell.repository.AssessmentRepository;

@Service
public class AssessmentService {
	
	@Autowired
	private AssessmentRepository assessmentRepository;
	
	public List<Assessment> getTop5PerformersBySkill(int skillId){
		List<Assessment> result=assessmentRepository.findTop5BySkill(skillId);
		return result.subList(0, 5);
	}
	
}
