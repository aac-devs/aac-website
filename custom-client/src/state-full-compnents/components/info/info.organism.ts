import { createDivElement, createHeadingElement } from '../../atoms/html-atom.js';

export function createInfoOrganism(): HTMLElement {
  const infoContainer = createDivElement({ styleName: 'INFO_CONTAINER' });
  const name = createHeadingElement({ styleName: 'INFO_NAME', textTag: 'h1', textContent: 'Andrés Arana C' });
  const description = createHeadingElement({
    styleName: 'INFO_DESCRIPTION',
    textTag: 'h2',
    textContent: 'JavaScript Developer',
  });

  infoContainer.addEventListener('click', (ev: Event) => ev.stopPropagation());
  infoContainer.append(name, description);
  return infoContainer;
}
