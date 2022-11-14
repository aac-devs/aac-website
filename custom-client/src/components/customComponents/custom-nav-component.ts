import { createDivElement } from '../customElement/custom-element.js';
import { createCustomInfoComponent as createInfoComponent, InfoComponentParams } from './custom-info-component.js';
import {
  createCustomListItemsComponent as createListItemsComponent,
  UlComponentParams,
} from './custom-list-items-component.js';

export interface NavComponentParams {
  infoParams: InfoComponentParams;
  ulParams: UlComponentParams;
}

export function createCustomNavComponent(params: NavComponentParams): CustomCompReturn<HTMLElType> {
  const [navEl, navStFn] = createDivElement();

  const [infEl, infStFn] = createInfoComponent(params.infoParams);
  const [uliEl, uliStFn] = createListItemsComponent(params.ulParams);

  navEl.append(infEl, uliEl);

  function setStyles(st: ElementStyles) {
    navStFn(st['main-header-nav']!);
    infStFn(st);
    uliStFn(st);
  }
  return [navEl, setStyles];
}

// // TODO: remove, only for proofs
// const [nav, navSt] = createCustomNavComponent({
//   infoParams: {
//     name: 'Andrés Arana C',
//     desc: 'JavaScript Developer',
//     lkdi: ['fa-brands fa-linkedin', '#linkedin'],
//     gith: ['fa-brands fa-github', '#github'],
//     evTp: 'click',
//     evFn: () => {
//       console.log('linkedin or github click');
//     },
//   },
//   ulParams: {
//     items: [
//       ['Projects', 'fa-solid fa-gears'],
//       [
//         'HackerRank',
//         'https://res.cloudinary.com/aac-devs-data/image/upload/v1667017201/aac-website/info/HackerRank_Icon-1000px_qrcxjg.png',
//       ],
//       ['Skills', 'fa-solid fa-screwdriver-wrench'],
//       ['Contact', 'fa-regular fa-message'],
//     ],
//     eventFn: (ev?: Event) => {
//       if (!ev?.target) return;
//       const target = <HTMLAnchorElement>ev.target;
//       console.log(target.id);
//     },
//   },
// });

// navSt(Document.prototype.getStyles());

// export { nav };
/**
 * recibe los InfoComponentParams y los UlComponentParams
 */
