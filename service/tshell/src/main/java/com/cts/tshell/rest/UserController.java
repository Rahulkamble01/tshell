package com.cts.tshell.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.tshell.bean.User;
import com.cts.tshell.bean.Views;
import com.cts.tshell.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class UserController {
	public UserService userService;

	private static final Logger LOGGER = LoggerFactory.getLogger(AssessmentController.class);
	
	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	
	@GetMapping("/getUser/{employeeId}")
	public String getUserId(@PathVariable("employeeId") int employeeId) throws JsonProcessingException {
		LOGGER.info("start");
		LOGGER.debug("employeeId: {} " , employeeId);
		LOGGER.info("end");
		User user=userService.getUserId(employeeId);
		ObjectMapper mapper = new ObjectMapper();
		String result=mapper.writerWithView(Views.Internal.class).writeValueAsString(user);
		return result;
	}
	
	@PostMapping("/save")
		public void saveUser(@RequestBody User user){
		LOGGER.info("start");
		LOGGER.debug("User: {} " , user.getName());
		LOGGER.debug("User: {} " , user.getEmail());
		LOGGER.info("end");
		userService.save(user);
	}
	
	@PostMapping("/update")
	public void save(@RequestBody User user){
		LOGGER.info("start");
		LOGGER.debug("User: {} " , user.getRole());
		LOGGER.info("end");
		userService.update(user);
	}

}
