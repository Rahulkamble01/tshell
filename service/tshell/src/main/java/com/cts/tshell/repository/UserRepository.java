package com.cts.tshell.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.tshell.bean.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	User findByEmployeeId(int employeeid);
}
