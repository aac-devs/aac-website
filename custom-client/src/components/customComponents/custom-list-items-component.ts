import { createUlElement } from '../customElement/custom-element.js';
import { createCustomListItemComponent as createLiComp } from './custom-list-item-component.js';

type ListItemTuple = [text: string, resource: string];
export type UlComponentParams = {
  items: ListItemTuple[];
  eventFn: (ev?: Event) => void;
};

export function createCustomListItemsComponent(params: UlComponentParams): CustomCompReturn<HTMLElType> {
  const { items: listItems, eventFn } = params;
  const [ulElement, ulStylesFn] = createUlElement();

  let liStFnArray: ((st: ElementStyles) => void)[] = [];

  // listItems.forEach((item: ListItemTuple) => {
  //   const [text, resouce] = item;
  //   const id = `${text.toLowerCase()}-link`;
  //   const href = `#${text.toLowerCase()}`;
  //   const clas = text.startsWith('Hacker') ? undefined : resouce;
  //   const src = text.startsWith('Hacker') ? resouce : undefined;
  //   const [liEl, liStFn] = createLiComp({ text: text, id, evTp: 'click', href, evFn: eventFn, clas, src });
  //   liStFnArray.push(liStFn);
  //   ulElement.appendChild(liEl);
  // });

  function setStyles(st: ElementStyles) {
    ulStylesFn(st['main-header-nav-ul']!);
    liStFnArray.forEach((liFn) => liFn(st));
  }
  return [ulElement, setStyles];
}
