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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.ChangePasswordStatus;
import com.cts.tshell.bean.User;
import com.cts.tshell.service.UserService;

@ControllerAdvice
@RestController
@RequestMapping("/user")
public class UserController extends TshellController {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

	private UserService userService;

	@Autowired
	private void setUserService(UserService userService) {
		this.userService = userService;
	}
/*
	@GetMapping("/getpassword/{employeeId}")
	public User getPassword(@PathVariable("employeeId") int employeeId) {
		LOGGER.info("start");
		LOGGER.debug("employeeId" + employeeId);
		User user = userService.findByEmployeeId(employeeId);
		LOGGER.debug("Username: {}", user.getName());
		LOGGER.debug("Role: {}", user.getRole());
		LOGGER.info("end");
		return user;
	}*/

	@GetMapping("/changepassword/{employeeId}/{currentPassword}/{newPassword}")
	public ResponseEntity<ChangePasswordStatus> changePassword(@PathVariable int employeeId,
			@PathVariable String currentPassword, @PathVariable String newPassword) throws NoSuchAlgorithmException {
		LOGGER.info("start");
		LOGGER.debug("employeeId:{}; currentPassword:{}; newPassword:{}", employeeId, currentPassword, newPassword);
		User user = userService.findByEmployeeId(employeeId);
		LOGGER.debug("User:{} ", user);
		//userService.changePassword(user, currentPassword, newPassword);
		LOGGER.debug("User password {} ", user.getPassword());
		ChangePasswordStatus status = userService.changePassword(user, currentPassword, newPassword);

		LOGGER.info("end");
		return new ResponseEntity<ChangePasswordStatus>(status, HttpStatus.OK);

	}

}
