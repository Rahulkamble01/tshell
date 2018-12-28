package com.cts.tshell.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cts.tshell.bean.Assessment;
import com.cts.tshell.bean.AssessmentQuestion;
import com.cts.tshell.bean.AssessmentQuestionOption;
import com.cts.tshell.bean.Option;
import com.cts.tshell.bean.Skill;
import com.cts.tshell.bean.User;
import com.cts.tshell.repository.AssessmentQuestionOptionRepository;
import com.cts.tshell.repository.AssessmentQuestionRepository;
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

	@Autowired
	private AssessmentQuestionRepository assessmentQuestionRepository;

	@Autowired
	private AssessmentQuestionOptionRepository assessmentQuestionOptionRepository;

	private static final Logger LOGGER = LoggerFactory.getLogger(AssessmentService.class);

	public String startAssessment(Assessment assessment) {
		LOGGER.info("START : startAssesment() Service  of AssessmentService");
		LOGGER.debug("Assesment Object : ", assessment);
		Skill skill = skillRepository.findSkillById(assessment.getSkillId());
		LOGGER.debug("Skill : ", skill);
		User user = userRepository.findUserByEmployeeId(assessment.getUserId());
		LOGGER.debug("User : ", user);
		assessment.setSkill(skill);
		assessment.setUser(user);
		assessmentRepository.save(assessment);
		LOGGER.debug(" Latest Inserted Id: " + assessment.getId());
		LOGGER.info("End : START : startAssesment() of AssessmentController");
		LOGGER.info("End : startAssesment() Service  of AssessmentService");
		// return assessmentRepository.findAssessmentById(assessment.getId());
		return "{\"id\":" + assessment.getId() + ",\"skillName\":\"" + assessment.getSkill().getName() + "\"" + "}";
	}

	@Transactional
	public void saveAssessmentResponse(AssessmentQuestion assessmentQuestion) {
		LOGGER.info("START : saveAssessmentResponse() Service  of AssessmentService");
		AssessmentQuestion a = new AssessmentQuestion();
		LOGGER.debug("AssessmentQuestion Object : ", assessmentQuestion);
		a.setQuestion(assessmentQuestion.getQuestion());
		LOGGER.debug("Setting setQuestion Object : ", assessmentQuestion);
		a.setAssessmentQuestionOption(assessmentQuestion.getAssessmentQuestionOption());
		System.out.println(assessmentQuestion.getAssessment());
		Assessment as = assessmentRepository.findAssessmentById(assessmentQuestion.getAssessment().getId());
		a.setAssessment(as);
		a.setCorrect(assessmentQuestion.isCorrect());
		assessmentQuestionRepository.save(a);

		System.out.println("Starting AssessmentQuestionOption ");

//		 opt.setAssessmentQuestion(a);
		for (Option option : a.getQuestion().getOptions()) {
			AssessmentQuestionOption opt = new AssessmentQuestionOption();
			opt.setAssessmentQuestion(a);
			opt.setAssessmentOption(option);
			opt.setSelected(option.isSelected());
			System.out.println("Starting save ");
			assessmentQuestionOptionRepository.save(opt);
		}

//		 for (AssessmentQuestionOption aqoption : assessmentQuestion.getAssessmentQuestionOption()) {
////		 AssessmentQuestionOption opt = new AssessmentQuestionOption();
////		 opt.setAssessmentQuestion(aqoption.getAssessmentQuestion());
////		 opt.setAssessmentOption(aqoption.getAssessmentOption());
////		 opt.setSelected(aqoption.isSelected());
//		 assessmentQuestionOptionRepository.save(opt);
//		 }

	}

	@Transactional
	public void saveResponse(AssessmentQuestionOption assessmentQuestionOption) {

		AssessmentQuestionOption aqoption = new AssessmentQuestionOption();
		// AssessmentQuestion a = new AssessmentQuestion();
		aqoption.setAssessmentQuestion(assessmentQuestionOption.getAssessmentQuestion());
		aqoption.setAssessmentOption(assessmentQuestionOption.getAssessmentOption());
		aqoption.setSelected(assessmentQuestionOption.isSelected());
		assessmentQuestionOptionRepository.save(aqoption);
	}

}
