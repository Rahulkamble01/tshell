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
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "`option`")
public class Option {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "op_id")
	private int id;

	@Column(name = "op_description")
	private String description;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "op_qu_id")
	private Question question;

	@Column(name = "op_is_correct")
	private boolean answer;

	@Transient
	private boolean invalidAnswerFormat;

	@Transient
	private boolean lengthExceeded;

	public boolean isInvalidAnswerFormat() {
		return invalidAnswerFormat;
	}

	public void setInvalidAnswerFormat(boolean invalidAnswerFormat) {
		this.invalidAnswerFormat = invalidAnswerFormat;
	}

	public boolean isLengthExceeded() {
		return lengthExceeded;
	}

	public void setLengthExceeded(boolean lengthExceeded) {
		this.lengthExceeded = lengthExceeded;
	}

	public Option(String description, String answer) {
		super();
		this.description = description;
		if (getDescription().length() > 200) {
			lengthExceeded = true;
		} else {
			lengthExceeded = false;
		}
		if (answer.equalsIgnoreCase("y")) {
			this.answer = true;
			invalidAnswerFormat = false;
		} else if (answer.equalsIgnoreCase("n")) {
			this.answer = false;
			invalidAnswerFormat = false;
		} else {
			invalidAnswerFormat = true;
		}
	}

	@Override
	public String toString() {
		return "Option [id=" + id + ", description=" + description + ", question=" + question + ", answer=" + answer
				+ ", invalidAnswerFormat=" + invalidAnswerFormat + ", lengthExceeded=" + lengthExceeded + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	public boolean isAnswer() {
		return answer;
	}

	public void setAnswer(boolean answer) {
		this.answer = answer;
	}

	public Option() {
		super();
	}

}
