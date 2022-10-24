import ThemeColor from '../../helpers/colors.js';
import CSS from '../../helpers/css.js';
import getScreenSize from '../../helpers/sizes.js';
import '../../helpers/htmlelement.extensions.js';

const SMALL_STYLES: string = CSS.start()
  .boxSizing('border-box')
  .display('flex')
  .flexDirection('column')
  .justifyContent('flex-start')
  .alignItems('stretch')
  .flexWrap('wrap')
  // .rowGap('1rem')
  // .columnGap('1rem')
  .backgroundColor(ThemeColor.colorMainDark)
  // .padding('1rem')
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
    if (getScreenSize().device === 'desktop') return nav.replaceStyles(LARGE_STYLES);

    setTimeout(() => {
      const { height, width, orientation } = getScreenSize();
      const leftPosition = height > width ? height : width;
      const header: HTMLElement | null = globalThis.document.querySelector('.main-header');
      const h = header ? header.style.height : headerHeight;
      const looseStyles = {
        top: h,
        left: `${leftPosition * -1}px`,
        // width: 'max-content',
        // width: `${width * 0.5}px`,
        height: `calc(${height}px - ${h})`,
        transition: 'left 0.3s ease-out',
      };
      nav.replaceStyles(SMALL_STYLES);
      nav.changeStyleProps(looseStyles);
      if (orientation === 'portrait-primary') {
        nav.style.justifyContent = 'flex-start';
      } else {
        nav.style.justifyContent = 'center';
        nav.style.alignItems = 'center';
      }
      console.log('nav-styles:', nav.getAttribute('style'));
    }, 100);
  }

  globalThis.addEventListener('resize', setStyles);
  return nav;
}
