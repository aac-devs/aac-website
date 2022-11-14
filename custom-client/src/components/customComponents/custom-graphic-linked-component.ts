import {
  createAnchorElement,
  createIconElement,
  createImageElement,
  createSpanElement,
} from '../customElement/custom-element.js';

export type GrapLkdType = 'icon' | 'img';

export interface GrapLkdParams {
  grTp: GrapLkdType;
  id: string;
  src: string;
  href: string;
  text?: string;
  evTp: EventType;
  evFn: (ev?: Event) => void;
}

interface GrapLkdStyles {
  anch: string;
  cont: string;
  img: string;
}

type GrapLkdReturn = [HTMLElType, (st: GrapLkdStyles) => void];

export function createCustomGraphicLinkedComponent(params: GrapLkdParams): GrapLkdReturn {
  const { grTp, src, text, ...rest } = params;
  const [anchEl, anchStFn] = createAnchorElement({ ...rest });
  const [icCoEl, icCoStFn] = createSpanElement();
  let grapElStFn: (st: string) => void;

  if (grTp === 'icon') {
    const [iconEl, iconStFn] = createIconElement({ clas: src });
    grapElStFn = iconStFn;
    icCoEl.appendChild(iconEl);
  } else {
    const [imgEl, imgStFn] = createImageElement({ src });
    grapElStFn = imgStFn;
    imgEl.alt = `${params.id}-image`;
    icCoEl.appendChild(imgEl);
  }

  if (text) anchEl.append(icCoEl, text);
  else anchEl.appendChild(icCoEl);

  function setStyles(st: GrapLkdStyles) {
    anchStFn(st.anch);
    icCoStFn(st.cont);
    grapElStFn(st.img);
  }

  return [anchEl, setStyles];
}

/**
 * Es un Anchor, con una imagen/icono y texto opcional
 * Recibe click event
 * Devuelve el componente y la función para setear los estilos
 */
