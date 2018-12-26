package com.cts.tshell.bean;

import java.util.Date;
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
@Table(name = "assessment")

public class Assessment {	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="as_id")
	private int id;
	
	@Column(name="as_type")
	private String type;
	
	@Column(name="as_start_time")
	private Date date;
	
	@Column(name="as_score")
	private float score;
	
	@Column(name="as_end_time")
	private Date endTime;
	
	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinColumn(name="as_sk_id")
	private Skill skill;
	
	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinColumn(name="as_us_id")
	private User user;
	
//	@ManyToMany(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
//	@JoinTable(name="assessment_question",
//				joinColumns= {@JoinColumn(name="aq_as_id")},
//				inverseJoinColumns= {@JoinColumn(name="aq_qu_id")}
//	)
	@OneToMany(fetch=FetchType.LAZY,mappedBy="assessment")
	private List<AssessmentQuestion> assessmentQuestions;

	@Transient
	private int skillId;
	@Transient
	private int userId;
	@Transient
	private int[] questionIds;
	
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

	public List<AssessmentQuestion> getAssessmentQuestions() {
		return assessmentQuestions;
	}

	public void setAssessmentQuestions(List<AssessmentQuestion> assessmentQuestions) {
		this.assessmentQuestions = assessmentQuestions;
	}

	
	public Date getEndTime() {
		return endTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}

	public int getSkillId() {
		return skillId;
	}

	public void setSkillId(int skillId) {
		this.skillId = skillId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int[] getQuestionIds() {
		return questionIds;
	}

	public void setQuestionIds(int[] questionIds) {
		this.questionIds = questionIds;
	}

	
}
