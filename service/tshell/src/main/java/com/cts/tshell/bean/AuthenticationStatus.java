package com.cts.tshell.bean;

public class AuthenticationStatus {

	private boolean authenticated;
	private String message;
	public AuthenticationStatus() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AuthenticationStatus(boolean authenticated) {
		super();
		this.authenticated = authenticated;
	}

	
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public boolean isAuthenticated() {
		return authenticated;
	}

	public void setAuthenticated(boolean authenticated) {
		this.authenticated = authenticated;
	}

	@Override
	public String toString() {
		return "AuthenticationStatus [authenticated=" + authenticated + "]";
	}

}
