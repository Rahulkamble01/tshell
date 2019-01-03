package com.cts.tshell.rest;

import java.security.NoSuchAlgorithmException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.AuthenticationStatus;
import com.cts.tshell.bean.User;
import com.cts.tshell.bean.Util;
import com.cts.tshell.service.UserService;

@ControllerAdvice
@RestController
public class LoginController extends TshellController {

	private static final Logger LOGGER = LoggerFactory.getLogger(LoginController.class);

	@Autowired
	private UserService userservice;

	@GetMapping("/rest/{employeeId}")
	public User getUser(@PathVariable("employeeId") int employeeId) {
		LOGGER.info("Start");
		LOGGER.debug("EmployeeId : {}", employeeId);
		LOGGER.info("End");
		return userservice.getUser(employeeId);

	}

	@PostMapping("/authenticate")
	public ResponseEntity<AuthenticationStatus> authenticate(@RequestBody User user) throws NoSuchAlgorithmException {
		LOGGER.info("Start");
		LOGGER.debug("From request (user) : {}", user);
		String password = user.getPassword();
		LOGGER.debug("Value of password: {} ", password);

		String encryptedPassword = Util.encryptToMD5(password);
		LOGGER.debug("User entered encrypted password: {} ", encryptedPassword);

		String actualPassword = "";
		AuthenticationStatus status = new AuthenticationStatus();
		status.setAuthenticated(false);
		User actualUser = userservice.getUser(user.getEmployeeId());
		LOGGER.debug("From request (actualUser) : {}", actualUser);
		LOGGER.debug("Actual password: {} ", actualUser.getPassword());
		if (actualUser != null) {
			actualPassword = actualUser.getPassword();
			status.setUser(actualUser);
		}
		status.setAuthenticated(encryptedPassword.equals(actualPassword));
		LOGGER.debug("Value of actualPassword: {} ", actualPassword);
		LOGGER.debug("Value of status: {} ", status);
		LOGGER.info("End");
		return new ResponseEntity<AuthenticationStatus>(status, HttpStatus.OK);
	}
}
