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
	private Long id;
	private String name;
	private byte[] image;
	private String active;
	private String description;
	private String createdOn;
	private int searchCount;
	private int testCount;

	@JsonIgnoreProperties("skill")
	@Relationship(type = "REQUIRED_KNOWLEDGE_OF", direction = Relationship.DIRECTION)
	@JsonIgnore
	private List<SkillRequiredRelationship> skillRequiredRelationships;

	public NeoSkill() {
		super();
		// TODO Auto-generated constructor stub
	}

	public NeoSkill(Long id, String name, byte[] image, String active, String description, String createdOn,
			int searchCount, int testCount, List<SkillRequiredRelationship> skillRequiredRelationships) {
		super();
		this.id = id;
		this.name = name;
		this.image = image;
		this.active = active;
		this.description = description;
		this.createdOn = createdOn;
		this.searchCount = searchCount;
		this.testCount = testCount;
		this.skillRequiredRelationships = skillRequiredRelationships;
	}
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public String getActive() {
		return active;
	}

	public void setActive(String active) {
		this.active = active;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCreatedOn() {
//		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");  
//		return formatter.format(createdOn);
		return createdOn;
	}

	public void setCreatedOn(String createdOn) {
		this.createdOn = createdOn;
	}

	public int getSearchCount() {
		return searchCount;
	}

	public void setSearchCount(int searchCount) {
		this.searchCount = searchCount;
	}

	public int getTestCount() {
		return testCount;
	}

	public void setTestCount(int testCount) {
		this.testCount = testCount;
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

	

}
