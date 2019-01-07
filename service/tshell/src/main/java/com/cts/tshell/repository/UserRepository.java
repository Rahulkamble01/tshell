package com.cts.tshell.repository;

import org.springframework.data.repository.CrudRepository;

import com.cts.tshell.bean.User;

public interface UserRepository extends CrudRepository<User, Integer> {

	User findByEmployeeId(int employeeID);

}
