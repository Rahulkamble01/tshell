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
	public User reset(User user)  {
		return userRepository.save(user);
	}
	@Transactional
	public User getUser(int empId)  {
		return  (User) userRepository.findByEmpId(empId);
	}
}
