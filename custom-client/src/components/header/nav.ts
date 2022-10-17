import ThemeColor from '../../helpers/colors.js';
import CSS from '../../helpers/css.js';
import getScreenSize from '../../helpers/sizes.js';
import '../../helpers/htmlelement.extensions.js';

const SMALL_STYLES: string = CSS.start()
  .boxSizing('border-box')
  .display('flex')
  .flexDirection('column')
  .justifyContent('center')
  .alignItems('stretch')
  .backgroundColor(ThemeColor.colorMainDark)
  .padding('0rem', '4rem')
  .position('absolute')
  .toString();

const LARGE_STYLES: string = `${CSS.start()
  .boxSizing('border-box')
  .position('static')
  .padding('0rem')
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
    if (getScreenSize().width > 944) return nav.replaceStyles(LARGE_STYLES);

    const header: HTMLElement | null = globalThis.document.querySelector('.main-header');
    const h = header ? header.style.height : headerHeight;
    const looseStyles = {
      top: h,
      left: `${getScreenSize().width * -0.4}px`,
      width: `${getScreenSize().width * 0.4}px`,
      height: `calc(${getScreenSize().height}px - ${h})`,
      transition: 'left 0.3s ease-in-out',
    };
    nav.replaceStyles(SMALL_STYLES);
    nav.changeStyleProps(looseStyles);
    // console.log('nav-styles:', nav.getAttribute('style'));
  }

  globalThis.addEventListener('resize', setStyles);
  return nav;
}
