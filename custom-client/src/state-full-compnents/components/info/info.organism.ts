import { createDivElement, createHeadingElement } from '../../atoms/html-atom.js';

export function createInfoOrganism(): HTMLElement {
  const infoContainer = createDivElement({
    styleName: 'INFO_CONTAINER',
    eventReceiver: {
      eventDetail: 'MENU-BUTTON',
      currentState: 'transform:translateY(100%);',
      // possibleStates: [],
      receiverFn: (c: string): string => {
        if (c === 'transform:translateY(100%);') return 'transform:translateY(0%);';
        return 'transform:translateY(100%);';
      },
    },
  });
  const name = createHeadingElement({ styleName: 'INFO_NAME', textTag: 'h1', textContent: 'Andrés Arana C' });
  const description = createHeadingElement({
    styleName: 'INFO_DESCRIPTION',
    textTag: 'h2',
    textContent: 'JavaScript Developer',
  });

  infoContainer.append(name, description);
  return infoContainer;
}
