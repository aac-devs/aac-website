import '../../../../helpers/htmlelement.extensions.js';
import '../../../../helpers/string.extensions.js';
import getScreenSize from '../../../../helpers/sizes.js';
import menuStyles, { VisibilityType } from '../../../styles/menu-styles.js';
import { ElementWithStyleFunctionArrayReturn, InfoReturn } from '../../../../helpers/interfaces.js';
import { createInfoSection } from './info/info-section.js';
import { createMenuItems } from './ul/menu-ul.js';
import createMenuButton, { ButtonWithFunctionReturn } from '../button/menu-button.js';

export default function mobileHeader() {
  const header: HTMLElement = globalThis.document.createElement('header');
  const nav: HTMLElement = globalThis.document.createElement('nav');
  // const touch: HTMLElement = globalThis.document.createElement('div'); // TODO: dejar para el final
  const brand: HTMLElement = globalThis.document.createElement('h1');

  let navStyle: string;
  let navState: VisibilityType = 'hidden';
  const HIDE_NAV = 'translateX(-100%)';
  const SHOW_NAV = 'translateX(0%)';
  const HIDE_SHADOW = 'none';
  const SHOW_SHADOW = '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)';

  const { button: btn, styleFn: setButtonStyles }: ButtonWithFunctionReturn = createMenuButton(() => {
    navStyle =
      navState === 'hidden'
        ? navStyle.css('transform', SHOW_NAV).css('box-shadow', SHOW_SHADOW)
        : navStyle.css('transform', HIDE_NAV).css('box-shadow', HIDE_SHADOW);

    setButtonStyles({ showBars: navState });
    navState = navState === 'hidden' ? 'visible' : 'hidden';
    nav.setAttribute('style', navStyle);
  });

  const { info, setStyles: setInfoStyles }: InfoReturn = createInfoSection(() => {
    navState = 'hidden';
    nav.setAllStyles(navStyle.css('transform', HIDE_NAV).css('box-shadow', HIDE_SHADOW));
    setButtonStyles({ showBars: 'visible' });
  });

  const { element: ul, styleFns: listItemFunction }: ElementWithStyleFunctionArrayReturn = createMenuItems(() => {
    navState = 'hidden';
    nav.setAllStyles(navStyle.css('transform', HIDE_NAV).css('box-shadow', HIDE_SHADOW));
    setButtonStyles({ showBars: 'visible' });
  });

  nav.className = 'menu-nav';
  brand.innerHTML = 'aac-devs';

  nav.append(info, ul);
  header.append(nav, btn, brand);

  function updateElements() {
    const { height, width, orientation, device } = getScreenSize();
    const formatSize = orientation === 'portrait-primary' ? height : width;
    globalThis.document.getElementsByTagName('html')[0].style.fontSize = `${formatSize / 16}%`;

    if (device === 'desktop') return;

    const {
      own: HEADER_STYLES,
      button: { own: MENU_BUTTON_STYLES, showBars: BUTTON_SHOW_BARS },
      brand: BRAND_STYLES,
      nav: {
        own: NAV_STYLES,
        info: {
          own: INFO_STYLES,
          filter: FILTER_STYLES,
          name: NAME_STYLES,
          description: DESCRIPTION_STYLES,
          jsLogo: JS_LOGO_STYLES,
          linkedin: LINKEDIN_STYLES,
          github: GITHUB_STYLES,
        },
        ul: {
          own: UL_STYLES,
          li: {
            own: LI_STYLES,
            anchor: { own: A_STYLES, icon: I_STYLES },
          },
        },
      },
    } = menuStyles().header;

    navStyle = NAV_STYLES.css('transform', HIDE_NAV).css('box-shadow', HIDE_SHADOW);
    header.setAllStyles(HEADER_STYLES);
    nav.setAllStyles(navStyle);
    info.setAllStyles(INFO_STYLES);
    ul.setAllStyles(UL_STYLES);
    brand.setAllStyles(BRAND_STYLES);

    setInfoStyles({
      name: NAME_STYLES,
      filter: FILTER_STYLES,
      description: DESCRIPTION_STYLES,
      jsLogo: JS_LOGO_STYLES,
      linkedin: LINKEDIN_STYLES,
      github: GITHUB_STYLES,
    });

    setButtonStyles({ button: MENU_BUTTON_STYLES, showBars: BUTTON_SHOW_BARS });

    listItemFunction.forEach((fn) => {
      fn({ li: LI_STYLES, anchor: A_STYLES, icon: I_STYLES });
    });

    // touch.setAttribute('style', styles['touch-shown']); // cambiar a hidden
  }

  let timeOut: NodeJS.Timeout;

  globalThis.addEventListener('resize', () => {
    clearTimeout(timeOut);
    nav.style.display = 'none';
    navState = 'hidden';

    timeOut = setTimeout(() => {
      updateElements();
    }, 100);
  });

  nav.style.display = 'none';
  updateElements();
  return header;
}
