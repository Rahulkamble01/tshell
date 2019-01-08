package com.cts.tshell.service;

import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cts.tshell.bean.User;
import com.cts.tshell.bean.Util;
import com.cts.tshell.repository.UserRepository;

@Service
public class UserService {

	private final static Logger LOGGER = LoggerFactory.getLogger(UserService.class);
	private UserRepository userRepository;

	@Autowired
	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Transactional
	public Boolean requestPasswordReset(String employeeId) throws NoSuchAlgorithmException {
		LOGGER.info("Start");
		User user = userRepository.findByEmployeeId(employeeId);
		LOGGER.debug(" user-> {}", user);
		if (user == null) {
			return false;
		}
		user.setOtp(Util.encryptToMD5(String.valueOf(Util.generateOTP())));
		user.setOtpGeneratedTime(Calendar.getInstance());
		userRepository.save(user);
		LOGGER.info("end");
		return true;
	}

	public boolean verifyOTP(String employeeId, String encryptedOTP) {
		LOGGER.info("Start");
		User user = userRepository.findByEmployeeId(employeeId);
		LOGGER.debug(" user-> {}", user);
		if (validateTime(user.getOtpGeneratedTime()) && user.getOtp().equals(encryptedOTP)) {
			LOGGER.info("end");
			return true;
		}
		return false;
	}

	boolean validateTime(Calendar dateStart) {
		LOGGER.info("Start");
		Calendar dateStop = Calendar.getInstance();
		LOGGER.debug(" start time -> {}", dateStart.getTimeInMillis());
		LOGGER.debug(" end time -> {}", dateStop.getTimeInMillis());
		long diff = (dateStop.getTimeInMillis() / 1000) - (dateStart.getTimeInMillis() / 1000);
		LOGGER.debug("difference of time --> {}", diff);
		if (diff > 120) {
			return false;
		}
		return true;
	}

	public boolean restPassword(String employeeId, String encryptedPassword) {
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
