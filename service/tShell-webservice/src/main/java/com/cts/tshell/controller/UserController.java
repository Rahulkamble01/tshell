package com.cts.tshell.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.AuthenticationStatus;
import com.cts.tshell.bean.User;
import com.cts.tshell.service.UserService;

@RestController
public class UserController {

	private UserService userService;

	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	@GetMapping("/getPassword/{empId}")
	public User getPasswordByEmpId(@PathVariable int empId) {
		return userService.getUserByEmployeeId(empId);
	}

	@PostMapping("/savePassword")
	public void savePassword(@RequestBody User user) {
		// int empId = user.getEmpId();
		User user2 = userService.getUserData(user.getEmpId());
		AuthenticationStatus status = new AuthenticationStatus();
		String existingPassword = user2.getPassword();
		String newPassword = user.getNewPassword();
		String oldPassword = user.getOldPassword();
		if(existingPassword.equals(oldPassword)){
			user2.setPassword(newPassword);
			userService.savePassword(user2);
			status.setAuthenticated(true);
		}else{
			status.setAuthenticated(false);
		}
		
		// user2.setPassword(password);
		// userService.savePassword(user2);

		/*
		 * User user = userService.getUserData(empId); User.setPassword(user);
		 * userService.savePassword(user); user =
		 * userService.getUserData(empId);
		 */
		// return "Saved";
	}
}
