package com.cts.tshell.service;

import java.security.NoSuchAlgorithmException;
import java.util.Date;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.tshell.bean.Role;
import com.cts.tshell.bean.User;
import com.cts.tshell.bean.Util;
import com.cts.tshell.repository.SignupRepository;
import com.cts.tshell.repository.UserRepository;
import com.cts.tshell.rest.SignupController;

@Service
public class SignupService {
	private SignupRepository signupRepository;
	
	@Autowired
	private UserRepository userRepository;
	private RoleService roleService;

	private static final Logger LOGGER = LoggerFactory.getLogger(SignupController.class);

	@Autowired
	public void setSignupRepository(SignupRepository signupRepository) {

		this.signupRepository = signupRepository;
	}

	@Autowired
	public void setRoleService(RoleService roleService) {
		this.roleService = roleService;
	}

	@Transactional
	public void signup(User user) throws NoSuchAlgorithmException {
		LOGGER.info("Signup service starts");
		LOGGER.info("Set role As Learner");
		LOGGER.debug("User: {}", user);
		Date date =new Date(); 
		user.setSignupDate(date.toString());

		Role role = roleService.getRoleByName("Learner");
		user.setRole(role);
		LOGGER.info("Role set");
		String password=user.getPassword();
		String encryptedPassword =Util.encryptToMD5(password);
		user.setPassword(encryptedPassword);
		signupRepository.save(user);
		LOGGER.info("Signup done");
	}
	
	
	@Transactional
	public User findUserByEmail(String email){
		LOGGER.info("Finding user by email");
		return userRepository.getUserByEmail(email);
		
	}
	
	@Transactional
	public User findUserById(String userId){
		LOGGER.info("Finding user by employeeId");
		return userRepository.getUserByEmployeeId(userId);
	}
	

}
