import '../../helpers/htmlelement.extensions.js';
import getScreenSize from '../../helpers/sizes.js';
import { HideOpenMenu, menuHidden, menuShown, NavStateType } from './menu-variables.js';

function touchCache() {
  let touches: number = 0;

  return function (ev: Event) {
    ev.stopPropagation();
    const evTouches = <TouchEvent>ev;
    const screenDevice = getScreenSize().device;
    if (screenDevice === 'desktop' || !evTouches.targetTouches) return;

    const touch = evTouches.targetTouches[0];
    if (touches === 0) return (touches = touch.pageX);

    let navState: NavStateType;
    if (touch.pageX - touches > 50) navState = 'shown';
    else if (touches - touch.pageX > 50) navState = 'hidden';
    else return;
    showHideNav(navState);
    touches = 0;
  };
}
const touchEvent = touchCache();

function showHide() {
  let menuState: HideOpenMenu = Object.assign({}, menuHidden);

  return (forcedState: NavStateType | null): NavStateType => {
    const nav = <HTMLElement>globalThis.document.querySelector('.menu-nav');
    const touchArea = <HTMLElement>globalThis.document.querySelector('.touch-area');
    // const menuButton = <HTMLElement>globalThis.document.querySelector('.º');
    if (forcedState != null) menuState = Object.assign({}, forcedState === 'shown' ? menuShown : menuHidden);
    else menuState = Object.assign({}, menuState.state === 'hidden' ? menuShown : menuHidden);

    touchArea.changeStyleProps({ width: menuState['touch-width'] });
    nav.changeStyleProps({ left: menuState['nav-left'], 'box-shadow': menuState['nav-shadow'] });
    // console.log(menuState);
    return menuState.state;
  };
}

export const showHideNav = showHide();
export default touchEvent;
