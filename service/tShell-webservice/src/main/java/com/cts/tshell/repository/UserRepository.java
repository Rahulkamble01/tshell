package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.cts.tshell.bean.Assessment;
import com.cts.tshell.bean.User;

public interface UserRepository extends JpaRepository<User, Integer>{	
	
	User findById(int id);
	//User findUserById(@Param("id") int id);
}
