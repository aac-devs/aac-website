import { ElementWithStyleFunctionArrayReturn, ElementWithStyleFunctionReturn } from '../../../../helpers/interfaces.js';
import { ListItemFn } from '../../../../helpers/types.js';
import { createLiUlElements } from './menu-li.js';

export function createUlNavElement(fn: (ev?: Event) => void): ElementWithStyleFunctionArrayReturn {
  const ulElement: HTMLElement = globalThis.document.createElement('ul');
  const styleFunctions: ListItemFn[] = [];

  [
    'Projects fa-solid fa-gears',
    'HackerRank fa-solid fa-hackerrank',
    'Skills fa-solid fa-screwdriver-wrench',
    'Contact fa-regular fa-message',
  ].forEach((listName) => {
    const liElement = <ElementWithStyleFunctionReturn | null>createLiUlElements(listName, fn);

    if (liElement) {
      styleFunctions.push(liElement.styleFunction);
      ulElement.appendChild(liElement.element);
    }
  });
  return { element: ulElement, styleFunctions };
}
