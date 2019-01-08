package com.cts.tshell.repository;


import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cts.tshell.bean.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
	User findByEmployeeId(String employeeid);

	User findByEmpId(@Param("employeeId") String employeeId);

List<User> findAllById(@Param("id") String userId);
	
	User getUserByEmail(String email);
	
	User getUserByEmployeeId(String userId);
	
	@Query("select count(u.id) from User u ")
	long totalUserCount();


}
