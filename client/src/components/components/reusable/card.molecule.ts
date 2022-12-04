import { createDivElement, createHeadingElement, createImageElement } from '../../atoms/html-atom.js';

type HrItem = Partial<BadgeType & VerifiedSkillType & SkillType>;

export function frameCardMolecule<P extends HrItem>(params: P): HTMLElement {
  const { badgeTitle, verTitle, skillTitle, badgeImage, verImage, skillImage } = params;
  const card = createDivElement({
    styleName: skillTitle ? 'SKILLS_CARD_CONTAINER' : 'HACKERRANK_CARD_CONTAINER',
  });
  const title = createHeadingElement({
    textTag: 'h3',
    styleName: skillTitle ? 'SKILLS_CARD_TITLE' : 'HACKERRANK_CARD_TITLE',
    textContent: badgeTitle || verTitle || skillTitle,
  });
  const image = createImageElement({
    styleName: skillTitle ? 'SKILLS_CARD_IMAGE' : 'HACKERRANK_CARD_IMAGE',
    src: badgeImage || verImage || skillImage || '',
    alt: 'image',
  });
  card.append(image, title);
  return card;
}
