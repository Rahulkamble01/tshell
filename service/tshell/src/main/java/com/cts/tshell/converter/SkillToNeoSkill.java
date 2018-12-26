package com.cts.tshell.converter;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.springframework.core.convert.converter.Converter;

import com.cts.tshell.bean.NeoSkill;
import com.cts.tshell.bean.Skill;

public abstract class SkillToNeoSkill implements Converter<Skill, NeoSkill> {

    @Override
    public NeoSkill convert(Skill skill) {
    	NeoSkill neoSkill = new NeoSkill();
      neoSkill.setId(Long.valueOf(skill.getId()));
//        if (StringUtils.isEmpty(skill.getId())) {
//        	neoSkill.setId(new Long(skill.getId()));
//        }
        neoSkill.setDescription(skill.getDescription());
        neoSkill.setName(skill.getName());
        neoSkill.setActive(skill.getActive());
        DateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd");
        neoSkill.setCreatedOn(dateFormat.format(skill.getCreatedOn()));
        neoSkill.setSearchCount(skill.getSearchCount());
        neoSkill.setTestCount(skill.getTestCount());
        neoSkill.setImage(skill.getImage());
        return neoSkill;
    }
}
