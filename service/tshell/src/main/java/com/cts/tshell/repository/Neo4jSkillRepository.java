package com.cts.tshell.repository;

import java.util.Collection;
import java.util.List;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.cts.tshell.bean.NeoSkill;

@Repository
@RepositoryRestResource(collectionResourceRel = "neoSkill", path = "neoSkill")
public interface Neo4jSkillRepository extends Neo4jRepository<NeoSkill, Long>  {

	NeoSkill findByName(@Param("name")String name);
	
	Collection<NeoSkill> findByNameLike(@Param("name")String name);

    @Query("MATCH (s:NeoSkill)-[r:REQUIRED_KNOWLEDGE_OF]-(a:NeoSkill) RETURN s,r,a LIMIT {limit}")
//    @Query("MATCH (n:NeoSkill) return n LIMIT {limit}")
//	@Query("MATCH (n:NeoSkill)-[r]-(m) RETURN n,r,m LIMIT {limit}")
	Collection<NeoSkill> graph(@Param("limit") int limit);
    
    @Query("MATCH (a:NeoSkill {name: '{skillName}'})-[r:REQUIRED_KNOWLEDGE_OF]->(b:NeoSkill) RETURN b")
	List<NeoSkill> skillGraph(@Param("skillName")String skillName);


}
