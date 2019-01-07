package com.cts.tshell.rest;

import java.security.NoSuchAlgorithmException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.service.UserService;

@ControllerAdvice
@RestController
@RequestMapping("/user")
public class UserController extends TshellController {
	private final static Logger LOGGER = LoggerFactory.getLogger(UserController.class);
	private UserService userService;

	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	@GetMapping("/requestpasswordreset/{employeeId}")
	public boolean requestPasswordReset(@PathVariable int employeeId) throws NoSuchAlgorithmException {
		LOGGER.info("Start");
		return userService.requestPasswordReset(employeeId);
	}

	@GetMapping("/verifyotp/{employeeId}/{encryptedOTP}")
	public boolean verifyOTP(@PathVariable int employeeId, @PathVariable String encryptedOTP) {
		LOGGER.info("Start");
		return userService.verifyOTP(employeeId, encryptedOTP);
	}

	@GetMapping("/resetPassword/{employeeId}/{encryptedPassword}")
	public boolean resetPassword(@PathVariable int employeeId, @PathVariable String encryptedPassword) {
		LOGGER.info("Start");
		return userService.restPassword(employeeId, encryptedPassword);
	}
}
