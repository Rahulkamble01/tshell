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
	private Long id;
	private List<String> skillRequiredRelationships = new ArrayList<>();

	
	@StartNode
	private NeoSkill skill1;
	
	@EndNode
	private NeoSkill skill2;
	
	public SkillRequiredRelationship() {
		super();
		// TODO Auto-generated constructor stub
	}

	public SkillRequiredRelationship(Long id, List<String> skillRequiredRelationships, NeoSkill skill1, NeoSkill skill2) {
		super();
		this.id = id;
		this.skillRequiredRelationships = skillRequiredRelationships;
		this.skill1 = skill1;
		this.skill2 = skill2;
	}

	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public List<String> getSkillRequiredRelationships() {
		return skillRequiredRelationships;
	}


	public void setSkillRequiredRelationships(List<String> skillRequiredRelationships) {
		this.skillRequiredRelationships = skillRequiredRelationships;
	}


	public NeoSkill getSkill1() {
		return skill1;
	}


	public void setSkill1(NeoSkill skill1) {
		this.skill1 = skill1;
	}


	public NeoSkill getSkill2() {
		return skill2;
	}


	public void setSkill2(NeoSkill skill2) {
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
