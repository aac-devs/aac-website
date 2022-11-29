import { createAnchorElement, createDivElement, createHeadingElement } from '../../atoms/html-atom.js';
import { createIconMolecule } from '../nav/molecules/icon.molecule.js';

export function projectCardMolecule(params: ProjectType): HTMLElement {
  const card = createDivElement({ styleName: 'PROJECT_CARD_CONTAINER' });
  const filter = createDivElement({ styleName: 'PROJECT_CARD_FILTER' });
  const elemContainer = createDivElement({ styleName: 'PROJECT_ELEMENTS_CONTAINER' });
  const title = createHeadingElement({
    styleName: 'PROJECT_CARD_TITLE',
    textTag: 'h1',
    textContent: params.projectTitle,
  });
  card.style.setProperty('background-image', `url(${params.projectImage})`);

  const aGithub = createAnchorElement({
    href: params.projectSocialMediaLinks.github,
    styleName: 'PROJECT_CARD_GITHUB_ANCHOR',
  });
  const aLink = createAnchorElement({
    href: params.projectSocialMediaLinks.app,
    styleName: 'PROJECT_CARD_APP_ANCHOR',
  });
  const iconGithub = createIconMolecule({
    className: 'fa-solid fa-code-compare',
    styleName: { container: 'PROJECT_CARD_ICON_CONTAINER', icon: 'PROJECT_CARD_ICON' },
  });
  const iconLink = createIconMolecule({
    className: 'fa-solid fa-arrow-up-right-from-square',
    styleName: { container: 'PROJECT_CARD_ICON_CONTAINER', icon: 'PROJECT_CARD_ICON' },
  });
  aGithub.appendChild(iconGithub);
  aLink.appendChild(iconLink);
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const dateText = createHeadingElement({
    styleName: 'PROJECT_CARD_DATE',
    textTag: 'h5',
    textContent: `${months[params.projectDate.getMonth()]} / ${params.projectDate.getFullYear()}`,
  });
  const descContainer = createDivElement({ styleName: 'PROJECT_CARD_DESCRIPTION_CONTAINER' });
  if (params.projectDescription.front) {
    const descFront = createHeadingElement({
      styleName: 'PROJECT_CARD_DESCRIPTION_TEXT',
      textTag: 'p',
      textContent: `${params.projectDescription.front}`,
    });
    descContainer.appendChild(descFront);
  }
  if (params.projectDescription.back) {
    const descBack = createHeadingElement({
      styleName: 'PROJECT_CARD_DESCRIPTION_TEXT',
      textTag: 'p',
      textContent: `${params.projectDescription.back}`,
    });
    descContainer.appendChild(descBack);
  }
  if (params.projectDescription.other) {
    const descOther = createHeadingElement({
      styleName: 'PROJECT_CARD_DESCRIPTION_TEXT',
      textTag: 'p',
      textContent: `${params.projectDescription.other}`,
    });
    descContainer.appendChild(descOther);
  }

  title.appendChild(dateText);
  elemContainer.append(title, descContainer, aGithub, aLink);
  card.append(filter, elemContainer);
  return card;
}
