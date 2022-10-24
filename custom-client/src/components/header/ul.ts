import CSS from '../../helpers/css.js';
import getScreenSize from '../../helpers/sizes.js';
import '../../helpers/htmlelement.extensions.js';

const SMALL_STYLES: string = `${CSS.start()
  .boxSizing('border-box')
  .height('auto')
  .display('flex')
  .flexDirection('column')
  .justifyContent('center')
  .alignItems('stretch')
  // .flexGrow(1)
  .rowGap('2rem')
  .padding('1rem')
  .minWidth('200px')
  // .width('50%')
  // .maxWidth('200px')
  .marginBlockStart('0px')
  .marginBlockEnd('0px')
  .backgroundColor('chartreuse')
  .toString()}list-style:none`;

const LARGE_STYLES: string = `${CSS.start()
  .boxSizing('border-box')
  .display('flex')
  .flexDirection('row')
  .justifyContent('center')
  .alignItems('center')
  .columnGap('2rem')
  .height('auto')
  .padding('0px')
  .marginBlockStart('0px')
  .marginBlockEnd('0px')
  .toString()}border:none;list-style:none`;

// ----------------------------------------------------------------------------------
// -------------- MENU UL -----------------------------------------------------------
// ----------------------------------------------------------------------------------
export default function createMenuUl(className: string): HTMLElement {
  const ul: HTMLElement = globalThis.document.createElement('ul');
  ul.setAttribute('class', className);
  setStyles();

  function setStyles() {
    const ulStyles = getScreenSize().device === 'desktop' ? LARGE_STYLES : SMALL_STYLES;
    ul.replaceStyles(ulStyles);
    if (getScreenSize().orientation === 'portrait-primary') {
      ul.style.width = '100%';
    } else {
      ul.style.width = '50%';
    }
  }

  window.addEventListener('resize', setStyles);
  return ul;
}
