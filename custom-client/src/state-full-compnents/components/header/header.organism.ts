import getScreenSize from '../../../helpers/sizes.js';
import { createButtonElement, createHeaderElement, createHeadingElement } from '../../atoms/html-atom.js';
import { createInfoOrganism } from '../info/info.organism.js';
import { createSocialOrganims } from '../info/social.organism.js';
import { createIconMolecule } from '../nav/molecules/icon.molecule.js';
import { liItemsData } from '../nav/nav.organism.data.js';
import { createNavOrganism } from '../nav/nav.organism.js';
import * as pos from './header.containers.js';

export function createMainHeaderOrganism(): HTMLElement {
  let buttonState: pos.TypeButtonIcon = 'xmark';

  const header = createHeaderElement(pos.HEADER_PARAMS);
  const brand = createHeadingElement(pos.BRAND_PARAMS);
  const barsIcon = createIconMolecule(pos.BARS_ICON);
  const xmarkIcon = createIconMolecule(pos.XMARK_ICON);
  const button = createButtonElement({ ...pos.BUTTON_PARAMS, buttonType: 'button', tabindex: 1 });
  const nav = createNavOrganism(liItemsData);
  const info = createInfoOrganism();
  const social = createSocialOrganims();

  function updateHeaderState(ev?: Event) {
    if (ev) ev.stopPropagation();
    if (getScreenSize().device === 'mobile') {
      const { navStyle, socialStyle, infoStyle, barsBtnStyle, xmarkBtnStyle, newState } =
        pos.positioningContainers(buttonState);

      buttonState = newState;
      HTMLElement.prototype.setElementsStyles(
        { element: nav, style: navStyle },
        { element: social, style: socialStyle },
        { element: info, style: infoStyle },
        { element: barsIcon, style: barsBtnStyle },
        { element: xmarkIcon, style: xmarkBtnStyle }
      );
    }
  }

  button.addEventListener('click', (ev: Event) => updateHeaderState(ev));

  globalThis.document.addEventListener('nav-close', (ev: Event) => {
    buttonState = 'xmark';
    updateHeaderState(ev);
  });

  nav.addEventListener('click', (ev: Event) => ev.stopPropagation());

  updateHeaderState();
  globalThis.document.addEventListener('styles', () => {
    buttonState = 'xmark';
    updateHeaderState();
  });

  button.append(xmarkIcon, barsIcon);
  header.append(button, brand, nav, social, info);
  return header;
}
