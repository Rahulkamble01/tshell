package com.cts.tshell.service;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.tshell.bean.User;
import com.cts.tshell.repository.UserRepository;

@Service
public class UserService {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);

	private UserRepository userRepository;

	@Autowired
	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Transactional
	public User getUser(String employeeId) {
		LOGGER.info("Start");
		LOGGER.debug("EmployeeId: {}", employeeId);
		LOGGER.info("End");
		return userRepository.findByEmpId(employeeId);
	}

}
