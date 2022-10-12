import CSS from '../../helpers/css.js';
import getScreenSize from '../../helpers/sizes.js';

const VISIBLE_BUTTON = CSS.start().display('inline-block').height('auto').width('auto').toString();
const HIDDEN_BUTTON = CSS.start().display('none').toString();

// ----------------------------------------------------------------------------------
// -------------- MENU BUTTON -------------------------------------------------------
// ----------------------------------------------------------------------------------
export default function createMenuButton(className: string): HTMLElement {
  const btn = globalThis.document.createElement('button');
  btn.setAttribute('class', className);
  btn.innerHTML = 'MENU';
  setStyles();

  function setStyles() {
    const btnStyles = getScreenSize().width > 944 ? HIDDEN_BUTTON : VISIBLE_BUTTON;
    btn.setAttribute('style', btnStyles);
  }

  window.addEventListener('resize', setStyles);
  return btn;
}
