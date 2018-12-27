package com.cts.tshell.repository;

import org.springframework.data.domain.Page;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cts.tshell.bean.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {

	Question fetchAllQuestionDetails(@Param("questionId") int questionId);
	/*
	 * Mentioning the query using @Query annotation and passing the Pageable object
	 * to get the limited row from database
	 */
	@Query("select q from Question q " + "left join q.topicList t " + "left join q.questionDifficultyLevel "
			+ "left join q.questionAnswerType " + "left join q.optionList " + "where q.status ='Pending' "
			+ "and t.skill.id = :skillId " + "order by q.createdDate asc ")
	public Page<Question> findReviewQuestion(@Param("skillId") int skillId, Pageable pageable);

}
