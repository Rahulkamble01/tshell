package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.cts.tshell.bean.Skill;

public interface SkillRepository extends JpaRepository<Skill,Integer> {

	 List<Skill> fetchAllSkillQuestion(@Param("id")int id);
}
