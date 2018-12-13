package com.cts.tshell.service;

import java.util.List;
<<<<<<< HEAD

=======
>>>>>>> rel1

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

<<<<<<< HEAD

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

=======
>>>>>>> rel1
import com.cts.tshell.bean.Assessment;
import com.cts.tshell.repository.AssessmentRepository;

@Service
public class AssessmentService {
	
	@Autowired
	private AssessmentRepository assessmentRepository;
	
	public List<Assessment> getTop5PerformersBySkill(int skillId){

<<<<<<< HEAD
	
=======
>>>>>>> rel1

		List<Assessment> result=assessmentRepository.findTop5BySkill(skillId);
		return result.subList(0, 5);

<<<<<<< HEAD
=======


>>>>>>> rel1
	}
	@Autowired
	public List<Assessment> getHistoryByUser(int userId){
		return assessmentRepository.findByUser(userId);
	}
	
}
