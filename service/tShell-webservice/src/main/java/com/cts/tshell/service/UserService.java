package com.cts.tshell.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cts.tshell.bean.User;
import com.cts.tshell.repository.UserRepository;

@Service
public class UserService {

	private UserRepository userRepository;

	@Autowired
	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Transactional
	public User getUserByEmployeeId(int empId) {
		return userRepository.findByEmpId(empId);
	}

	public User getUserData(int empId) {
		return userRepository.findByEmpId(empId);
	}

	@Transactional
	public void savePassword(User user) {
		userRepository.save(user);
	
	@Autowired
	private UserRepository userRepository;
	
	@Transactional
	public User findUserById(int id) {
		return userRepository.findById(id);
		//return userRepository.findUserById(id);
	}
}
