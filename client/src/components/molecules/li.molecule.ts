import getScreenSize from '../../helpers/screen-size.js';
import * as atom from '../atoms/html-atom.js';
import { createIconMolecule, IconMoleculeParams } from '../molecules/icon.molecule.js';
import { createImageMolecule, ImageMoleculeParams } from '../molecules/image.molecule.js';

export type LiMoleculeParams = {
  anchor: {
    textContent: string;
    href: string;
    styleName: string;
    target: TargetType;
  };
  icon?: IconMoleculeParams;
  image?: ImageMoleculeParams;
  li: {
    styleName: string;
  };
  hasIconImage: boolean;
  hasText: boolean;
};

const customEvent = new CustomEvent('nav-close');

export function createLiMolecule(params: LiMoleculeParams): HTMLLIElement {
  const { anchor, hasIconImage, hasText, li: liParam, icon, image } = params;
  const { textContent, ...rest } = anchor;
  const a = atom.createAnchorElement({
    ...rest,
    textContent: getScreenSize().device === 'desktop' ? anchor.textContent : '',
  });
  const li = atom.createLiElement(liParam);

  if (hasIconImage) {
    let iconImage: HTMLElement;
    if (icon) iconImage = createIconMolecule(icon!);
    else iconImage = createImageMolecule(image!);
    a.appendChild(iconImage);
  }

  a.addEventListener('click', () => globalThis.document.dispatchEvent(customEvent));

  if (hasText) a.append(textContent);
  li.appendChild(a);
  return li;
}
