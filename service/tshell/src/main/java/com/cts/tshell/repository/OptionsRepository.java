package com.cts.tshell.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.tshell.bean.Option;

public interface OptionsRepository extends JpaRepository<Option, Integer> {

}
