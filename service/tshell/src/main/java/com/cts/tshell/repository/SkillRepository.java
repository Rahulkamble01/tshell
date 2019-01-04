package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cts.tshell.bean.Skill;



@Repository
public interface SkillRepository extends JpaRepository<Skill, Integer> {
	List<Skill> findPendingQuestionsCount();

	List<Skill> findSkillNames(@Param("searchSkillName") String searchSkillName);
	
	@Query("select s.name, s.searchCount from Skill s  where s.searchCount>0 order by searchCount desc")
	Page<Skill> findBySkillTop4(Pageable pageable);
	List<Skill> fetchRecentSkills();
	
	@Query("select s.name, s.testCount from Skill s  where s.testCount>0 order by testCount desc")
	Page<Skill> findBySkillTop5(Pageable pageable);

	@Query( "select count(s.id) from Skill s ")
	long totalSkillCount();
}

