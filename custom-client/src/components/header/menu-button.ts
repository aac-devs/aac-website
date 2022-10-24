import CSS from '../../helpers/css.js';
import getScreenSize from '../../helpers/sizes.js';
import '../../helpers/htmlelement.extensions.js';
import ThemeColor from '../../helpers/colors.js';

const VISIBLE_BUTTON = `${CSS.start()
  .display('flex')
  .flexDirection('row')
  .justifyContent('center')
  .alignItems('center')
  .padding('5px')
  // .height('max-content')
  // .height('auto')
  .backgroundColor('transparent')
  // .backgroundColor(ThemeColor.colorMainDark)
  // .width('auto')
  .toString()}border:1px solid ${
  ThemeColor.colorGreyLight
};border-radius:5px;letter-spacing:unset;word-spacing:unset;line-height:unset`;
const HIDDEN_BUTTON = CSS.start().display('none').toString();

type IconSize = 'fa-2xs' | 'fa-xs' | 'fa-sm' | 'fa-lg' | 'fa-xl' | 'fa-2xl';
type IconCategory = 'fa-solid' | 'fa-brands' | 'fa-light';
type IconLogo = 'fa-bars' | 'fa-xmark';

function iconClass(category: IconCategory, logo: IconLogo, size?: IconSize): string {
  return `${category} ${logo} ${size}`;
}

// ----------------------------------------------------------------------------------
// -------------- MENU BUTTON -------------------------------------------------------
// ----------------------------------------------------------------------------------
export default function createMenuButton(className: string, headerHeight: string): HTMLElement {
  const btn = globalThis.document.createElement('button');
  const barsIcon = <HTMLElement>globalThis.document.createElement('i');
  const xmarkIcon = <HTMLElement>globalThis.document.createElement('i');

  barsIcon.setAttribute('class', 'fa-solid fa-bars menu-bars');
  barsIcon.style.setProperty('color', `${ThemeColor.colorGreyLighter}`);
  barsIcon.style.setProperty('font-size', '2.5rem');
  barsIcon.style.zIndex = '-1';

  xmarkIcon.setAttribute('class', 'fa-solid fa-xmark menu-xmark');
  xmarkIcon.style.setProperty('color', `${ThemeColor.colorGreyLighter}`);
  xmarkIcon.style.setProperty('font-size', '3rem');
  xmarkIcon.style.zIndex = '-1';
  // TODO: La idea es agregar ambos al btn y por medio de la propiedad display, mostrar uno u otro.

  btn.appendChild(barsIcon);
  btn.setAttribute('class', className);
  setStyles();

  function setStyles() {
    const header: HTMLElement | null = globalThis.document.querySelector('.main-header');
    const h = header ? header.style.height : headerHeight;

    const btnStyles = getScreenSize().device === 'desktop' ? HIDDEN_BUTTON : VISIBLE_BUTTON;
    btn.replaceStyles(btnStyles);
    btn.style.setProperty('height', `calc(${h} / 1.5)`);
    btn.style.setProperty('width', `calc(${h} / 1.5)`);
  }
  globalThis.addEventListener('resize', setStyles);
  return btn;
}
