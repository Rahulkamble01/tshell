package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cts.tshell.bean.Question;

public interface QuestionRepository extends JpaRepository<Question, Integer> {
	
	@Query(" select count(q.id),s.name from Question q " + 
			" join q.createdUser u " + 
			" join u.skills s " + 
			" join s.topics t join t.questions " + 
			" where u.employeeId = :employeeId and t.id=q.id  group by s.name")
	List<Question> findTotalQuestionContributedById(@Param("employeeId") int employeeId);
	
	@Query("select count(q.id) from Question q")
	long totalQuestionsCount();

}
