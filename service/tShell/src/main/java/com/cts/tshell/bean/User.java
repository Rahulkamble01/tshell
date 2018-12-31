package com.cts.tshell.bean;

import java.sql.Time;
import java.util.Date;
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
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;


import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name = "user")

@NamedQueries({
	@NamedQuery(name="User.findByEmpId",
			query=	" select u from User u " + 
					" left join fetch u.role r " + 
				    " where u.employeeId = :employeeId ")
})

public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "us_id")
	private int id;

	@NotNull(message = "User Name cannot be empty")
	@Column(name = "us_name")
	private String name;

	@NotNull(message = "Email cannot be empty")
	@Pattern(regexp = ".+@.+\\..+", message = "Email address is invalid")
	@Column(name = "us_email")
	private String email;

	@NotNull(message = "Password cannot be empty")
	@Size(min = 6, max = 100, message = "Password must be 6 to 30 characters")
	@Column(name = "us_password")
	private String password;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "us_ur_id")
	private Role role;

	@Min(value = 1, message = "Employee ID must be at least 6 digits")
	@Max(value = 10000000000L, message = "Employee ID cannot exceed 10 digits")
	@Column(name = "us_emp_id")
	@JsonView(Views.Public.class)
	private int employeeId;

	@Column(name = "us_image")
	private byte[] image;

	@Column(name = "us_signup_date")
	private Date signupDate;

	@Column(name = "us_last_login_time")
	private Time lastLoginTime;

	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "user_skill", joinColumns = { @JoinColumn(name = "uk_us_id") }, inverseJoinColumns = {
			@JoinColumn(name = "uk_sk_id") })
	@JsonView(Views.Internal.class)
	private List<Skill> skills;

	public int getId() {
		return id;
	}

	public Date getSignupDate() {
		return signupDate;
	}

	public void setSignupDate(Date signupDate) {
		this.signupDate = signupDate;
	}

	public Time getLastLoginTime() {
		return lastLoginTime;
	}

	public void setLastLoginTime(Time lastLoginTime) {
		this.lastLoginTime = lastLoginTime;
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

	public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	

	public List<Skill> getSkills() {
		return skills;
	}

	public void setSkills(List<Skill> skills) {
		this.skills = skills;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", role=" + role
				+ ", employeeId=" + employeeId + ", image=" + image + ", signupDate=" + signupDate + ", lastLoginTime="
				+ lastLoginTime + ", skills=" + skills + "]";
	}

}
