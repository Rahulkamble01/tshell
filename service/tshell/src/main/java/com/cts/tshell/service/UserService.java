package com.cts.tshell.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cts.tshell.bean.Role;
import com.cts.tshell.bean.User;
import com.cts.tshell.repository.RoleRepository;
import com.cts.tshell.repository.UserReposiory;

@Service
public class UserService {

	public UserReposiory userRepository;
     @Autowired
	public RoleRepository roleRepository;
	private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);
	
	@Autowired
	public void setUserRepository(UserReposiory userRepository) {
		this.userRepository = userRepository;
	}
	
	@Transactional
	public void save(User user){
		LOGGER.info("start");
		User currentUser = userRepository.findByEmployeeId(user.getEmployeeId());
		LOGGER.debug("currentUser: {} " , currentUser);
		String editUsername = user.getName();
		LOGGER.debug("editUsername: {} " , editUsername);
		currentUser.setName(editUsername);
		LOGGER.debug("currentUser: {} " , currentUser);
		String editEmail = user.getEmail();
		LOGGER.debug("editEmail: {} " , editEmail);
		currentUser.setEmail(editEmail);
		LOGGER.info("end");
		userRepository.save(currentUser);
	}
	
	@Transactional
	public void update(User user){
		LOGGER.info("start");
		User currentUser = userRepository.findByEmployeeId(user.getEmployeeId());
		LOGGER.debug("currentUser: {} " , currentUser);
		Role role = user.getRole();
		LOGGER.debug("role: {} " , role);
		role=roleRepository.findById(role.getId());
		LOGGER.debug("editRole: {} " , role.getId());
		currentUser.setRole(role);
		LOGGER.info("end");
		userRepository.save(currentUser);
	}
	
	@Transactional
	public User getUserId(int employeeId){
		return userRepository.fetchByEmployeeId(employeeId);
	}
	
}
