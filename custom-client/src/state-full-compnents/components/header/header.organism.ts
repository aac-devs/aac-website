import {
  createButtonElement,
  createHeaderElement,
  createHeadingElement,
  GlobalParams,
  HeadingParams,
} from '../../atoms/html-atom.js';
import { createInfoOrganism } from '../info/info.organism.js';
import { createSocialOrganims } from '../info/social.organism.js';
import { createIconMolecule } from '../nav/molecules/icon.molecule.js';
import { liItemsData } from '../nav/nav.organism.data.js';
import { createNavOrganism } from '../nav/nav.organism.js';

const BARS_ICON = {
  className: 'fa-solid fa-bars',
  styleName: {
    container: 'HEADER_BUTTON_ICON_CONTAINER',
    icon: 'HEADER_BUTTON_ICON',
  },
};

const XMARK_ICON = {
  className: 'fa-solid fa-xmark',
  styleName: {
    container: 'HEADER_BUTTON_ICON_CONTAINER',
    icon: 'HEADER_BUTTON_ICON',
  },
};

const HEADER_PARAMS: GlobalParams = { styleName: 'HEADER_CONTAINER' };
const BRAND_PARAMS: HeadingParams = { styleName: 'HEADER_BRAND', textTag: 'h1', textContent: 'aac-devs' };
const BUTTON_PARAMS: GlobalParams = {
  styleName: 'HEADER_BUTTON',
  eventEmmiter: { eventDetail: 'MENU-BUTTON', eventType: 'click' },
};

export function createMainHeaderOrganism(): HTMLElement {
  const header = createHeaderElement(HEADER_PARAMS);
  const brand = createHeadingElement(BRAND_PARAMS);
  const barsIcon = createIconMolecule(BARS_ICON);
  const xmarkIcon = createIconMolecule(XMARK_ICON);
  const button = createButtonElement({
    ...BUTTON_PARAMS,
    buttonType: 'button',
    eventReceiver: {
      eventDetail: 'MENU-BUTTON',
      currentState: 'bars',

      // possibleStates: ['bars', 'xmarK'],
      receiverFn: (c: string): string => {
        if (c === 'bars') {
          button.removeChild(barsIcon);
          button.appendChild(xmarkIcon);
          return 'xmarK';
        }
        button.removeChild(xmarkIcon);
        button.appendChild(barsIcon);
        return 'bars';
      },
    },
  });
  button.appendChild(barsIcon);
  const nav = createNavOrganism(liItemsData);
  const info = createInfoOrganism();
  const social = createSocialOrganims();

  header.append(button, brand, nav, social, info);
  return header;
}
