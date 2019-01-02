package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cts.tshell.bean.Assessment;



@Repository
public interface AssessmentRepository extends JpaRepository<Assessment, Integer>{

	@Query("select count(a.id) from Assessment a ")
	List<Assessment> totalAssessments();
}
