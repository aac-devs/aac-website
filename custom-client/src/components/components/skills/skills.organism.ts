import { createDivElement } from '../../atoms/html-atom.js';
import { frameOrganism } from '../reusable/frame.organism.js';

export function skillsOrganims(params: SkillType[]) {
  const skillsBody = globalThis.document.querySelector('.skills-body');
  const skillsContainer = createDivElement({ styleName: 'SKILLS_CONTAINER' });
  const techSkillsList: TechSkillSet[] = Array.from(new Set(params.map((p) => p.skillType)));

  techSkillsList.forEach((techSkill) => {
    const skillList = params.filter((item: SkillType) => {
      if (item.skillType === techSkill) return item;
    });
    if (skillList.length > 0) {
      const frame = frameOrganism(techSkill)(skillList);
      skillsContainer.appendChild(frame);
    }
  });

  skillsBody?.appendChild(skillsContainer);
}
