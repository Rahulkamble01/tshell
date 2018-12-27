package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cts.tshell.bean.Skill;

public interface SkillRepository extends JpaRepository<Skill, Integer> {
	
	@Query("select s.name, s.searchCount from Skill s  where s.searchCount>0 order by searchCount desc")
	Page<Skill> findBySkillTop4(Pageable pageable);
	
	//List<Skill> fetchTopSearchedSkills();

}
