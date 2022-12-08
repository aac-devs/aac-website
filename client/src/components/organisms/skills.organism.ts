import * as atom from '../atoms/html-atom.js';
import * as org from './index.js';

export function skillsOrganims(params: SkillType[]) {
  const skillsBody = globalThis.document.querySelector('.skills-body');

  const skillsContainer_DIV = atom.createDivElement({ styleName: 'SKILLS_CONTAINER' });

  const techSkillsList: TechSkillSet[] = Array.from(new Set(params.map((p) => p.skillType)));

  techSkillsList.forEach((techSkill) => {
    const skillList = params.filter((item: SkillType) => {
      if (item.skillType === techSkill) return item;
      else return;
    });
    if (skillList.length > 0) {
      const frame = org.hrSkillsSectionOrganism(techSkill)(skillList);
      skillsContainer_DIV.appendChild(frame);
    }
  });

  skillsBody?.appendChild(skillsContainer_DIV);
}
