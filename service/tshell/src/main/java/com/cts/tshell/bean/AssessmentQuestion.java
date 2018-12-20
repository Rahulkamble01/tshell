package com.cts.tshell.bean;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="assessment_question")
public class AssessmentQuestion {	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="aq_id")
	private int id;
	
	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinColumn(name="aq_as_id")
	private Assessment assessment;
	
	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinColumn(name="aq_qu_id")
	private Question question;
	
	@OneToMany(fetch=FetchType.LAZY,mappedBy="assessmentQuestion")
	private List<AssessmentQuestionOption> assessmentQuestionOption;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Assessment getAssessment() {
		return assessment;
	}

	public void setAssessment(Assessment assessment) {
		this.assessment = assessment;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	public List<AssessmentQuestionOption> getAssessmentQuestionOption() {
		return assessmentQuestionOption;
	}

	public void setAssessmentQuestionOption(List<AssessmentQuestionOption> assessmentQuestionOption) {
		this.assessmentQuestionOption = assessmentQuestionOption;
	}
}
