package com.cts.tshell.bean;

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
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity
@Table(name = "user")

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

	@Size(min = 5, max = 10, message = "Employee ID  must be 5 to 10 characters")
	@Column(name = "us_emp_id")
	private String employeeId;

	@Column(name = "us_image")
	private byte[] image;

	@Column(name = "us_signup_date")
	private Date signupDate;

	@Column(name = "us_last_login_time")
	private Date lastLoginTime;

	@Column(name = "us_signup_otp_verify_status")
	public String signupOtpVerifyStatus;

	@Column(name = "us_signup_otp")
	private String signupOtp;

	@Column(name = "us_signup_otp_time")
	private Date signupOtpTime;

	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "user_skill", joinColumns = { @JoinColumn(name = "uk_us_id") }, inverseJoinColumns = {
			@JoinColumn(name = "uk_sk_id") })
	private List<Skill> skills;

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

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public Date getSignupDate() {
		return signupDate;
	}

	public void setSignupDate(Date signupDate) {
		this.signupDate = signupDate;
	}

	public Date getLastLoginTime() {
		return lastLoginTime;
	}

	public void setLastLoginTime(Date lastLoginTime) {
		this.lastLoginTime = lastLoginTime;
	}

	public List<Skill> getSkills() {
		return skills;
	}

	public void setSkills(List<Skill> skills) {
		this.skills = skills;
	}

	public String getSignupOtp() {
		return signupOtp;
	}

	public void setSignupOtp(String signupOtp) {
		this.signupOtp = signupOtp;
	}

	public Date getSignupOtpTime() {
		return signupOtpTime;
	}

	public void setSignupOtpTime(Date signupOtpTime) {
		this.signupOtpTime = signupOtpTime;
	}

	public String getSignupOtpVerifyStatus() {
		return signupOtpVerifyStatus;
	}

	public void setSignupOtpVerifyStatus(String signupOtpVerifyStatus) {
		this.signupOtpVerifyStatus = signupOtpVerifyStatus;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", role=" + role
				+ ", employeeId=" + employeeId + ", signupOtpVerifyStatus=" + signupOtpVerifyStatus + ", signupOtp="
				+ signupOtp + "]";
	}

}
