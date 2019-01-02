package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cts.tshell.bean.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	User findByEmpId(@Param("employeeId") int employeeId);


	
	User getUserByEmail(String email);
	
	User getUserByEmployeeId(int userId);
	
	@Query("select count(u.id) from User u ")
	List<User> totalUser();

}
