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
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "user")
/*
 * @NamedQueries({
 * 
 * @NamedQuery(name="User.findUserById",query="select u from User u " +
 * " join fetch u.skills s" + " join fetch s.topics t" +
 * " join fetch t.questions q" + " where u.id = :id group by s.id") })
 */
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "us_id")
	private int id;

	@Column(name = "us_name")
	private String name;

	@Column(name = "us_email")
	private String email;

	@Column(name = "us_password")
	private String password;

	
	

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "us_ur_id")

	@JsonIgnore

	private Role role;

	@Transient
	private String userRole;

	@Column(name = "us_emp_id")
	private int empId;

	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "user_skill", joinColumns = { @JoinColumn(name = "uk_us_id") }, inverseJoinColumns = {
			@JoinColumn(name = "uk_sk_id") })
	private List<Skill> skills;

	public User() {
		super();
	}

	public String getUserRole() {
		userRole = role.getName();
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}

	public List<Skill> getSkills() {
		return skills;
	}

	public void setSkills(List<Skill> skills) {
		this.skills = skills;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}


}
