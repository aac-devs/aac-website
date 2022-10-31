import '../../../../helpers/htmlelement.extensions.js';
import '../../../../helpers/string.extensions.js';
import getScreenSize from '../../../../helpers/sizes.js';
import menuStyles, { MenuElementStyles } from '../../../styles/menu-styles.js';
import { ElementWithStyleFunctionArrayReturn, InfoReturn } from '../../../../helpers/interfaces.js';
import { createInfoSection } from './info/info-section.js';
import { createMenuItems } from './ul/menu-ul.js';
import createMenuButton, { ButtonWithFunctionReturn } from '../button/menu-button.js';

export default function mobileHeader() {
  const header: HTMLElement = globalThis.document.createElement('header');
  const nav: HTMLElement = globalThis.document.createElement('nav');
  const touch: HTMLElement = globalThis.document.createElement('div');

  let navStyle: string;
  let navState: 'visible' | 'hidden' = 'hidden';
  const HIDE_NAV = 'translateX(-100%)';
  const SHOW_NAV = 'translateX(0%)';
  const HIDE_SHADOW = 'none';
  const SHOW_SHADOW = '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)';

  const { button: btn, styleFn: setButtonStyles }: ButtonWithFunctionReturn = createMenuButton(() => {
    if (navState === 'hidden') {
      navState = 'visible';
      navStyle = navStyle.css('transform', SHOW_NAV).css('box-shadow', SHOW_SHADOW);
      setButtonStyles({
        bars: 'hidden',
        xmark: 'visible',
      });
    } else {
      navState = 'hidden';
      navStyle = navStyle.css('transform', HIDE_NAV).css('box-shadow', HIDE_SHADOW);
      setButtonStyles({
        bars: 'visible',
        xmark: 'hidden',
      });
    }
    nav.setAttribute('style', navStyle);
  });

  const { info, setStyles: setInfoStyles }: InfoReturn = createInfoSection(() => {
    navStyle = navStyle.css('transform', HIDE_NAV).css('box-shadow', HIDE_SHADOW);
    navState = 'hidden';
    nav.setAllStyles(navStyle);
    setButtonStyles({
      bars: 'visible',
      xmark: 'hidden',
    });
  });

  const { element: ul, styleFns: listItemFunction }: ElementWithStyleFunctionArrayReturn = createMenuItems(() => {
    navStyle = navStyle.css('transform', HIDE_NAV).css('box-shadow', HIDE_SHADOW);
    navState = 'hidden';
    nav.setAllStyles(navStyle);
    setButtonStyles({
      bars: 'visible',
      xmark: 'hidden',
    });
  });

  nav.className = 'menu-nav';

  // button.style.width = '3rem';
  // button.style.height = '3rem';
  // button.style.backgroundColor = 'red';

  nav.append(info, ul);
  header.append(touch, btn, nav);

  function updateElements() {
    const { height, width, orientation, device } = getScreenSize();
    const formatSize = orientation === 'portrait-primary' ? height : width;
    globalThis.document.getElementsByTagName('html')[0].style.fontSize = `${formatSize / 16}%`;

    if (device === 'desktop') return;

    const styles: MenuElementStyles = menuStyles();

    const {
      own: HEADER_STYLES,
      button: { own: MENU_BUTTON_STYLES, bars: BUTTON_BARS_STYLES, xmark: BUTTON_XMARK_STYLES },
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
    } = styles.header;

    // navStyle = NAV_STYLES;
    navStyle = NAV_STYLES.css('transform', 'translateX(-100%)').css('box-shadow', 'none');
    header.setAllStyles(HEADER_STYLES);
    nav.setAllStyles(navStyle); // cambiar a hidden
    info.setAllStyles(INFO_STYLES);
    ul.setAllStyles(UL_STYLES);

    setInfoStyles({
      name: NAME_STYLES,
      filter: FILTER_STYLES,
      description: DESCRIPTION_STYLES,
      jsLogo: JS_LOGO_STYLES,
      linkedin: LINKEDIN_STYLES,
      github: GITHUB_STYLES,
    });

    setButtonStyles({ button: MENU_BUTTON_STYLES, bars: BUTTON_BARS_STYLES, xmark: BUTTON_XMARK_STYLES });

    listItemFunction.forEach((fn) => {
      fn({ li: LI_STYLES, anchor: A_STYLES, icon: I_STYLES });
    });

    // touch.setAttribute('style', styles['touch-shown']); // cambiar a hidden
    // button.setAttribute('style', styles['button-bars']);

    // const icons = globalThis.document.getElementsByClassName('menu-icon') as HTMLCollectionOf<HTMLElement>;
    // Array.from(icons).forEach((i) => {
    //   i.style.backgroundColor = 'blue';
    // });
    // TODO: lo mismo para los anchors de los menu items
  }

  let timeOut: NodeJS.Timeout;

  globalThis.addEventListener('resize', () => {
    clearTimeout(timeOut);
    nav.style.display = 'none';
    navState = 'hidden';
    // button.style.display = 'none';

    timeOut = setTimeout(() => {
      updateElements();
    }, 100);
  });

  // button.addEventListener('click', );

  nav.style.display = 'none';
  // button.style.display = 'none';
  updateElements();
  return header;
}
