// import CSS from '../helpers/css.js';
// import getScreenSize from '../helpers/sizes.js';

import { ElementReferenceReturn, elementsReference } from './index.js';

// let startTouch = 0;
// export let isSideMenuOpen: boolean = false;

// export function closeMenu() {
//   isSideMenuOpen = false;
// }

// export function openMenu() {
//   isSideMenuOpen = true;
// }

// export default function touchEvent(ev: Event, nav: HTMLElement, touchArea: HTMLElement) {
//   ev.stopPropagation();
//   const evTouches = <TouchEvent>ev;
//   const screenWidth = getScreenSize().width;
//   if (screenWidth > 944 || !evTouches.targetTouches) return;

//   const touch = evTouches.targetTouches[0];
//   if (startTouch === 0) return (startTouch = touch.pageX);

//   let leftStyle: string = '',
//     shadowStyle: string = '',
//     touchAreaWidth: string = '';

//   if (touch.pageX - startTouch > 50) {
//     isSideMenuOpen = true;
//     touchAreaWidth = CSS.start().width('100vw').toString();
//     leftStyle = CSS.start().left('0px').toString();
//     shadowStyle = CSS.start().boxShadow('0rem', '2.4rem', '2.8rem', 'rgba(0, 0, 0, 0.3)').toString();
//   } else if (startTouch - touch.pageX > 50) {
//     isSideMenuOpen = false;
//     touchAreaWidth = CSS.start().width('10vw').toString();
//     leftStyle = CSS.start()
//       .left(`${screenWidth * -0.4}px`)
//       .toString();
//     shadowStyle = CSS.start().boxShadow('none').toString();
//   } else return;

//   startTouch = 0;
//   touchArea.setAttribute(
//     'style',
//     `${CSS.start()
//       .insert(`${touchArea.getAttribute('style')}${touchAreaWidth}`)
//       .toString()}`
//   );
//   nav.setAttribute(
//     'style',
//     `${CSS.start()
//       .insert(`${nav.getAttribute('style')}${leftStyle}${shadowStyle}`)
//       .toString()}`
//   );
// }

export default function touchEvent(ev: Event) {
  const references: ElementReferenceReturn = elementsReference(['menu-nav', 'touch-area', 'menu-button']);
  if (!Array.isArray(references)) return;

  const nav = <HTMLElement | null>references[0];
  const touchArea = <HTMLElement | null>references[1];
  const menuButton = <HTMLElement | null>references[2];
  console.log(ev.type);
  console.log(nav);
  console.log(touchArea);
  console.log(menuButton);

  // if (Array.isArray(references)) {
  //   references.forEach((ref) => console.log(ref));
  // }
}
