package com.cts.tshell.bean;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "question")
@JsonIdentityInfo(generator=ObjectIdGenerators.IntSequenceGenerator.class, property="@id")
public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "qu_id")
	private int id;

	@Column(name = "qu_question")
	private String question;

	@Column(name = "qu_status")
	private String status;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "qu_qd_id")
	private QuestionDifficultyLevel questionDifficultyLevel;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "qu_qt_id")
	private QuestionAnswerType questionAnswerType;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "qu_created_by_us_id")
	private User createdUser;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public QuestionDifficultyLevel getQuestionDifficultyLevel() {
		return questionDifficultyLevel;
	}

	public void setQuestionDifficultyLevel(QuestionDifficultyLevel questionDifficultyLevel) {
		this.questionDifficultyLevel = questionDifficultyLevel;
	}

	public User getCreatedUser() {
		return createdUser;
	}

	public void setCreatedUser(User createdUser) {
		this.createdUser = createdUser;
	}

	public QuestionAnswerType getQuestionAnswerType() {
		return questionAnswerType;
	}

	public void setQuestionAnswerType(QuestionAnswerType questionAnswerType) {
		this.questionAnswerType = questionAnswerType;
	}

}
