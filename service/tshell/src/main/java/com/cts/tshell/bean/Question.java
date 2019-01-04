package com.cts.tshell.bean;

import java.util.Date;
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

@Entity
@Table(name = "question")
// @JsonIdentityInfo(generator=ObjectIdGenerators.IntSequenceGenerator.class,
// property="@id")
@NamedQueries({
		@NamedQuery(name = "Question.fetchAllQuestionDetails", query = "select distinct q from Question q "
				+ "left join fetch q.questionDifficultyLevel " + "left join fetch q.questionAnswerType "
				+ " left join fetch q.createdUser " + "where q.id=:questionId"),
		
		@NamedQuery(name = "Question.fetchQuestionDetails", query = "select distinct q from Question q "
				+ "left join fetch q.questionDifficultyLevel " + "left join fetch q.questionAnswerType "
				+ " left join fetch q.createdUser " + "left join fetch q.optionList " + "where q.id=:questionId"),
		
		@NamedQuery(name = "Question.findQuestionWithOptions", query = "select q from Question q join q.optionList o where q.id=:questionId")
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

	@Column(name = "qu_created_date")
	private Date createdDate;

	@Column(name = "qu_reviewed_date")
	private Date reviewedDate;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "qu_qd_id")
	@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	private QuestionDifficultyLevel questionDifficultyLevel;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "qu_qt_id")
	// @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private QuestionAnswerType questionAnswerType;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "qu_created_by_us_id")
	private User createdUser;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "qu_reviewed_by_us_id")
	@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	private User reviewedUser;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "question")
	private List<Option> optionList;

	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "topic_question", joinColumns = { @JoinColumn(name = "tq_qu_id") }, inverseJoinColumns = {
			@JoinColumn(name = "tq_tp_id") })
	private Set<Topic> topicSet;

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

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getReviewedDate() {
		return reviewedDate;
	}

	public void setReviewedDate(Date reviewedDate) {
		this.reviewedDate = reviewedDate;
	}

	public User getReviewedUser() {
		return reviewedUser;
	}

	public void setReviewedUser(User reviewedUser) {
		this.reviewedUser = reviewedUser;
	}

	public List<Option> getOptionList() {
		return optionList;
	}

	public void setOptionList(List<Option> optionList) {
		this.optionList = optionList;
	}

	public Set<Topic> getTopicList() {
		return topicSet;
	}

	public void setTopicList(Set<Topic> topicSet) {
		this.topicSet = topicSet;
	}

	@Override
	public String toString() {
		return "Question [id=" + id + ", question=" + question + ", status=" + status + ", createdDate=" + createdDate
				+ ", reviewedDate=" + reviewedDate + ", questionDifficultyLevel=" + questionDifficultyLevel
				+ ", questionAnswerType=" + questionAnswerType + ", createdUser=" + createdUser + ", reviewedUser="
				+ reviewedUser + ", optionList=" + optionList + ",topicSet="+ topicSet +"]";
	}
	
	

}
