package com.cts.tshell.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cts.tshell.bean.Assessment;
import com.cts.tshell.bean.AssessmentQuestion;
import com.cts.tshell.bean.AssessmentQuestionOption;
import com.cts.tshell.bean.Option;
import com.cts.tshell.bean.User;
import com.cts.tshell.repository.AssessmentRepository;
import com.cts.tshell.repository.UserReposiory;

@Service
public class AssessmentService {

	public AssessmentRepository assessmentRepository;
	/*@Autowired
	public UserReposiory userRepository;*/
	@Autowired
	public void setAssessmentRepository(AssessmentRepository assessmentRepository) {
		this.assessmentRepository = assessmentRepository;
	}
	
	
	@Transactional
	public List<Assessment> getAssessmentsOfUserById(int userId){
		List<Assessment> assesments = assessmentRepository.findUserHistory(userId);
//		for(AssessmentQuestion option:assesmentquestion){
//			System.out.println("AssessmentQuestion :" );
//			System.out.println(option);
//			List<AssessmentQuestionOption> o = option.getAssessmentQuestionOption();
//			for(AssessmentQuestionOption op :o){
//				System.out.println("AssessmentQuestionOption :" );
//				System.out.println(op);
//				if(op.getAssessmentOption().isAnswer()==op.isSelected()){
//					option.setCorrect(true);
//				}else{
//					option.setCorrect(false);
//				};
//				
//			}
//		}
//		System.out.println(assesmentquestion);
		return assesments;
	}
}
