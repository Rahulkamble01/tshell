package com.cts.tshell.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import com.cts.tshell.bean.Skill;

public interface SkillRepository extends JpaRepository<Skill, Integer> {
	List<Skill> findPendingQuestionsCount();

	List<Skill> findSkillNames(@Param("searchSkillName") String searchSkillName);

	/*int findSkillId(@Param("SkillName") String SkillName);*/

	/*
	 * @Query(value =
	 * "SELECT max(avg_sal), min(avg_sal) FROM (SELECT dept , avg(salary) as avg_sal "
	 * + "from Employee  GROUP BY dept HAVING dept in ?1) ", nativeQuery = true)
	 */

	/*
	 * @Query(value =
	 * "select count(*),sk_id,sk_name,sk_active,sk_description,sk_image,sk_search_count,sk_test_count from skill s INNER JOIN topic t on s.sk_id=t.tp_sk_id "
	 * + "INNER JOIN topic_question on tp_id=tq_tp_id " +
	 * "INNER JOIN question on qu_id=tq_qu_id " +
	 * "where qu_status='P' GROUP BY sk_name ", nativeQuery = true) List<Skill>
	 * findPendingQuestionsCount();
	 */
}
