package com.cts.tshell.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="assessment_question")
public class AssessmentQuestion {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="aq_id")
	private int id;
	
	@Column(name="aq_as_id")
	private Assessment assessment;
	
	@Column(name="aq_qu_id")
	private Question question;

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

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("AssessmentQuestion [id=");
		builder.append(id);
		builder.append(", assessment=");
		builder.append(assessment);
		builder.append(", question=");
		builder.append(question);
		builder.append("]");
		return builder.toString();
	}
	
	

}
