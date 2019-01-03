package com.cts.tshell.bean;

import java.util.Set;

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

@Entity
@Table(name = "skill")
//@NamedQueries({
//	@NamedQuery(name = "Skill.fetchQuestionById", query = "select s,t.id,t.name from Skill s "
//			+" left join fetch s.topics t " + " left join fetch t.questions q "+" left join fetch q.option o "
//			+" where s.id=:userId ")
//	
//})
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
	
	@OneToMany(fetch=FetchType.LAZY,mappedBy="skill")
	private Set<Topic> topics;

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

	public Set<Topic> getTopics() {
		return topics;
	}

	public void setTopics(Set<Topic> topics) {
		this.topics = topics;
	}

	
}
