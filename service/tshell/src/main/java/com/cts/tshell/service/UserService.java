package com.cts.tshell.service;

import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
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
