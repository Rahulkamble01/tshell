package com.cts.tshell.rest;

import java.security.NoSuchAlgorithmException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.AuthenticationStatus;
import com.cts.tshell.bean.User;
import com.cts.tshell.bean.Util;
import com.cts.tshell.bean.Views;
import com.cts.tshell.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


@RestController
public class LoginController extends TshellController {

	private static final Logger LOGGER = LoggerFactory.getLogger(LoginController.class);

	@Autowired
	private UserService userservice;

	@GetMapping("/rest/{employeeId}")
	public String getUser(@PathVariable("employeeId") int employeeId) throws JsonProcessingException {
		LOGGER.info("Start");
		LOGGER.debug("EmployeeId : {}", employeeId);
		LOGGER.info("End");
		User user= userservice.getUser(employeeId);
		ObjectMapper mapper = new ObjectMapper();
		String result=mapper.writerWithView(Views.Public.class).writeValueAsString(user);
		return result;

	}

	@PostMapping("/authenticate")
	public ResponseEntity<AuthenticationStatus> authenticate(@RequestBody User user) throws NoSuchAlgorithmException {
		LOGGER.info("Start");
		LOGGER.debug("From request (user) : {}", user);
		int employeeId = user.getEmployeeId();
		LOGGER.debug("Value of employeeId: {} ", employeeId);
		String password = user.getPassword();
		LOGGER.debug("Value of password: {} ", password);

		String encryptedPassword = Util.encryptToMD5(password);
		LOGGER.debug("User entered encrypted password: {} ", encryptedPassword);

		String actualPassword = "";
		int actualEmployeeId = 0;
		AuthenticationStatus status = new AuthenticationStatus();
		status.setAuthenticated(false);
		User actualUser = userservice.getUser(user.getEmployeeId());
		LOGGER.debug("From request (actualUser) : {}", actualUser);
		
		if (actualUser != null) {
			
			actualEmployeeId = actualUser.getEmployeeId();
			actualPassword = actualUser.getPassword();
			status.setUser(actualUser);
			status.setAuthenticated(employeeId==actualEmployeeId);
			status.setAuthenticated(encryptedPassword.equals(actualPassword));
		}
		
		LOGGER.debug("Actual password: {} ", actualPassword);
		LOGGER.debug("Value of actualEmployeeId: {} ", actualEmployeeId);
		LOGGER.debug("Value of actualPassword: {} ", actualPassword);
		LOGGER.debug("Value of status: {} ", status);
		LOGGER.info("End");
		return new ResponseEntity<AuthenticationStatus>(status, HttpStatus.OK);
	}
	
}
