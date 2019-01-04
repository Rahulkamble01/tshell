package com.cts.tshell.bean;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@NamedQueries({
	@NamedQuery(name="ReferenceSkill.findBySkillId",query="from ReferenceSkill r "
			+ "left join fetch r.skill s where s.id=:skillId")
})
@Table(name = "reference_skill")
public class ReferenceSkill {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "rs_id")
	private int id;
	
	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinColumn(name = "rs_sk_id")
	private Skill skill;
	
//	@OneToMany(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinColumn(name="rs_ref_id")
	private Skill referenceSkill;
	
	@Column(name="rs_classifier")
	private String classifier;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Skill getSkill() {
		return skill;
	}

	public void setSkill(Skill skill) {
		this.skill = skill;
	}

	public Skill getReferenceSkill() {
		return referenceSkill;
	}

	public void setReferenceSkill(Skill referenceSkill) {
		this.referenceSkill = referenceSkill;
	}

	public String getClassifier() {
		return classifier;
	}

	public void setClassifier(String classifier) {
		this.classifier = classifier;
	}

	@Override
	public String toString() {
		return "ReferenceSkill [id=" + id + ", skill=" + skill + ", referenceSkill=" + referenceSkill + "]";
	}

	
		
}
