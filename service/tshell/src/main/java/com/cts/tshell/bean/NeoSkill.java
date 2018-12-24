package com.cts.tshell.bean;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@NodeEntity
public class NeoSkill {

	@Id
	@GeneratedValue
	private int id;
	private String name;

	@JsonIgnoreProperties("skill")
	@Relationship(type = "REQUIRED_KNOWLEDGE_OF", direction = Relationship.DIRECTION)
	@JsonIgnore
	private List<SkillRequiredRelationship> skillRequiredRelationships;


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

	public List<SkillRequiredRelationship> getSkillRequiredRelationships() {
		System.out.println("Indise getSkillRequiredRelationship");
		System.out.println("111111");
		if (this.skillRequiredRelationships == null) {
			this.skillRequiredRelationships = new ArrayList<>();
		}
		return skillRequiredRelationships;
	}

	public void setSkillRequiredRelationships(List<SkillRequiredRelationship> skillRequiredRelationships) {
		System.out.println("Indise setRelationshipSkill()");
		this.skillRequiredRelationships = skillRequiredRelationships;
	}


	@Override
	public String toString() {
		return "NeoSkill [id=" + id + ", name=" + name + ", skillRequiredRelationships=" + skillRequiredRelationships
				+ "]";
	}
}
