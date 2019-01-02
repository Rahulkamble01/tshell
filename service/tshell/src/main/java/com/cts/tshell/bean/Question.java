package com.cts.tshell.bean;

import java.util.ArrayList;
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
import javax.persistence.Transient;

@Entity
@Table(name = "question")
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

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "question")
	private List<Option> optionList;

	@Transient
	private boolean empty;

	@Transient
	private boolean lengthExceeded;

	public boolean isEmpty() {
		return empty;
	}

	public void setEmpty(boolean empty) {
		this.empty = empty;
	}

	public boolean isLengthExceeded() {
		return lengthExceeded;
	}

	public void setLengthExceeded(boolean lengthExceeded) {
		this.lengthExceeded = lengthExceeded;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Question [id=");
		builder.append(id);
		builder.append(", question=");
		builder.append(question);
		builder.append(", status=");
		builder.append(status);
		builder.append(", questionDifficultyLevel=");
		builder.append(questionDifficultyLevel);
		builder.append(", questionAnswerType=");
		builder.append(questionAnswerType);
		builder.append(", createdUser=");
		builder.append(createdUser);
		builder.append(", optionList=");
		builder.append(optionList);
		builder.append(", empty=");
		builder.append(empty);
		builder.append(", lengthExceeded=");
		builder.append(lengthExceeded);
		builder.append("]");
		return builder.toString();
	}

	public Question(String[] csvContent) {
		List<Option> options = new ArrayList<Option>(5);
		this.question = csvContent[1];
		options.add(new Option(csvContent[2], csvContent[3]));
		options.add(new Option(csvContent[4], csvContent[5]));
		options.add(new Option(csvContent[6], csvContent[7]));
		options.add(new Option(csvContent[8], csvContent[9]));
		options.add(new Option(csvContent[10], csvContent[11]));
		this.optionList = options;
		if (csvContent[2].isEmpty()) {
			empty = true;
		} else {
			empty = false;
		}

		if (getQuestion().length() > 100) {
			lengthExceeded = true;
		} else {
			lengthExceeded = false;
		}
	}

	public List<Option> getOptionList() {
		return optionList;
	}

	public void setOptionList(List<Option> optionList) {
		this.optionList = optionList;
	}

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
