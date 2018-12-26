package com.cts.tshell.converter;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.core.convert.converter.Converter;

import com.cts.tshell.bean.NeoSkill;
import com.cts.tshell.bean.Skill;

public class NeoSkillToSkill implements Converter<NeoSkill, Skill> {

	@Override
	public Skill convert(NeoSkill neoSkill) {
		Skill skill = new Skill();
		skill.setId(Math.toIntExact(neoSkill.getId()));
		skill.setName(neoSkill.getName());
		skill.setActive(neoSkill.getActive());
		skill.setDescription(neoSkill.getDescription());
		skill.setImage(neoSkill.getImage());
		skill.setSearchCount(neoSkill.getSearchCount());
		skill.setTestCount(neoSkill.getTestCount());
		Date date1 = null;
		try {
			date1 = new SimpleDateFormat("yyyy-MM-dd").parse(neoSkill.getCreatedOn());
		} catch (ParseException e) {
			e.printStackTrace();
		}  
		skill.setCreatedOn(date1);
		return skill;
	}
}
