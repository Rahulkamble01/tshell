package com.cts.tshell.service;

import java.security.NoSuchAlgorithmException;

import javax.transaction.Transactional;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.tshell.bean.ChangePasswordStatus;

import com.cts.tshell.bean.User;
import com.cts.tshell.bean.Util;
import com.cts.tshell.repository.UserRepository;
import com.cts.tshell.rest.UserController;

@Service
public class UserService {


	private UserRepository userRepository;
	private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);
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

	
	
	@Transactional
	public User getUser(int employeeId) {
		LOGGER.info("Start");
		LOGGER.debug("EmployeeId: {}", employeeId);
		LOGGER.info("End");
		return userRepository.findByEmpId(employeeId);
	}
	
	
	@Transactional
	public long getUserCount(){
		LOGGER.info("start");
		long userCount = userRepository.totalUserCount();
		LOGGER.debug("totalUserCount -> ",  userCount );
		
		return userCount; 
	}

	public Boolean requestPasswordReset(int employeeId) throws NoSuchAlgorithmException {
		LOGGER.info("Start");
		User user = userRepository.findByEmployeeId(employeeId);
		LOGGER.debug(" user-> {}", user);
		if (user == null) {
			return false;
		}
		user.setOtp(Util.encryptToMD5(String.valueOf(Util.generateOTP())));
		user.setOtpGeneratedTime(getCurrentDateTime());
		userRepository.save(user);
		LOGGER.info("end");
		return true;
	}

	public String getCurrentDateTime() {
		LOGGER.info("Start");
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date date = new Date();
		LOGGER.info("end");
		return formatter.format(date);
	}

	public boolean verifyOTP(int employeeId, String encryptedOTP) {
		LOGGER.info("Start");
		User user = userRepository.findByEmployeeId(employeeId);
		LOGGER.debug(" user-> {}", user);
		if (validateTime(user.getOtpGeneratedTime()) && user.getOtp().equals(encryptedOTP)) {
			LOGGER.info("end");
			return true;
		}
		return false;
	}

	boolean validateTime(String dateStart) {
		LOGGER.info("Start");
		String dateStop = getCurrentDateTime();
		LOGGER.debug(" current date-> {}", dateStop);
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date d1 = null;
		Date d2 = null;
		try {
			d1 = format.parse(dateStart);
			d2 = format.parse(dateStop);
			LOGGER.debug(" Formatted current date-> {}", d2);
			long diff = d2.getTime() - d1.getTime();

			if (diff / (24 * 60 * 60 * 1000) >= 1) {
				return false;
			} else {
				if (diff / (60 * 60 * 1000) % 24 >= 1) {
					return false;
				} else {
					if (diff / (60 * 1000) % 60 >= 1) {
						return false;
					} else {
						return true;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public boolean restPassword(int employeeId, String encryptedPassword) {
		LOGGER.info("Start");
		User user = userRepository.findByEmployeeId(employeeId);
		LOGGER.debug(" user-> {}", user);
		if (user != null) {
			user.setPassword(encryptedPassword);
			userRepository.save(user);
			return true;
		} else {
			return false;
		}
	}
}
