package com.cts.tshell.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "topic")
public class Topic {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "tp_id")
	private int id;

	@Column(name = "tp_name")
	private String name;

	@Column(name = "tp_sk_id")
	private Skill skill;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Skill getSkill() {
		return skill;
	}

	public void setSkill(Skill skill) {
		this.skill = skill;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Topic [id=");
		builder.append(id);
		builder.append(", name=");
		builder.append(name);
		builder.append(", skill=");
		builder.append(skill);
		builder.append("]");
		return builder.toString();
	}

}
