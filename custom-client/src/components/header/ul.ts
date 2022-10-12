import CSS from '../../helpers/css.js';
import getScreenSize from '../../helpers/sizes.js';

const SMALL_STYLES: string = `${CSS.start()
  .boxSizing('border-box')
  .height('auto')
  .parentFlex('column', 'center', 'stretch', '2.5rem')
  .padding('0px')
  .marginBlockStart(0, 'px')
  .marginBlockEnd(0, 'px')
  // .backgroundColor(ThemeColor.colorMainDark)
  .toString()}list-style:none`;

const LARGE_STYLES: string = `${CSS.start()
  .boxSizing('border-box')
  .parentFlex('row', 'center', 'center', '2rem')
  .height('auto')
  .padding('0px')
  .marginBlockStart(0, 'px')
  .marginBlockEnd(0, 'px')
  .toString()}border:none;list-style:none`;

// ----------------------------------------------------------------------------------
// -------------- MENU UL -----------------------------------------------------------
// ----------------------------------------------------------------------------------
export default function createMenuUl(className: string): HTMLElement {
  const ul: HTMLElement = globalThis.document.createElement('ul');
  ul.setAttribute('class', className);
  setStyles();

  function setStyles() {
    const ulStyles = getScreenSize().width > 944 ? LARGE_STYLES : SMALL_STYLES;
    ul.setAttribute('style', ulStyles);
  }

  window.addEventListener('resize', setStyles);
  return ul;
}
