import { createAnchorElement, createDivElement, createHeadingElement } from '../atoms/html-atom.js';
import { createIconMolecule } from './icon.molecule.js';

export function projectCardMolecule(params: ProjectType): HTMLElement {
  const card = createDivElement({ styleName: 'PROJECT_CARD_CONTAINER' });
  const filter = createDivElement({ styleName: 'PROJECT_CARD_FILTER' });
  const elemContainer = createDivElement({ styleName: 'PROJECT_ELEMENTS_CONTAINER' });
  const title = createHeadingElement({
    styleName: 'PROJECT_CARD_TITLE',
    textTag: 'h1',
    textContent: params.title,
  });

  card.style.setProperty('background-image', `url(${params.image})`);

  const aGithub = createAnchorElement({
    href: params.links.github,
    styleName: 'PROJECT_CARD_GITHUB_ANCHOR',
    target: '_blank',
  });
  const aLink = createAnchorElement({
    href: params.links.app,
    styleName: 'PROJECT_CARD_APP_ANCHOR',
    target: '_blank',
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
  const dateText = createHeadingElement({
    styleName: 'PROJECT_CARD_DATE',
    textTag: 'h5',
    textContent: params.date,
  });
  const descContainer = createDivElement({ styleName: 'PROJECT_CARD_DESCRIPTION_CONTAINER' });
  if (params.description.front) {
    const descFront = createHeadingElement({
      styleName: 'PROJECT_CARD_DESCRIPTION_TEXT',
      textTag: 'p',
      textContent: `${params.description.front}`,
    });
    descContainer.appendChild(descFront);
  }
  if (params.description.back) {
    const descBack = createHeadingElement({
      styleName: 'PROJECT_CARD_DESCRIPTION_TEXT',
      textTag: 'p',
      textContent: `${params.description.back}`,
    });
    descContainer.appendChild(descBack);
  }
  if (params.description.other) {
    const descOther = createHeadingElement({
      styleName: 'PROJECT_CARD_DESCRIPTION_TEXT',
      textTag: 'p',
      textContent: `${params.description.other}`,
    });
    descContainer.appendChild(descOther);
  }

  globalThis.document.addEventListener('styles', () => {
    card.style.setProperty('background-image', `url(${params.image})`);
  });

  title.appendChild(dateText);
  elemContainer.append(title, descContainer, aGithub, aLink);
  card.append(filter, elemContainer);
  return card;
}
