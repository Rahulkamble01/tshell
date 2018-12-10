package com.cts.tshell.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="question_difficulty")
public class QuestionDifficulty {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="qd_id")
	private int id;
	
	@Column(name="qd_difficulty")
	private String difficulty;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDifficulty() {
		return difficulty;
	}

	public void setDifficulty(String difficulty) {
		this.difficulty = difficulty;
	}

}
