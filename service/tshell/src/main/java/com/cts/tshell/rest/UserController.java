package com.cts.tshell.rest;

import java.util.List;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.User;
import com.cts.tshell.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	private static final Logger LOGGER = org.slf4j.LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/usercount")
	public List<User> getTotalNumberofUser() {
		LOGGER.info("start");
		List<User> totalusers = userService.getTotalUserCount();
		LOGGER.debug("totalusers -> {}", totalusers);
		return totalusers;
	}
}
