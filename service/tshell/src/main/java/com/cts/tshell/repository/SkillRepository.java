package com.cts.tshell.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.cts.tshell.bean.Skill;

@Repository
public interface SkillRepository extends CrudRepository<Skill, Integer>{
	
	@Query(name="select distinct s from Skill s left join fetch s.topics where s.id=:skillId")
	Skill findSkillById(@Param("skillId")int id);
}
