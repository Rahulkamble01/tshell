package com.cts.tshell.bean;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
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

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "qu_created_by_us_id")
	private User createdUser;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "question")
	private List<Option> optionList;

	@Column(name = "qu_created_date")
	private Date createdDate;

	@Column(name = "qu_reviewed_date")
	private Date reviewedDate;

	public Date getReviewedDate() {
		return reviewedDate;
	}

	public void setReviewedDate(Date reviewedDate) {
		this.reviewedDate = reviewedDate;
	}

	@Transient
	private boolean empty;

	@Transient
	private boolean lengthExceeded;

	@Transient
	private String error;
	
	@Transient
	private String Topic;
	
	@Transient
	private boolean validTopic;

	public String getTopic() {
		return Topic;
	}

	public void setTopic(String topic) {
		Topic = topic;
	}

	public boolean isValidTopic() {
		return validTopic;
	}

	public void setValidTopic(boolean validTopic) {
		this.validTopic = validTopic;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

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

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Question() {
		super();
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
		builder.append(", createdDate=");
		builder.append(createdDate);
		builder.append(", reviewedDate=");
		builder.append(reviewedDate);
		builder.append(", empty=");
		builder.append(empty);
		builder.append(", lengthExceeded=");
		builder.append(lengthExceeded);
		builder.append(", error=");
		builder.append(error);
		builder.append(", Topic=");
		builder.append(Topic);
		builder.append(", validTopic=");
		builder.append(validTopic);
		builder.append("]");
		return builder.toString();
	}

	public Question(String[] csvContent) {
		Topic topic=new Topic(csvContent[0]);
		List<Option> options = new ArrayList<Option>();
		this.question = csvContent[1].trim();
		if (!csvContent[2].equals("") || !csvContent[3].equals("")) {
			options.add(new Option(csvContent[2].trim(), csvContent[3].trim()));
		}
		if (!csvContent[4].equals("") || !csvContent[5].equals("")) {
			options.add(new Option(csvContent[4].trim(), csvContent[5].trim()));
		}
		if (!csvContent[6].equals("") || !csvContent[7].equals("")) {

			options.add(new Option(csvContent[6].trim(), csvContent[7].trim()));
		}
		if (!csvContent[8].equals("") || !csvContent[9].equals("")) {
			options.add(new Option(csvContent[8].trim(), csvContent[9].trim()));
		}
		if (!csvContent[10].equals("") || !csvContent[11].equals("")) {
			options.add(new Option(csvContent[10].trim(), csvContent[11].trim()));
		}
		this.optionList = options;
		int correctAnswerCount = 0;
		int invalidinput = 0;
		int count = 0;
		int invalidAnswerCount = 0;

		Set<String> optionsSet = new HashSet<String>();
		for (Option option : optionList) {
			optionsSet.add(option.getDescription().toLowerCase());
			if (option.isAnswer()) {
				correctAnswerCount += 1;
			}
			if ((option.getDescription().equals("") && !option.isInvalidAnswerFormat())) {
				invalidinput += 1;
			}
			if (!option.getDescription().equals("") && ((option.getDescription().toLowerCase().equals("true")
					|| option.getDescription().toLowerCase().equals("false"))
					|| (option.getDescription().toLowerCase().equals("yes")
							|| option.getDescription().toLowerCase().equals("no"))
					|| (option.getDescription().toLowerCase().equals("active")
							|| option.getDescription().toLowerCase().equals("inactive")))) {
				if (option.isAnswer()) {
					count += 1;
				}
			}
			if (!option.getDescription().equals("") && option.isInvalidAnswerFormat()) {
				invalidAnswerCount += 1;
			}
			if (option.isLengthExceeded()) {
				setError("option description length exceeded");
			}

		}

		if (correctAnswerCount < 1) {
			setError("At least one option should be selected as answer");
		}

		else if (count == 2) {
			setError("All option can not be true");
		} else if (invalidinput > 0) {
			setError("Option is missing  ");
		} else if (optionsSet.size() != getOptionList().size()) {
			setError("Multiple option can not have same value");
		} else if (invalidAnswerCount > 0) {
			setError("Answer is missing or in incorrect format ");
		}

		if (csvContent[2].isEmpty()) {
			empty = true;
		} else {
			empty = false;
		}

		if (getQuestion().length() > 500) {
			lengthExceeded = true;
			setError("question length exceeded");
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
