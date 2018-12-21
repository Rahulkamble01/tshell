package com.cts.tshell.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

//import com.cts.movie.service.SeatService;
import com.cts.tshell.bean.User;
import com.cts.tshell.repository.UserRepository;

@Service
public class UserService {
	private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);
	@Autowired
	private UserRepository userRepository;
	
	@Transactional
	public User findUserById(int id) {
		LOGGER.info("id");
		return userRepository.findUserById(id);
		//return userRepository.findUserById(id);
	}
}
