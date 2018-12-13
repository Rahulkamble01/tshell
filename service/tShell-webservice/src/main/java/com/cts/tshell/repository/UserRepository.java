package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;

import com.cts.tshell.bean.Assessment;
import com.cts.tshell.bean.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	User findByEmpId(int empId);
public interface UserRepository extends JpaRepository<User, Integer>{	
	
	User findById(int id);
	//User findUserById(@Param("id") int id);
}
