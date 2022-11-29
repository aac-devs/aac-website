import { ElementWithStyleFunctionReturn } from '../../../../helpers/interfaces';
import { ListItemStyles } from '../../../../helpers/types';

export function createLiUlElements(listName: string, fn: (ev?: Event) => void): ElementWithStyleFunctionReturn | null {
  const liElement = <HTMLLIElement>globalThis.document.createElement('li');
  const anchorElement = <HTMLAnchorElement>globalThis.document.createElement('a');
  const iconContainerElement = <HTMLElement>globalThis.document.createElement('span');

  const iconClassName: string | null | (string | null)[] = listName.match(/fa-\w+ fa-\w+-?\w*/);
  const anchorInnerText = <string | null | (string | null)[]>listName.match(/\w+\b/);

  let styleFunction: (STYLES: ListItemStyles) => void;

  if (!(iconClassName && iconClassName[0] && anchorInnerText && anchorInnerText[0])) return null;

  const ICON_STATIC_STYLES = ''.cssProperties(['height', '100%'], ['width', '100%']);

  if (anchorInnerText[0].startsWith('Hacker')) {
    const imgElement = <HTMLImageElement>globalThis.document.createElement('img');
    imgElement.src =
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1667017201/aac-website/info/HackerRank_Icon-1000px_qrcxjg.png';

    HTMLElement.prototype.resetElementsStyles({ element: imgElement, style: ICON_STATIC_STYLES });
    iconContainerElement.appendChild(imgElement);
  } else {
    const iconElement: HTMLElement = globalThis.document.createElement('i');
    iconElement.className = `${iconClassName[0]}`;
    HTMLElement.prototype.resetElementsStyles({ element: iconElement, style: ICON_STATIC_STYLES });
    iconContainerElement.appendChild(iconElement);
  }

  styleFunction = (STYLES: ListItemStyles) => {
    HTMLElement.prototype.resetElementsStyles(
      { element: iconContainerElement, style: STYLES.ICON },
      { element: liElement, style: STYLES.LIST_ITEM },
      { element: anchorElement, style: STYLES.ANCHOR }
    );
  };

  const anchorHref = anchorInnerText[0].replace(/^/, '#').toLowerCase();
  const liClassName = anchorInnerText[0].replace(/$/, '-menu-item').toLowerCase();

  anchorElement.href = anchorHref;
  liElement.className = liClassName;

  anchorElement.append(iconContainerElement, anchorInnerText[0]);
  liElement.appendChild(anchorElement);

  anchorElement.addEventListener('click', fn);

  return { element: liElement, styleFunction };
}
