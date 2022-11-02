import { ElementWithStyleFunctionReturn } from '../../../../../helpers/interfaces';
import { ListItemStyles } from '../../../../../helpers/types';

export function createListItem(listName: string, fn: (ev?: Event) => void): ElementWithStyleFunctionReturn | null {
  const li = <HTMLLIElement>globalThis.document.createElement('li');
  const a = <HTMLAnchorElement>globalThis.document.createElement('a');
  const iconContainer = <HTMLElement>globalThis.document.createElement('span');

  const iClass: string | null | (string | null)[] = listName.match(/fa-\w+ fa-\w+-?\w*/);
  const aText = <string | null | (string | null)[]>listName.match(/\w+\b/);

  let styleFunction: (styles: ListItemStyles) => void;

  if (!(iClass && iClass[0] && aText && aText[0])) return null;

  if (aText[0].startsWith('Hacker')) {
    const img = <HTMLImageElement>globalThis.document.createElement('img');
    img.src =
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1667017201/aac-website/info/HackerRank_Icon-1000px_qrcxjg.png';

    img.setAllStyles(''.css('height', '100%').css('width', '100%'));
    iconContainer.appendChild(img);
  } else {
    const i: HTMLElement = globalThis.document.createElement('i');
    i.className = `${iClass[0]}`;
    i.setAllStyles(''.css('height', '100%').css('width', '100%'));
    iconContainer.appendChild(i);
  }

  styleFunction = (styles: ListItemStyles) => {
    iconContainer.setAllStyles(styles.icon);
    li.setAllStyles(styles.li);
    a.setAllStyles(styles.anchor);
  };

  const aLink = aText[0].replace(/^/, '#').toLowerCase();
  const liClass = aText[0].replace(/$/, '-menu-item').toLowerCase();

  a.href = aLink;
  li.className = liClass;

  a.append(iconContainer, aText[0]);
  li.appendChild(a);

  a.addEventListener('click', fn);

  return { element: li, styleFn: styleFunction };
}
