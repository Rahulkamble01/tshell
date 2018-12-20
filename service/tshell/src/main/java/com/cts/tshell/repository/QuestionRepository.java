package com.cts.tshell.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.tshell.bean.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {

}
