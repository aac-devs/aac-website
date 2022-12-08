import * as atom from '../atoms/html-atom.js';
import * as mol from '../molecules/index.js';

export function hrSkillsSectionOrganism(sectionTitle: 'Badges' | 'Verified Skills' | TechSkillSet) {
  return function (hrSkillsList_PARAMS: BadgeType[] | VerifiedSkillType[] | SkillType[]): HTMLElement {
    const hrSkillsSectionContainer_SECTION = atom.createSectionElement({
      styleName:
        sectionTitle === 'Badges' || sectionTitle === 'Verified Skills'
          ? 'HACKERRANK_SECTION_CONTAINER'
          : 'SKILLS_SECTION_CONTAINER',
    });
    const hrSkillsListItems_UL = atom.createUlElement({
      styleName:
        sectionTitle === 'Badges' || sectionTitle === 'Verified Skills' ? 'HACKERRANK_SECTION_UL' : 'SKILLS_SECTION_UL',
    });
    const hrSkillsTitle_H1 = atom.createHeadingElement({
      styleName:
        sectionTitle === 'Badges' || sectionTitle === 'Verified Skills'
          ? 'HACKERRANK_SECTION_TITLE'
          : 'SKILLS_SECTION_TITLE',
      textTag: 'h1',
      textContent: sectionTitle,
    });

    hrSkillsList_PARAMS.forEach((hrSkillsItem) => {
      const hrSkillsCard_DIV = mol.frameCardMolecule(hrSkillsItem);
      hrSkillsListItems_UL.appendChild(hrSkillsCard_DIV);
    });

    hrSkillsSectionContainer_SECTION.append(hrSkillsTitle_H1, hrSkillsListItems_UL);
    return hrSkillsSectionContainer_SECTION;
  };
}
