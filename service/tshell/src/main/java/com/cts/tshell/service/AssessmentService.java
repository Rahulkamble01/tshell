package com.cts.tshell.service;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.tshell.bean.Assessment;
import com.cts.tshell.bean.Skill;
import com.cts.tshell.bean.User;
import com.cts.tshell.repository.AssessmentRepository;
import com.cts.tshell.repository.QuestionRepository;
import com.cts.tshell.repository.SkillRepository;
import com.cts.tshell.repository.TopicRepository;
import com.cts.tshell.repository.UserRepository;

@Service
public class AssessmentService {
	@Autowired
	private SkillRepository skillRepository;
	
	@Autowired 
	private TopicRepository topicRepository;
	
	@Autowired 
	private QuestionRepository questionRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired 
	private AssessmentRepository assessmentRepository;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(AssessmentService.class);
	
	public String startAssessment(Assessment assessment){
		LOGGER.info("START : startAssesment() Service  of AssessmentService");
		LOGGER.debug("Assesment Object : ", assessment);
		Skill skill = skillRepository.findSkillById(assessment.getSkillId());
		LOGGER.debug("Skill : ", skill);
		User user = userRepository.findUserByEmployeeId(assessment.getUserId());
		LOGGER.debug("User : ", user);
		assessment.setSkill(skill);
		assessment.setUser(user);
		assessmentRepository.save(assessment);
		LOGGER.debug(" Latest Inserted Id: "+assessment.getId());
		LOGGER.info("End : START : startAssesment() of AssessmentController");
		LOGGER.info("End : startAssesment() Service  of AssessmentService");
		//return assessmentRepository.findAssessmentById(assessment.getId());
		 return "{\"id\":"+assessment.getId()+
				 ",\"skillName\":\""+assessment.getSkill().getName()+"\""+
				 "}";
	}
	

}
