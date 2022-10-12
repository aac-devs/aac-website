import ThemeColor from '../../helpers/colors.js';
import CSS from '../../helpers/css.js';
import getScreenSize from '../../helpers/sizes.js';

const SMALL_STYLES: string = CSS.start()
  .boxSizing('border-box')
  .parentFlex('column', 'center', 'stretch')
  .backgroundColor(ThemeColor.colorMainDark)
  .padding('0', '4rem')
  .position('absolute')
  .toString();

const LARGE_STYLES: string = `${CSS.start()
  .boxSizing('border-box')
  .position('static')
  .padding('0')
  .width('auto')
  .toString()}border:none;box-shadow:none`;

// ----------------------------------------------------------------------------------
// -------------- MENU NAV ----------------------------------------------------------
// ----------------------------------------------------------------------------------
export function createMenuNav(className: string, headerHeight: string): HTMLElement {
  const nav: HTMLElement = globalThis.document.createElement('nav');
  nav.setAttribute('class', className);
  setStyles();

  function setStyles() {
    if (getScreenSize().width > 944) return nav.setAttribute('style', LARGE_STYLES);

    const header: HTMLElement = globalThis.document.querySelector('.main-header')!;
    const h = header ? header.style.height : headerHeight;
    nav.setAttribute(
      'style',
      CSS.insert(`${SMALL_STYLES}top:${h}`)
        .left(getScreenSize().width * 0, 'px')
        .width(getScreenSize().width * 0.4, 'px')
        .toString()
    );
    nav.style.setProperty('height', `calc(${getScreenSize().height}px - ${h})`);

    // console.log('nav-styles:', nav.getAttribute('style'));
  }

  window.addEventListener('resize', setStyles);
  return nav;
}
