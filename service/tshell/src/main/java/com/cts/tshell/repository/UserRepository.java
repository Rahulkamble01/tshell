package com.cts.tshell.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cts.tshell.bean.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	User findByEmpId(@Param("employeeId") int employeeId);
}
