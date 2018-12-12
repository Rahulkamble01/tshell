package com.cts.tshell.service;

import java.util.List;
<<<<<<< HEAD

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

=======
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
>>>>>>> ffc510c6f816d46d9d96b95fe168d669d46600c9
import com.cts.tshell.bean.Assessment;
import com.cts.tshell.repository.AssessmentRepository;

@Service
public class AssessmentService {
	
	@Autowired
	private AssessmentRepository assessmentRepository;
	
	public List<Assessment> getTop5PerformersBySkill(int skillId){
<<<<<<< HEAD
		return assessmentRepository.findTop5BySkill(skillId);
=======
		List<Assessment> result=assessmentRepository.findTop5BySkill(skillId);
		return result.subList(0, 5);
>>>>>>> ffc510c6f816d46d9d96b95fe168d669d46600c9
	}
	
}
