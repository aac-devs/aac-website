import '../../../helpers/htmlelement.extensions.js';
import '../../../helpers/css/string.extensions.js';
import '../../../helpers/document.extensions.js';
import {
  ButtonWithFunctionReturn,
  ElementWithStyleFunctionArrayReturn,
  InfoReturn,
} from '../../../helpers/interfaces.js';
import { createInfoSection } from './info/info-section.js';
import { createUlNavElement } from './ul/menu-ul.js';
import createMainHeaderButton from '../button/menu-button.js';

export default function mobileHeader(): HTMLElement {
  const headerElement: HTMLElement = globalThis.document.createElement('header');
  const navElement: HTMLElement = globalThis.document.createElement('nav');
  // const touch: HTMLElement = globalThis.document.createElement('div'); // TODO: dejar para el final
  const mainHeaderBrandElement: HTMLElement = globalThis.document.createElement('h1');

  let NAV_STYLES: string;
  let navState: VisibilityType = 'hidden';
  const HIDE_NAV = 'translateX(-100%)';
  const SHOW_NAV = 'translateX(0%)';

  const {
    buttonElement: mainHeaderButtonElement,
    stylesFunction: setMainHeaderButtonStyles,
  }: ButtonWithFunctionReturn = createMainHeaderButton(() => {
    NAV_STYLES =
      navState === 'hidden'
        ? NAV_STYLES.cssProperty('transform', SHOW_NAV)
        : NAV_STYLES.cssProperty('transform', HIDE_NAV);

    HTMLElement.prototype.setElementsStyles({ element: navElement, style: NAV_STYLES });
    setMainHeaderButtonStyles({ showBars: navState });
    navState = navState === 'hidden' ? 'visible' : 'hidden';
  });

  function setNavHidden() {
    navState = 'hidden';
    setMainHeaderButtonStyles({ showBars: 'visible' });
    HTMLElement.prototype.setElementsStyles({
      element: navElement,
      style: NAV_STYLES.cssProperty('transform', HIDE_NAV),
    });
  }

  const { infoElement, stylesFunction: setInfoSectionStyles }: InfoReturn = createInfoSection(setNavHidden);

  const { element: ulElement, styleFunctions: setLiUlElementStyles }: ElementWithStyleFunctionArrayReturn =
    createUlNavElement(setNavHidden);

  navElement.className = 'menu-nav';
  mainHeaderBrandElement.textContent = 'aac-devs';

  navElement.append(infoElement, ulElement);
  headerElement.append(navElement, mainHeaderButtonElement, mainHeaderBrandElement);

  function setElementsStyles() {
    const STYLES: ElementStyles = Document.prototype.getStyles();
    NAV_STYLES = STYLES['main-header-nav']!.cssProperty('transform', HIDE_NAV);

    HTMLElement.prototype.setElementsStyles(
      { element: headerElement, style: STYLES['main-header']! },
      { element: navElement, style: NAV_STYLES },
      { element: infoElement, style: STYLES['main-header-nav-info']! },
      { element: ulElement, style: STYLES['main-header-nav-ul']! },
      { element: mainHeaderBrandElement, style: STYLES['main-header-brand']! }
    );

    setInfoSectionStyles({
      NAME: STYLES['main-header-nav-info-name']!,
      FILTER: STYLES['main-header-nav-info-filter']!,
      DESCRIPTION: STYLES['main-header-nav-info-description']!,
      JS_LOGO: STYLES['main-header-nav-info-jslogo']!,
      LINKEDIN: STYLES['main-header-nav-info-linkedin']!,
      GITHUB: STYLES['main-header-nav-info-github']!,
    });

    setMainHeaderButtonStyles({ button: STYLES['main-header-button']!, showBars: STYLES['main-header-button-bars']! });

    setLiUlElementStyles.forEach((fn) => {
      fn({
        LIST_ITEM: STYLES['main-header-nav-ul-li']!,
        ANCHOR: STYLES['main-header-nav-ul-li-anchor']!,
        ICON: STYLES['main-header-nav-ul-li-anchor-icon']!,
      });
    });
  }

  function hideNav() {
    navElement.style.display = 'none';
    navState = 'hidden';
  }

  globalThis.document.addEventListener('styles', setElementsStyles);
  globalThis.addEventListener('resize', hideNav);

  setElementsStyles();
  navState = 'hidden';

  return headerElement;
}

// TODO: Renombrar el elemento ul (función), revisar todos los nombres de variables y constantes y refactorizar
// TODO: Revisar las interfaces y los types
