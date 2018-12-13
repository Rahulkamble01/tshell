package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cts.tshell.bean.Skill;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Integer> {

	@Query(value = "SELECT * FROM skill order by sk_id DESC LIMIT 5 ", nativeQuery = true)
	List<Skill> findById();
}
