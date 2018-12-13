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
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "assessment")
@NamedQueries({
	@NamedQuery(name="Assessment.findTop5BySkill",query="select a from Assessment a "
			+ "left join fetch a.skill s left join fetch "
			+ "a.user u left join fetch u.role left join fetch a.questions q left join fetch q.questionDifficulty "
			+ "where s.id=:skillId order by a.score desc "),
	@NamedQuery(name="Assessment.findByUser",query="select a from Assessment a "
			
			)
	
})
public class Assessment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="as_id")
	private int id;
	
	@Column(name="as_type")
	private String type;
	
	@Column(name="as_date")
	private Date date;
	
	@Column(name="as_score")
	private int score;
	
	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinColumn(name="as_sk_id")
	private Skill skill;
	
	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinColumn(name="as_us_id")
	private User user;
	
	@ManyToMany(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinTable(name="assessment_question",
				joinColumns= {@JoinColumn(name="aq_as_id")},
				inverseJoinColumns= {@JoinColumn(name="aq_qu_id")}
	)
	private List<Question> questions;

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

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
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

	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}	
}
