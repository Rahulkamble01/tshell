package com.cts.tshell.converter;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import com.cts.tshell.bean.NeoSkill;
import com.cts.tshell.bean.Skill;

@Component
public class SkillToNeoSkill implements Converter<Skill, NeoSkill> {
	
	@Override
    public NeoSkill convert(Skill skill) {
    	System.out.println("inside neoskill convertor");
    	NeoSkill neoSkill = new NeoSkill();
    	int id = skill.getId();
    	System.out.println("1");
//      neoSkill.setId(Long.valueOf(skill.getId()));
        if (id != 0 ) {
        	neoSkill.setId(new Long(skill.getId()));
        }
        neoSkill.setDescription(skill.getDescription());
        neoSkill.setName(skill.getName());
        neoSkill.setActive(skill.getActive());
        DateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd");
        neoSkill.setCreatedOn(dateFormat.format(skill.getCreatedOn()));
        neoSkill.setSearchCount(skill.getSearchCount());
        neoSkill.setTestCount(skill.getTestCount());
        neoSkill.setImage(skill.getImage());
        System.out.println(neoSkill);
        return neoSkill;
    }
}
