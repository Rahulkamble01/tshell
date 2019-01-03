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
import javax.persistence.NamedNativeQueries;
import javax.persistence.NamedNativeQuery;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "assessment")
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@id")
@NamedQueries({ 
@NamedQuery(name = "Assessment.fetchAssesmentDetailById", 
			query = "select distinct a from Assessment a "
					+ "left join fetch a.assessmentQuestions q " 
					+ "left join fetch q.assessmentQuestionOption "
					+ "where a.id=:assessmentId " + " "), 
})

@NamedNativeQueries({
@NamedNativeQuery(name = "Assessment.getTopicWiseQuestionCount", 
				query = "SELECT count(CASE WHEN aq_is_correct = true THEN 1 END ) as score , "
						+ "tp_name as topicName, tp_weightage as weightage, as_score as totalScore "
						+ "FROM assessment_question "
						+ "left join topic_question on tq_qu_id = aq_qu_id "
						+ "left join topic on tp_id=tq_tp_id "
						+ "left join assessment on as_id=aq_as_id "
						+ "where aq_as_id=:assessmentId "
						+ "Group BY tq_tp_id  "
					)
					})

public class Assessment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "as_id")
	private int id;

	@Column(name = "as_type")
	private String type;

	@Column(name = "as_start_time")
	private Date date;

	@Column(name = "as_score")
	private float score;

	@Column(name = "as_end_time")
	private Date endTime;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "as_sk_id")
	@JsonView(Views.Internal.class)
	private Skill skill;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "as_us_id")
	@JsonView(Views.Internal.class)
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

	public Date getEndTime() {
		return endTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}

	@Override
	public String toString() {
		return "Assessment [id=" + id + "]";
	}

}
