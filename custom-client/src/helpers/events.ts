import { updateHeader } from '../components/header.js';
import CSSStyles from './css.js';
import getScreenSize from './sizes.js';
// import { adjustScreenSize } from './updateDOM.js';

export function eventsRegister() {
  const body = window.document.getElementsByTagName('body')[0];
  const nav = <HTMLElement>window.document.querySelector('.menu-nav');
  const buttonElement = <HTMLLIElement>window.document.querySelector('.menu-button');
  const touchArea = <HTMLElement>window.document.querySelector('.touch-area');
  const anchorElements = window.document.getElementsByClassName('menu-anchors') as HTMLCollectionOf<HTMLElement>;

  // #########################################################################################################
  // #########################################################################################################
  // RESIZE EVENT - TO UPDATE COMPONENTS WHEN SCREEN SIZE CHANGES ############################################

  window.addEventListener('resize', () => {
    // adjustScreenSize();
    updateHeader();
  });

  // #########################################################################################################
  // #########################################################################################################
  // TOUCH EVENTS - SMALL SCREENS MENU #######################################################################

  let startTouch = 0;
  let isSideMenuOpen: boolean = false;
  touchArea.addEventListener('touchmove', touchEvent, false);
  nav.addEventListener('touchmove', touchEvent, false);

  // TODO: Refactorizar
  function touchEvent(ev: TouchEvent) {
    ev.stopPropagation();
    const screenWidth = getScreenSize().width;
    if (screenWidth > 944 || !ev.targetTouches) return;

    const touch = ev.targetTouches[0];
    if (startTouch === 0) return (startTouch = touch.pageX);

    let leftStyle: string = '',
      shadowStyle: string = '';

    if (touch.pageX - startTouch > 50) {
      touchArea.style.width = '100vw';
      leftStyle = `0px`;
      shadowStyle = `0 2.4rem 2.8rem rgba(0, 0, 0, 0.3)`;
      isSideMenuOpen = true;
    } else if (startTouch - touch.pageX > 50) {
      touchArea.style.width = '10vw';
      leftStyle = `-${screenWidth * 0.4}px`;
      shadowStyle = `none`;
      isSideMenuOpen = false;
    } else return;

    startTouch = 0;
    nav.style.left = leftStyle;
    nav.style.boxShadow = shadowStyle;
  }

  // MENU BUTTON - SHOW / HIDE LATERAL MENU (SMALL SCREEN SIZES):
  buttonElement.addEventListener('click', () => {
    let leftStyle: string = '',
      shadowStyle: string = '';

    console.clear();
    console.log('click event');
    let newStyles: string = CSSStyles.insert(nav.getAttribute('style')).toString();

    if (isSideMenuOpen) {
      touchArea.style.width = '10vw';
      leftStyle = `-${getScreenSize().width * 0.4}px`;
      shadowStyle = `none`;
      isSideMenuOpen = false;
    } else {
      touchArea.style.width = '100vw';
      leftStyle = `0px`;
      shadowStyle = `0 2.4rem 2.8rem rgba(0, 0, 0, 0.3)`;
      isSideMenuOpen = true;
    }
    nav.style.left = leftStyle;
    nav.style.boxShadow = shadowStyle;
  });

  // MENU ITEM ANCHORS:
  Array.from(anchorElements).forEach((element) => {
    element.addEventListener('click', () => {
      const screenWidth = getScreenSize().width;
      if (screenWidth < 944) {
        nav.style.left = `-${screenWidth * 0.4}px`;
        nav.style.boxShadow = `none`;
        touchArea.style.width = '10vw';
        isSideMenuOpen = false;
      }
    });
  });

  // Usado solo para ver si existen touch events en el body
  // TODO: quitar al final
  body.addEventListener('touchmove', () => console.log('body-touch'), false);

  // #########################################################################################################
  // #########################################################################################################
  //  #######################################################################
}
