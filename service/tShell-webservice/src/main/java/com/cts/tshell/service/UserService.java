package com.cts.tshell.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cts.tshell.bean.User;
import com.cts.tshell.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Transactional
	public User findUserById(int id) {
		return userRepository.findById(id);
		//return userRepository.findUserById(id);
	}
}
