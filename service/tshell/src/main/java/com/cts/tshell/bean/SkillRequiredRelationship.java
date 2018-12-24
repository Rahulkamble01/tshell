package com.cts.tshell.bean;

import java.util.ArrayList;
import java.util.List;

import org.neo4j.ogm.annotation.EndNode;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.RelationshipEntity;
import org.neo4j.ogm.annotation.StartNode;

@RelationshipEntity(type = "REQUIRED_KNOWLEDGE_OF")
public class SkillRequiredRelationship {

	@Id
	@GeneratedValue
	private int id;
	private List<String> skillRequiredRelationships = new ArrayList<>();

	
	@StartNode
	private Skill skill1;
	
	@EndNode
	private Skill skill2;
	
	public SkillRequiredRelationship() {
	}
	
	public SkillRequiredRelationship(Skill skill1, Skill skill2) {
		this.skill1 = skill1;
		this.skill2 = skill2;
	}
	
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public List<String> getSkillRequiredRelationships() {
		return skillRequiredRelationships;
	}


	public void setSkillRequiredRelationships(List<String> skillRequiredRelationships) {
		this.skillRequiredRelationships = skillRequiredRelationships;
	}


	public Skill getSkill1() {
		return skill1;
	}


	public void setSkill1(Skill skill1) {
		this.skill1 = skill1;
	}


	public Skill getSkill2() {
		return skill2;
	}


	public void setSkill2(Skill skill2) {
		this.skill2 = skill2;
	}

	public void addRelationshipName(String name) {
		if (this.skillRequiredRelationships == null) {
			this.skillRequiredRelationships = new ArrayList<>();
		}
		this.skillRequiredRelationships.add(name);
	}

	@Override
	public String toString() {
		return "SkillRequiredRelationship [id=" + id+"]";
	}
	
}
