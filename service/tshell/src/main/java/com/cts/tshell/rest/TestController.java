package com.cts.tshell.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.AuthenticationStatus;

@RestController
public class TestController {
	
	@GetMapping("/list")
	public AuthenticationStatus get(){
		AuthenticationStatus status = new AuthenticationStatus();
		status.setAuthenticated(false);
		return status;
	}

}
