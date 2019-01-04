package com.cts.tshell.service;

import java.security.NoSuchAlgorithmException;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.tshell.bean.AuthenticationStatus;
import com.cts.tshell.bean.ChangePasswordStatus;
import com.cts.tshell.bean.User;
import com.cts.tshell.bean.Util;
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
	public User findByEmployeeId(int employeeId) {
		LOGGER.info("start");
		LOGGER.debug("employeeId" + employeeId);
		User user = userRepository.findByEmployeeId(employeeId);
		LOGGER.debug("Username: {}", user.getName());
		LOGGER.debug("Role: {}", user.getRole());
		LOGGER.info("end");
		return user;
	}

	@Transactional
	public ChangePasswordStatus changePassword(User user, String currentPassword, String newPassword) throws NoSuchAlgorithmException {
		LOGGER.info("start");
		LOGGER.debug("User " + user);
		LOGGER.debug("User Password : {} ", user.getPassword());
		ChangePasswordStatus status = new ChangePasswordStatus();
		
		String encryptedCurrentPassword = user.getPassword();
		String encryptedFormPassword = Util.encryptToMD5(currentPassword);
		String encryptedNewPassword = Util.encryptToMD5(newPassword);
		
		LOGGER.debug("encryptedFormPassword : {} ", encryptedFormPassword);
		LOGGER.debug("encryptedNewPassword : {} ", encryptedNewPassword);
		
		if (encryptedFormPassword.equals(encryptedNewPassword)) {
			status.setNewAndOldPasswordSame(true);
			status.setMessage("New Password and Current Password not same!");
			
		}
		
		if (!encryptedFormPassword.equals(encryptedCurrentPassword)) {
			LOGGER.info("inside the 2 checked");
			status.setCurrentPasswordIncorrect(true);
			status.setMessage("Current Password Invalid!");
			
		}
		
		if (encryptedFormPassword.equals(encryptedCurrentPassword) && !encryptedFormPassword.equals(encryptedNewPassword)) {
			LOGGER.info("inside the third checked");
			user.setPassword(encryptedNewPassword);
			userRepository.save(user);
			status.setPasswordChanged(true);
			status.setMessage("Password changed successfully!");
		}
		LOGGER.info("end");
		return status;
	}

	
}
