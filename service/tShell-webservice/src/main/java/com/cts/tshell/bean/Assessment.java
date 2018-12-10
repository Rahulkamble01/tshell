package com.cts.tshell.bean;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "assessment")
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
	
	@Column(name="as_sk_id")
	private Skill skill;
	
	@Column(name="as_us_id")
	private User user;

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

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Assessment [id=");
		builder.append(id);
		builder.append(", type=");
		builder.append(type);
		builder.append(", date=");
		builder.append(date);
		builder.append(", score=");
		builder.append(score);
		builder.append(", skill=");
		builder.append(skill);
		builder.append(", user=");
		builder.append(user);
		builder.append("]");
		return builder.toString();
	}
	
	
}
