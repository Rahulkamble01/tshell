package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.cts.tshell.bean.User;

public interface UserReposiory extends JpaRepository<User, Integer>{
	User fetchByEmployeeId(@Param("employeeId")int employeeId);
	User findByEmployeeId(int employeeid);
}
