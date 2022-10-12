import ThemeColor from '../../helpers/colors.js';
import CSS from '../../helpers/css.js';
import getScreenSize from '../../helpers/sizes.js';

const SMALL_STYLES: string = CSS.start()
  .boxSizing('border-box')
  .parentFlex('row-reverse', 'space-between', 'center')
  .backgroundColor(ThemeColor.colorMainDark)
  .position('relative')
  .padding('0 2rem')
  .zIndex(1)
  .toString();

const LARGE_STYLES: string = CSS.start()
  .boxSizing('border-box')
  .parentFlex('row', 'space-between', 'center')
  .backgroundColor(ThemeColor.colorMainDark)
  .position('relative')
  .padding('0 2rem')
  .toString();

// ----------------------------------------------------------------------------------
// -------------- MAIN HEADER -------------------------------------------------------
// ----------------------------------------------------------------------------------
export function createMainHeader(className: string): HTMLElement {
  const header: HTMLElement = globalThis.document.createElement('header');
  header.setAttribute('class', className);
  setStyles();

  function setStyles() {
    const headerStyles = getScreenSize().width > 944 ? LARGE_STYLES : SMALL_STYLES;
    header.setAttribute('style', headerStyles);
    updateFontSize();
  }

  function updateFontSize() {
    const { clientWidth } = globalThis.document.documentElement;
    // Actualiza el fontSize del HTML (Verificar si aplica en todo)
    window.document.getElementsByTagName('html')[0].style.fontSize = `${clientWidth / 16}%`;

    const heightValue = `${6}${getScreenSize().orientation === 'portrait-primary' ? 'vh' : 'vw'}`;
    header.style.height = heightValue;
    header.style.minHeight = heightValue;
    header.style.maxHeight = heightValue;
  }

  window.addEventListener('resize', setStyles);
  return header;
}
