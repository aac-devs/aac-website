import * as atom from '../atoms/html-atom.js';

type HrItem = Partial<BadgeType & VerifiedSkillType & SkillType>;

export function frameCardMolecule<P extends HrItem>(params: P): HTMLDivElement {
  const { title, image, skillTitle } = params;
  const card_DIV = atom.createDivElement({
    styleName: skillTitle ? 'SKILLS_CARD_CONTAINER' : 'HACKERRANK_CARD_CONTAINER',
  });
  const cardTitle_H3 = atom.createHeadingElement({
    textTag: 'h3',
    styleName: skillTitle ? 'SKILLS_CARD_TITLE' : 'HACKERRANK_CARD_TITLE',
    textContent: title || skillTitle,
  });
  const cardImage_IMG = atom.createImageElement({
    styleName: skillTitle ? 'SKILLS_CARD_IMAGE' : 'HACKERRANK_CARD_IMAGE',
    src: image || '',
    alt: `${title ? 'hackerrank' : 'skill'}-image`,
  });
  card_DIV.append(cardImage_IMG, cardTitle_H3);
  return card_DIV;
}
// TODO: frameCard son las tarjetitas de los badges, verified skills de HR y las tecnologías de SKILLS, buscar nuevo nombre
