package com.cts.tshell.bean;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@NamedQueries({
		@NamedQuery(name = "Skill.fetchRecentSkills", query = "select sk.id, sk.name from Skill sk where creationDate >=CURRENT_DATE()-30   order by creationDate desc  "),
		@NamedQuery(name = "Skill.fetchTopSearchedSkills", query = "select s.name, s.searchCount from Skill s  where s.searchCount>0 order by searchCount desc") })

@Table(name = "skill")
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@id")
public class Skill {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "sk_id")
	private int id;

	@Column(name = "sk_name")
	private String name;

	@Column(name = "sk_search_count")
	private int searchCount;

	@Column(name = "sk_active")
	private String active;

	@Column(name = "sk_test_count")
	private int testCount;

	@Column(name = "sk_description")
	private String description;

	@Column(name = "sk_image")
	private byte[] image;

	@Column(name = "sk_creation_date")
	@Temporal(TemporalType.DATE)
	private Date createdOn;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "skill")
	private List<Topic> topics;

	public Skill(int id, String name, int searchCount, String active, int testCount, String description, byte[] image,
			Date createdOn, List<Topic> topics) {
		super();
		this.id = id;
		this.name = name;
		this.searchCount = searchCount;
		this.active = active;
		this.testCount = testCount;
		this.description = description;
		this.image = image;
		this.createdOn = createdOn;
		this.topics = topics;
	}

	public Date getCreationDate() {
		return createdOn;
	}

	public void setCreationDate(Date creationDate) {
		this.createdOn = creationDate;
	}

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

	public int getSearchCount() {
		return searchCount;
	}

	public void setSearchCount(int searchCount) {
		this.searchCount = searchCount;
	}

	public String getActive() {
		return active;
	}

	public void setActive(String active) {
		this.active = active;
	}

	public int getTestCount() {
		return testCount;
	}

	public void setTestCount(int testCount) {
		this.testCount = testCount;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public List<Topic> getTopics() {
		return topics;
	}

	public void setTopics(List<Topic> topics) {
		this.topics = topics;
	}

	public Date getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}

	public Skill() {
		super();
		// TODO Auto-generated constructor stub
	}
}
