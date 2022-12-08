import * as atom from '../atoms/html-atom.js';

// ------------
export function createInfoOrganism(): HTMLElement {
  const infoContainer_DIV = atom.createDivElement({ styleName: 'INFO_CONTAINER' });
  const infoName_H1 = atom.createHeadingElement({
    styleName: 'INFO_NAME',
    textTag: 'h1',
    textContent: 'Andrés Arana C',
  });
  const infoDescription_H2 = atom.createHeadingElement({
    styleName: 'INFO_DESCRIPTION',
    textTag: 'h2',
    textContent: 'JavaScript Developer',
  });

  infoContainer_DIV.addEventListener('click', (ev: Event) => ev.stopPropagation());
  infoContainer_DIV.append(infoName_H1, infoDescription_H2);
  return infoContainer_DIV;
}
