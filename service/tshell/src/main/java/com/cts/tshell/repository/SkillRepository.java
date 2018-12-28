package com.cts.tshell.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cts.tshell.bean.Skill;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Integer>{
	@Query("select s.name, s.searchCount from Skill s  where s.searchCount>0 order by searchCount desc")
	Page<Skill> findBySkillTop4(Pageable pageable);

	Skill findByName(String skillname);

	List<Skill> fetchRecentSkills();
}

