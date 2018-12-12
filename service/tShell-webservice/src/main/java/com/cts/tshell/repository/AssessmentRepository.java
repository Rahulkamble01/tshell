package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.cts.tshell.bean.Assessment;

public interface AssessmentRepository extends JpaRepository<Assessment, Integer>{
	
	List<Assessment> findTop5BySkill(@Param("skillId") int id);
<<<<<<< HEAD
	
	Assessment findById(int id);
=======
>>>>>>> ffc510c6f816d46d9d96b95fe168d669d46600c9

}
