package com.cts.tshell.service;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

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
import com.cts.tshell.bean.TopicWiseScore;
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
		System.out.println(assessment.getSkill().getId());
		Skill skill = skillRepository.findSkillById(assessment.getSkill().getId());
		User user = userRepository.findUserByEmployeeId(assessment.getUser().getEmployeeId());
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
		int assessmentId = assessmentQuestion.getAssessment().getId();
		int questionId = assessmentQuestion.getQuestion().getId();
		LOGGER.debug("Assessment ID ", assessmentId + " Question Id : ", questionId);
		int[] assmentQuestionId = assessmentQuestionRepository.fetchAssesmentQuestionId(assessmentId, questionId);

		if (assmentQuestionId.length == 0) {
			AssessmentQuestion a = new AssessmentQuestion();
			a.setQuestion(assessmentQuestion.getQuestion());
			a.setAssessmentQuestionOption(assessmentQuestion.getAssessmentQuestionOption());
			Assessment as = assessmentRepository.findAssessmentById(assessmentQuestion.getAssessment().getId());
			a.setAssessment(as);
			a.setCorrect(assessmentQuestion.isCorrect());
			assessmentQuestionRepository.save(a);

			System.out.println("Starting AssessmentQuestionOption ");

			for (Option option : a.getQuestion().getOptions()) {
				AssessmentQuestionOption opt = new AssessmentQuestionOption();
				opt.setAssessmentQuestion(a);
				opt.setAssessmentOption(option);
				System.out.println(option.isResponse());
				opt.setSelected(option.isResponse());
				System.out.println("Starting save ");
				assessmentQuestionOptionRepository.save(opt);
			}

		} else {
			System.out.println("Inside else loop");
			int assessmentQuestionId = assmentQuestionId[0];
			AssessmentQuestion a = assessmentQuestionRepository.findAssessmentQuestionById(assessmentQuestionId);
			a.setQuestion(assessmentQuestion.getQuestion());

			for (Option option : a.getQuestion().getOptions()) {
				int assessmentQuestionOptionId = assessmentQuestionOptionRepository
						.fetchAssesmentQuestionOptionId(a.getId(), option.getId());
				System.out.println("AssessmentQOption Id : " + assessmentQuestionOptionId);
				int optionId = option.getId();
				boolean selected = option.isResponse();
				System.out.println("Starting save ");
				assessmentQuestionOptionRepository.saveAssesmentQuestionOption(assessmentQuestionId, optionId, selected,
						assessmentQuestionOptionId);
			}
		}
	}

	public void submitAssesment(Assessment assessment) {
		Assessment as = assessmentRepository.findAssessmentById(assessment.getId());
		as.setEndTime(assessment.getEndTime());
		assessmentRepository.save(as);
	}

	// To view the Assesment object json data for GETMapping
	/*
	 * public Assessment evaluateScore(int assessmentId) { Assessment assessment
	 * = assessmentRepository.fetchAssesmentDetailById(assessmentId); return
	 * assessment; }
	 */

	@Transactional
	public Assessment evaluateScore(int assessmentId) {
		LOGGER.info("START : evaluateScore() Service  of AssessmentService");
		Assessment assessment = assessmentRepository.fetchAssesmentDetailById(assessmentId);
		int score = 0;
		Set<AssessmentQuestion> assessmentQuestions = new LinkedHashSet<>(assessment.getAssessmentQuestions());
		for (AssessmentQuestion assessmentQuestion : assessmentQuestions) {
			LOGGER.info("Taking Assessment Question");
			int counter = 0;
			boolean answerStatus = false;
			System.out.println(assessmentQuestion.getQuestion().getTopicList().iterator().next().getName());
			int optionsSize = assessmentQuestion.getAssessmentQuestionOption().size();
			LOGGER.debug("The total no of options are : ", optionsSize);
			System.out.println(optionsSize);
			for (AssessmentQuestionOption assessmentQuestionOption : assessmentQuestion.getAssessmentQuestionOption()) {
				LOGGER.info("Taking AssessmentQuestionOption");
				if (assessmentQuestionOption.getAssessmentOption().isAnswer() == assessmentQuestionOption
						.isSelected()) {
					counter++;
				}
				if (counter == optionsSize) {
					score++;
					answerStatus = true;
				}
			}
			assessmentQuestion.setCorrect(answerStatus);
			LOGGER.info("Saving Answer Status for the Question");
			assessmentQuestionRepository.save(assessmentQuestion);
		}

		assessment.setScore(score);
		LOGGER.info("Saving Assessment Score");
		assessmentRepository.save(assessment);
		LOGGER.info("Score saved Successfully");
		return assessment;
	}

	public List<TopicWiseScore> getTopicWiseScore(int assessmentId){
		return assessmentRepository.getTopicWiseQuestionCount(assessmentId);
	}
}
