package com.cts.tshell.bean;

public class AuthenticationStatus {

	private boolean authenticated;
	private User user; 


	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	private boolean checkEmail;
	private boolean checkUserId;
	

	public AuthenticationStatus() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AuthenticationStatus(boolean authenticated) {
		super();
		this.authenticated = authenticated;
	}

	public boolean isAuthenticated() {
		return authenticated;
	}	
	
	
	
	public void setAuthenticated(boolean authenticated) {
		this.authenticated = authenticated;
	}

	

	public boolean isCheckEmail() {
		return checkEmail;
	}

	public void setCheckEmail(boolean checkEmail) {
		this.checkEmail = checkEmail;
	}

	public boolean isCheckUserId() {
		return checkUserId;
	}

	public void setCheckUserId(boolean checkUserId) {
		this.checkUserId = checkUserId;
	}

	@Override
	public String toString() {
		return "AuthenticationStatus [authenticated=" + authenticated + ", checkEmail=" + checkEmail + ", checkUserId="
				+ checkUserId + "]";
	}
	
}

