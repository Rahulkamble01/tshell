package com.cts.tshell.rest;

import java.security.NoSuchAlgorithmException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.SignupStatus;
import com.cts.tshell.bean.User;
import com.cts.tshell.service.SignupService;

@RestController
public class SignupController {

	private SignupService signupService;
	private boolean signupStatus;

	private static final Logger LOGGER = LoggerFactory.getLogger(SignupController.class);

	@Autowired
	public void setSignupService(SignupService signupService) {
		this.signupService = signupService;
	}
	
	@PostMapping("/signup")
	public SignupStatus signupUser(@RequestBody User user) throws NoSuchAlgorithmException {
		LOGGER.info("Checking user exists");
		LOGGER.debug("User :{} ", user);

		String email = user.getEmail();
		User actualUserEmail = signupService.findUserByEmail(email);
		LOGGER.debug("ActualEmail :{} ", actualUserEmail);

		String userId = user.getEmployeeId();
		
		User actualUserbyId = signupService.findUserById(userId);
		LOGGER.debug("ActualId :{} ", actualUserbyId);

		SignupStatus status = new SignupStatus();
		status.setEmailExist(false);
		status.setUserIdExist(false);
		status.setSignupStatus(false);
		if (actualUserbyId == null) {			
			status.setUserIdExist(true);
		}
		if(actualUserEmail == null) {
			status.setEmailExist(true);			
		}
		if(status.isEmailExist() && status.isUserIdExist()){
			LOGGER.info("User existence checked");
			LOGGER.info("Signup User");
			signupService.signup(user);
			status.setSignupStatus(true);
		}
		LOGGER.info("User signed up successfully!!!");
		return status;

	}
}
