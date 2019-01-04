package com.cts.tshell.bean;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name = "question")

@NamedQueries({
	@NamedQuery(name = "Question.fetchQuestionById", 
				query = "select distinct q from Question q " +
						"left join fetch q.questionDifficultyLevel t " + 
						"left join fetch q.questionAnswerType t " + 
						"left join fetch q.optionList t " + 
						"left join fetch q.topicList t " + 
						"where q.status ='Approved' " + 
						"and q.id = :questionId "+ 
						" "),
	}) 

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
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private QuestionDifficultyLevel questionDifficultyLevel;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "qu_qt_id")
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private QuestionAnswerType questionAnswerType;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "qu_created_by_us_id")
	@JsonView(Views.Internal.class)
	private User createdUser;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "question")
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private List<Option> optionList;
	
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable( name = "topic_question", 
				joinColumns = { @JoinColumn(name = "tq_qu_id")},
				inverseJoinColumns = { @JoinColumn(name = "tq_tp_id")})
	private Set<Topic> topicList; 

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

	public List<Option> getOptionList() {
		return optionList;
	}

	public void setOptionList(List<Option> optionList) {
		this.optionList = optionList;
	}

	public Set<Topic> getTopicList() {
		return topicList;
	}

	public void setTopicList(Set<Topic> topicList) {
		this.topicList = topicList;
	}

}
