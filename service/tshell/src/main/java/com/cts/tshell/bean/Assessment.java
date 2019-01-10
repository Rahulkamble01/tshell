package com.cts.tshell.bean;

import java.util.Date;
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
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
@Table(name = "assessment")

@NamedQueries({@NamedQuery(name="Assessment.findUserHistory",query="select distinct a from Assessment a "
		+ "left join fetch a.skill "
		+ "left join fetch a.user "
		+ "u left join fetch u.role "		
		+ " where u.employeeId=:id") ,
		
		@NamedQuery(name = "Assessment.findTop5BySkill", query = "select distinct a from Assessment a "
		+ "join a.skill s " + "join a.user u " + "where s.id=:skillId order by a.score desc")
})


public class Assessment {	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "as_id")
	private int id;

	@Column(name = "as_type")
	private String type;
	
	@Column(name="as_start_time")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy ")
	private Date date;

	@Column(name = "as_score")
	private float score;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "as_sk_id")
	private Skill skill;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "as_us_id")
	@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	private User user;


	// @ManyToMany(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	// @JoinTable(name="assessment_question",
	// joinColumns= {@JoinColumn(name="aq_as_id")},
	// inverseJoinColumns= {@JoinColumn(name="aq_qu_id")}
	// )
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "assessment")
	private Set<AssessmentQuestion> assessmentQuestions;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public float getScore() {
		return score;
	}

	public void setScore(float score) {
		this.score = score;
	}

	public Skill getSkill() {
		return skill;
	}

	public void setSkill(Skill skill) {
		this.skill = skill;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Set<AssessmentQuestion> getAssessmentQuestions() {
		return assessmentQuestions;
	}

	public void setAssessmentQuestions(Set<AssessmentQuestion> assessmentQuestions) {
		this.assessmentQuestions = assessmentQuestions;
	}

}

