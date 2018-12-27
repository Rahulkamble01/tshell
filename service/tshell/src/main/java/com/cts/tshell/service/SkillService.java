package com.cts.tshell.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	public void setSkillRepository(SkillRepository skillRepository) {
		this.skillRepository = skillRepository;
	}

	@Autowired
	public void setNeo4jSkillRepository(Neo4jSkillRepository neo4jSkillRepository) {
		this.neo4jSkillRepository = neo4jSkillRepository;
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
	public void addOrUpdateNeoSkill(NeoSkill neoSkill) {
		System.out.println("NeoSkill Updated ");
		neo4jSkillRepository.save(neoSkill);
	}

	@Transactional
	public void addOrUpdateSkill(Skill skill) {
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
		System.out.println("sdfsd" + limit);
		Collection<NeoSkill> result = neo4jSkillRepository.graph(limit);
		System.out.println("result " + result);
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
			System.out.println("NeoSkill " + neoSkill);
			nodes.add(map("name", neoSkill.getName(), "description", neoSkill.getDescription(), "image",
					neoSkill.getImage(), "active", neoSkill.getActive(), "createdOn", neoSkill.getCreatedOn()));
			int target = i;
			i++;
			for (SkillRequiredRelationship relationship : neoSkill.getSkillRequiredRelationships()) {
				Map<String, Object> rSkill = map("name", relationship.getSkill2().getName(), "description",
						relationship.getSkill2().getDescription(), "image", relationship.getSkill2().getImage(),
						"active", relationship.getSkill2().getActive(), "createdOn",
						relationship.getSkill2().getCreatedOn());
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

	private Map<String, Object> map(String key1, Object value1, String key2, Object value2) {
		Map<String, Object> result = new HashMap<String, Object>(2);
		result.put(key1, value1);
		result.put(key2, value2);
		return result;
	}

	private Map<String, Object> map(String key1, Object value1, String key2, Object value2, String key3, Object value3,
			String key4, Object value4, String key5, Object value5) {
		Map<String, Object> result = new HashMap<String, Object>(2);
		result.put(key1, value1);
		result.put(key2, value2);
		result.put(key3, value3);
		result.put(key4, value4);
		result.put(key5, value5);
		return result;
	}

}
