import { createDivElement, createTextElement } from '../customElement/custom-element.js';
import {
  createCustomGraphicLinkedComponent as createGrapEl,
  GrapLkdParams,
} from './custom-graphic-linked-component.js';

type LinkedIconTuple = [string, string];

/**
 * - name: Andrés Arana C
 * - desc: JavaScript Developer
 * - lkdi: [ (icon): 'fa-brands fa-linkedin', (link to LinkedIn): 'https://..' ]
 * - gith: [ (icon): 'fa-brands fa-github', (link to github): 'https://..' ]
 * - evTp: Event Type ('click')
 * - evFn: Event Function (added to addeventlistener in createCustomElement function)
 */
export interface InfoComponentParams {
  name: string;
  desc: string;
  lkdi: LinkedIconTuple;
  gith: LinkedIconTuple;
  evTp: EventType;
  evFn: (target?: Event | string) => void;
}

export function createCustomInfoComponent(params: InfoComponentParams): CustomCompReturn<HTMLElType> {
  const { name, desc, lkdi, gith, evTp, evFn } = params;
  const lkdiValues: GrapLkdParams = { id: 'linkedIn-link', grTp: 'icon', src: lkdi[0], href: lkdi[1], evTp, evFn };
  const githValues: GrapLkdParams = { id: 'github-link', grTp: 'icon', src: gith[0], href: gith[1], evTp, evFn };

  const [contEl, contStFn] = createDivElement();
  const [fltrEl, fltrStFn] = createDivElement();
  const [nameEl, nameStFn] = createTextElement({ text: name });
  const [descEl, descStFn] = createTextElement({ text: desc });
  const [jsLgEl, jsLgStFn] = createDivElement();
  const [ldkiEl, lkdiStFn] = createGrapEl(lkdiValues);
  const [githEl, githStFn] = createGrapEl(githValues);

  contEl.append(fltrEl, nameEl, descEl, jsLgEl, ldkiEl, githEl);

  function setStyles(st: ElementStyles) {
    const commonProps = ''.cssProperties(['height', '100%'], ['width', '100%']);
    contStFn(st['main-header-nav-info']!);
    fltrStFn(st['main-header-nav-info-filter']!);
    nameStFn(st['main-header-nav-info-name']!);
    descStFn(st['main-header-nav-info-description']!);
    jsLgStFn(st['main-header-nav-info-jslogo']!);
    lkdiStFn({ anch: st['main-header-nav-info-linkedin']!, img: commonProps, cont: commonProps });
    githStFn({ anch: st['main-header-nav-info-github']!, img: commonProps, cont: commonProps });
  }
  return [contEl, setStyles];
}
