package com.cts.tshell.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "option")
public class Option {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "op_id")
	private int id;

	@Column(name = "op_description")
	private String description;

	@Column(name = "op_qu_id")
	private Question question;

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

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Option [id=");
		builder.append(id);
		builder.append(", description=");
		builder.append(description);
		builder.append(", question=");
		builder.append(question);
		builder.append("]");
		return builder.toString();
	}

}
