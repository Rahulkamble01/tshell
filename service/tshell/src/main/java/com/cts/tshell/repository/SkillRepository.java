package com.cts.tshell.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.tshell.bean.Skill;

@Repository
public interface SkillRepository  extends JpaRepository<Skill, Integer> {
	Skill findByName(String name);

	Skill findById(int id);
	
	
}








