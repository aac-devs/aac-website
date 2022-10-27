import ThemeColor from '../../helpers/colors.js';
import CSS from '../../helpers/css.js';
import getScreenSize from '../../helpers/sizes.js';
import '../../helpers/htmlelement.extensions.js';
import { showHideNav } from '../../events/small-size-menu/menu-events.js';

const SMALL_STYLES: string = CSS.start()
  .boxSizing('border-box')
  .display('flex')
  .flexDirection('row-reverse')
  .justifyContent('space-between')
  .alignItems('center')
  .backgroundColor(ThemeColor.colorMainDark)
  .position('relative')
  .padding('0rem', '2rem')
  .zIndex(1)
  .toString();

const LARGE_STYLES: string = CSS.start()
  .boxSizing('border-box')
  .display('flex')
  .flexDirection('row')
  .justifyContent('space-between')
  .alignItems('center')
  .backgroundColor(ThemeColor.colorMainDark)
  .position('relative')
  .padding('0rem', '2rem')
  .toString();

// ----------------------------------------------------------------------------------
// -------------- MAIN HEADER -------------------------------------------------------
// ----------------------------------------------------------------------------------
export function createMainHeader(className: string): HTMLElement {
  const header: HTMLElement = globalThis.document.createElement('header');
  header.setAttribute('class', className);
  setStyles();

  function setStyles() {
    const headerStyles = getScreenSize().device === 'desktop' ? LARGE_STYLES : SMALL_STYLES;
    header.replaceStyles(headerStyles);
    // console.clear();
    // console.log('header setStyles', headerStyles);
    header.style.backgroundColor = getScreenSize().device === 'mobile' ? 'navy' : 'fuchsia';
    updateFontSize();
  }

  function updateFontSize() {
    const { clientWidth, clientHeight } = globalThis.document.documentElement;

    // TODO: Re-organizar esta acción (vital):
    // Actualiza el fontSize del HTML (Verificar si aplica en todo)
    const formatSize = getScreenSize().orientation === 'portrait-primary' ? clientHeight : clientWidth;
    globalThis.document.getElementsByTagName('html')[0].style.fontSize = `${formatSize / 16}%`;

    setTimeout(() => showHideNav('hidden'), 100);

    const heightValue = `${6}${getScreenSize().orientation === 'portrait-primary' ? 'vh' : 'vw'}`;
    const looseStyles = {
      height: heightValue,
      'min-height': heightValue,
      'max-height': heightValue,
    };
    header.changeStyleProps(looseStyles);
  }

  globalThis.addEventListener('resize', setStyles);
  return header;
}
