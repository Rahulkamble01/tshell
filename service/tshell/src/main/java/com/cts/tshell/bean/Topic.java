package com.cts.tshell.bean;

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
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "topic")
@JsonIdentityInfo(generator=ObjectIdGenerators.IntSequenceGenerator.class, property="@id")

/*
@NamedNativeQueries({
       @NamedNativeQuery(
            name    =   "getAllQuestionById",
            query   =   "select qu_id from question " +
                        "left join topic_question on tq_qu_id=qu_id  " +
                        "left join topic on tp_id = tq_tp_id " +
                        " "+
                         "where tp_sk_id=:id "
                        
           )
})*/
public class Topic {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "tp_id")
	private int id;

	@Column(name = "tp_name")
	private String name;
	
	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinColumn(name="tp_sk_id")
	@JsonIgnore
	private Skill skill;
	
	@ManyToMany(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinTable(name="topic_question",
				joinColumns= {@JoinColumn(name="tq_tp_id")},
				inverseJoinColumns= {@JoinColumn(name="tq_qu_id")}
	)	 
	@JsonView(Views.Internal.class)
	private List<Question> questions;
	
	@Column(name = "tp_weightage")
	private int weightage;

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

	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}

	public int getWeightage() {
		return weightage;
	}

//	public void setWeightage(int weightage) {
//		this.weightage = weightage;
//	}

	 

	
}
