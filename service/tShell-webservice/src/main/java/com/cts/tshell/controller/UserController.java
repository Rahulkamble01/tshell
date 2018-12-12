package com.cts.tshell.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.ResetStatus;
import com.cts.tshell.bean.User;
import com.cts.tshell.service.UserService;

@RestController
public class UserController {
	private UserService userService;

	@Autowired
	public void setResetService(UserService userService) {
		this.userService = userService;
	}

	@Transactional
	@PostMapping("/reset")
	public ResponseEntity<ResetStatus> reset(@RequestBody User user) {
		System.out.println(user);
		String newPassword = user.getPassword();
		String actualPassword = null;
		ResetStatus status = new ResetStatus();
		status.setReseted(false);
		User actualUser = userService.getUser(user.getEmpId());
		if (actualUser != null) {
			actualPassword = actualUser.getPassword();
		}
		status.setReseted(newPassword.equals(actualPassword));
		return new ResponseEntity<ResetStatus>(status, HttpStatus.OK);
	}
}
