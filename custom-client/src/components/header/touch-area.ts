import CSS from '../../helpers/css.js';
import getScreenSize from '../../helpers/sizes.js';
import '../../helpers/htmlelement.extensions.js';

const SMALL_TOUCH: string = CSS.start()
  .boxSizing('border-box')
  .position('absolute')
  .top('0px')
  .left('0px')
  .width('10vw')
  .backgroundColor('#fff')
  .opacity('0%')
  .zIndex(-1)
  .toString();

const HIDDEN_TOUCH: string = CSS.start().display('none').toString();

// ----------------------------------------------------------------------------------
// -------------- TOUCH AREA --------------------------------------------------------
// ----------------------------------------------------------------------------------
export function createTouchArea(className: string): HTMLElement {
  const touchArea: HTMLElement = globalThis.document.createElement('div');
  touchArea.setAttribute('class', className);
  setStyles();

  function setStyles() {
    setTimeout(() => {
      if (getScreenSize().width > 944) return touchArea.replaceStyles(HIDDEN_TOUCH);

      touchArea.replaceStyles(SMALL_TOUCH);
      touchArea.changeStyleProps({ height: `${getScreenSize().height}px` });

      // console.log(touchArea.getAttribute('style'));
    }, 10);
  }

  globalThis.addEventListener('resize', setStyles);
  return touchArea;
}
