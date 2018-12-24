package com.cts.tshell.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cts.tshell.bean.NeoSkill;
import com.cts.tshell.bean.Skill;
import com.cts.tshell.bean.SkillRequiredRelationship;
import com.cts.tshell.repository.Neo4jSkillRepository;
import com.cts.tshell.repository.SkillRepository;

@Service
public class SkillService {
	private static final Logger LOGGER = LoggerFactory.getLogger(SkillService.class);
	private SkillRepository skillRepository;
	private Neo4jSkillRepository neo4jSkillRepository;

	@Autowired
	public void setNeo4jSkillRepository(Neo4jSkillRepository neo4jSkillRepository) {
		this.neo4jSkillRepository = neo4jSkillRepository;
	}

	@Autowired
	public void setSkillRepository(SkillRepository skillRepository) {
		this.skillRepository = skillRepository;
	}

	@org.springframework.transaction.annotation.Transactional
	public List<Skill> getSkills() {
		LOGGER.info("Starting getSkill() inside SkillRepository");
		return (List<Skill>) skillRepository.findAll();
	}

	@Transactional
	public Skill getSkillByName(String skillname) {
		LOGGER.info("Starting getSkillbyName() inside SkillService");
		LOGGER.debug("recived skillname from controller: " + skillname);
		Skill result = skillRepository.findByName(skillname);
		return result;
	}

	@Transactional
	public void updateSkillSearch(Skill skill) {
		LOGGER.debug("Updating {}'s SearchCount from {} to {}", skill.getName(), skill.getSearchCount(),
				skill.getSearchCount() + 1);
		skill.setSearchCount(skill.getSearchCount() + 1);
		LOGGER.info("Skill Updated");
		LOGGER.debug("Updated Skill", skill);
		skillRepository.save(skill);
	}

	@Transactional
	public void updateSkill(Skill skill) {
		LOGGER.debug("Updating {}'s SearchCount from {} to {}", skill.getName());
		LOGGER.info("Skill Updated");
		LOGGER.debug("Updated Skill", skill);
		skillRepository.save(skill);
	}
	
	@Transactional
	public NeoSkill findByName(String name) {
		NeoSkill result = neo4jSkillRepository.findByName(name);
		return result;
	}

	@Transactional
	public Collection<NeoSkill> findByNameLike(String name) {
		Collection<NeoSkill> result = neo4jSkillRepository.findByNameLike(name);
		return result;
	}

	@Transactional
	public Map<String, Object> graph(int limit) {
		System.out.println("sdfsd"+limit);
		System.out.println("Hello\n" + neo4jSkillRepository.graph(limit));
		Collection<NeoSkill> result = neo4jSkillRepository.graph(limit);
		System.out.println("result "+result );
		return toD3Format(result);
	}

	@Transactional
	private Map<String, Object> toD3Format(Collection<NeoSkill> neoSkills) {
		List<Map<String, Object>> nodes = new ArrayList<>();
		List<Map<String, Object>> rels = new ArrayList<>();
		int i = 0;
		Iterator<NeoSkill> result = neoSkills.iterator();
		while (result.hasNext()) {
			NeoSkill neoSkill = result.next();
			System.out.println("NeoSkill "+neoSkill);
			nodes.add(map("name", neoSkill.getName(), "label", "skill"));
			int target = i;
			i++;
			// for (Role role : movie.getRoles())
			for (SkillRequiredRelationship relationship : neoSkill.getSkillRequiredRelationships()) {
				// Map<String, Object> actor = map("title",
				// role.getPerson().getName(), "label", "actor");
				Map<String, Object> rSkill = map("name", relationship.getSkill2().getName(), "label", "skill");
				int source = nodes.indexOf(rSkill);
				if (source == -1) {
					nodes.add(rSkill);
					source = i++;
				}
				rels.add(map("source", source, "target", target));
			}
		}
		return map("nodes", nodes, "links", rels);
	}

	@Transactional
	private Map<String, Object> map(String key1, Object value1, String key2, Object value2) {
		Map<String, Object> result = new HashMap<String, Object>(2);
		result.put(key1, value1);
		result.put(key2, value2);
		return result;
	}
	

}
