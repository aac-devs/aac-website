import {
  ElementWithStyleFunctionArrayReturn,
  ElementWithStyleFunctionReturn,
} from '../../../../../helpers/interfaces.js';
import { ListItemFn } from '../../../../../helpers/types.js';
import { createListItem } from './menu-li.js';

export function createMenuItems(fn: (ev?: Event) => void): ElementWithStyleFunctionArrayReturn {
  const ul: HTMLElement = globalThis.document.createElement('ul');
  const styleFunctions: ListItemFn[] = [];

  [
    'Projects fa-solid fa-gears',
    'HackerRank fa-solid fa-hackerrank',
    'Skills fa-solid fa-screwdriver-wrench',
    'Contact fa-regular fa-message',
  ].forEach((listName) => {
    const li = <ElementWithStyleFunctionReturn | null>createListItem(listName, fn);

    if (li) {
      styleFunctions.push(li.styleFn);
      ul.appendChild(li.element);
    }
  });
  return { element: ul, styleFns: styleFunctions };
}
