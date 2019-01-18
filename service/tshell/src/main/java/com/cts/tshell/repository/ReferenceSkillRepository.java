package com.cts.tshell.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cts.tshell.bean.ReferenceSkill;
/**
 * A condition evaluation report message that can logged or printed.
 * @author Adil Ansari
 * @author 729745
 * @since 1.0.0
 */
@Repository
public interface ReferenceSkillRepository extends JpaRepository<ReferenceSkill, Integer> {

	
	List<ReferenceSkill> findBySkillId(@Param("skillId") int skillId);

	void saveBySkillIdAndRefSkillId(int skillId, int refSkillId);

}
