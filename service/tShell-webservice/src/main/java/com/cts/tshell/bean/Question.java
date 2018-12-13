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
<<<<<<< HEAD

import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

=======
>>>>>>> rel1
import javax.persistence.Table;

@Entity
@Table(name = "question")
// @NamedQueries({
// @NamedQuery(name="Question.totalQuestion",query="select q from Question q "
// + "left join fetch q.user u left join fetch "
// + "q.user u left join fetch u.role left join fetch a.questions q left join
// fetch q.questionDifficulty "
// + "where s.id=:skillId order by a.score desc ")
// })

public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "qu_id")
	private int id;

	@Column(name = "qu_question")
	private String question;

	@Column(name = "qu_solution")
	private String solution;
<<<<<<< HEAD
	

	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinColumn(name="qu_qd_id")	

	
=======

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "qu_qd_id")
>>>>>>> rel1

	private QuestionDifficulty questionDifficulty;

	@Column(name = "qu_marks")
	private int marks;

	@Column(name = "qu_status")
	private String status;
<<<<<<< HEAD
	

	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinColumn(name="qu_us_id")
=======

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "qu_us_id")
>>>>>>> rel1
	private User user;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
<<<<<<< HEAD

=======
>>>>>>> rel1

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

	public String getSolution() {
		return solution;
	}

	public void setSolution(String solution) {
		this.solution = solution;
	}

	public int getMarks() {
		return marks;
	}

	public void setMarks(int marks) {
		this.marks = marks;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public QuestionDifficulty getQuestionDifficulty() {
		return questionDifficulty;
	}

	public void setQuestionDifficulty(QuestionDifficulty questionDifficulty) {
		this.questionDifficulty = questionDifficulty;
	} 

}
