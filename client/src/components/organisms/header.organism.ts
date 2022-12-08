import * as atom from '../atoms/html-atom.js';
import * as mol from '../molecules/index.js';
import * as org from './index.js';

import * as data from '../data/index.js';
import * as pos from '../helper-functions/header.containers.js';

import getScreenSize from '../../helpers/screen-size.js';

// ------------
// TODO: Parámetro provisional, verificar si va algo más que los valores de las redes sociales.
export function createMainHeaderOrganism(defaults: DefaultsType): HTMLElement {
  let buttonState: pos.TypeButtonIcon = 'xmark';

  const headerContainer_HEADER = atom.createHeaderElement(pos.HEADER_PARAMS);
  const brand_H1 = atom.createHeadingElement(pos.BRAND_PARAMS);
  const showHideNav_BUTTON = atom.createButtonElement({ ...pos.BUTTON_PARAMS, buttonType: 'button', tabindex: 1 });

  const buttonBarsIcon_DIV = mol.createIconMolecule(pos.BARS_ICON);
  const buttonXmarkIcon_DIV = mol.createIconMolecule(pos.XMARK_ICON);

  const navContainer_NAV = org.createNavOrganism(data.liItemsData);
  const infoContainer_DIV = org.createInfoOrganism();
  const socialContainer_DIV = org.createSocialOrganims(defaults.social);

  function updateHeaderState(ev?: Event) {
    if (ev) ev.stopPropagation();
    if (getScreenSize().device === 'mobile') {
      const { navStyle, socialStyle, infoStyle, barsBtnStyle, xmarkBtnStyle, newState } =
        pos.positioningContainers(buttonState);

      buttonState = newState;
      HTMLElement.prototype.setElementsStyles(
        { element: navContainer_NAV, style: navStyle },
        { element: socialContainer_DIV, style: socialStyle },
        { element: infoContainer_DIV, style: infoStyle },
        { element: buttonBarsIcon_DIV, style: barsBtnStyle },
        { element: buttonXmarkIcon_DIV, style: xmarkBtnStyle }
      );
    }
  }

  showHideNav_BUTTON.addEventListener('click', (ev: Event) => updateHeaderState(ev));

  globalThis.document.addEventListener('nav-close', (ev: Event) => {
    buttonState = 'xmark';
    updateHeaderState(ev);
  });

  navContainer_NAV.addEventListener('click', (ev: Event) => ev.stopPropagation());

  updateHeaderState();
  globalThis.document.addEventListener('styles', () => {
    buttonState = 'xmark';
    updateHeaderState();
  });

  showHideNav_BUTTON.append(buttonXmarkIcon_DIV, buttonBarsIcon_DIV);
  headerContainer_HEADER.append(showHideNav_BUTTON, brand_H1, navContainer_NAV, socialContainer_DIV, infoContainer_DIV);
  return headerContainer_HEADER;
}
