package com.cts.tshell.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.tshell.bean.Option;

@Repository
public interface OptionRepository extends JpaRepository<Option, Integer> {

}
