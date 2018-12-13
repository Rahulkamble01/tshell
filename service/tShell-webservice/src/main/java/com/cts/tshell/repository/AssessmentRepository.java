package com.cts.tshell.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.tshell.bean.Assessment;

public interface AssessmentRepository extends JpaRepository<Assessment, Integer> {

	List<Assessment> findTop5BySkill(@Param("skillId") int id);

<<<<<<< HEAD
	
	Assessment findById(int id);

=======
	Assessment findById(int id);
>>>>>>> rel1
	 
	List<Assessment> findByUser(@Param("userId") int id);

}
