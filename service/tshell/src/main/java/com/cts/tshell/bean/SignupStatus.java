package com.cts.tshell.bean;

public class SignupStatus {
	private boolean emailExist;
	private boolean userIdExist;
	private boolean signupStatus;
	
	public boolean isSignupStatus() {
		return signupStatus;
	}
	public void setSignupStatus(boolean signupStatus) {
		this.signupStatus = signupStatus;
	}
	public boolean isEmailExist() {
		return emailExist;
	}
	public void setEmailExist(boolean emailExist) {
		this.emailExist = emailExist;
	}
	public boolean isUserIdExist() {
		return userIdExist;
	}
	public void setUserIdExist(boolean userIdExist) {
		this.userIdExist = userIdExist;
	}
	@Override
	public String toString() {
		return "SignupStatus [emailExist=" + emailExist + ", userIdExist=" + userIdExist + ", signupStatus="
				+ signupStatus + "]";
	}
	
}
