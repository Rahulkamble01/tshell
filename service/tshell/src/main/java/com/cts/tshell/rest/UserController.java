package com.cts.tshell.rest;



import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.cts.tshell.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	private static final Logger LOGGER = org.slf4j.LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/usercount")
	public long getTotalNumberofUsers() {
		LOGGER.info("start");
		long userCount = userService.getUserCount();
		LOGGER.debug("totaluserscount -> {}", userCount);
		return userCount;
	}
}
