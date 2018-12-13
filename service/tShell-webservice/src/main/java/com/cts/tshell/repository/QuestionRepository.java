package com.cts.tshell.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.tshell.bean.Question;

public interface QuestionRepository extends JpaRepository<Question, Integer>{

}
