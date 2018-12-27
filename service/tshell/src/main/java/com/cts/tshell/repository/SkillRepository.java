package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cts.tshell.bean.Skill;
@Repository
public interface SkillRepository extends JpaRepository<Skill, Integer>{
	


	@Query("select s.name, s.testCount from Skill s  where s.testCount>0 order by testCount desc")
	Page<Skill> findBySkillTop5(Pageable pageable);
	


}

