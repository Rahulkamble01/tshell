package com.cts.tshell.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.cts.tshell.bean.User;

public interface UserRepository extends JpaRepository<User, Integer>{	
 User findUserById(@Param("id")int id);
	//User findUserById(@Param("id") int id);
}
