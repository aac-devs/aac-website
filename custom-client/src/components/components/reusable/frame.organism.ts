import { createDivElement, createHeadingElement, createUlElement } from '../../atoms/html-atom.js';
import { frameCardMolecule } from './card.molecule.js';

export function frameOrganism(sectionTitle: 'Badges' | 'Verified Skills' | TechSkillSet) {
  return function (params: BadgeType[] | VerifiedSkillType[] | SkillType[]): HTMLElement {
    const frameContainer = createDivElement({
      styleName:
        sectionTitle === 'Badges' || sectionTitle === 'Verified Skills'
          ? 'HACKERRANK_SECTION_CONTAINER'
          : 'SKILLS_SECTION_CONTAINER',
    });
    const frameUl = createUlElement({
      styleName:
        sectionTitle === 'Badges' || sectionTitle === 'Verified Skills' ? 'HACKERRANK_SECTION_UL' : 'SKILLS_SECTION_UL',
    });
    const frameTitle = createHeadingElement({
      styleName:
        sectionTitle === 'Badges' || sectionTitle === 'Verified Skills'
          ? 'HACKERRANK_SECTION_TITLE'
          : 'SKILLS_SECTION_TITLE',
      textTag: 'h1',
      textContent: sectionTitle,
    });

    params.forEach((p) => {
      const card = frameCardMolecule(p);
      frameUl.appendChild(card);
    });

    frameContainer.append(frameTitle, frameUl);
    return frameContainer;
  };
}
