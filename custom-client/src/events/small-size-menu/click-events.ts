import { ElementReferenceReturn, elementsReference, hideOpenNav } from './index.js';

export default function clickEvent(ev: Event) {
  const references: ElementReferenceReturn = elementsReference(['menu-nav', 'touch-area', 'menu-button']);
  if (!Array.isArray(references)) return;

  const nav = <HTMLElement | null>references[0];
  const touchArea = <HTMLElement | null>references[1];
  const menuButton = <HTMLElement | null>references[2];
  // console.log(ev.type);
  // console.log(nav);
  // console.log(touchArea);
  // console.log(menuButton);

  console.log(hideOpenNav());

  // if (Array.isArray(references)) {
  //   references.forEach((ref) => console.log(ref));
  // }
}
