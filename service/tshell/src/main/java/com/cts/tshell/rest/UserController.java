package com.cts.tshell.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.User;
import com.cts.tshell.services.UserService;

@RequestMapping("/rest/user/")
@RestController
public class UserController {
	private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/get/{id}")
	public User getUserById(@PathVariable("id") int id) {
		LOGGER.info("id");
		
		return userService.findUserById(id);
	}
	
}
