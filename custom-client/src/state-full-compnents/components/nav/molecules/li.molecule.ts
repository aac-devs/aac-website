import * as atom from '../../../atoms/html-atom.js';
import { createIconMolecule, IconMoleculeParams } from './icon.molecule.js';
import { createImageMolecule, ImageMoleculeParams } from './image.molecule.js';

export type LiMoleculeParams = {
  anchor: {
    textContent: string;
    href: string;
    styleName: string;
  };
  icon?: IconMoleculeParams;
  image?: ImageMoleculeParams;
  li: {
    styleName: string;
  };
  hasIconImage: boolean;
  hasText: boolean;
};

export function createLiMolecule(params: LiMoleculeParams): HTMLLIElement {
  const { textContent, ...rest } = params.anchor;
  const a = atom.createAnchorElement({ ...rest, eventEmmiter: { eventDetail: 'MENU-BUTTON', eventType: 'click' } });
  const li = atom.createLiElement(params.li);

  if (params.hasIconImage) {
    let iconImage: HTMLElement;
    if (params.icon) iconImage = createIconMolecule(params.icon!);
    else iconImage = createImageMolecule(params.image!);
    a.appendChild(iconImage);
  }

  if (params.hasText) a.append(textContent);
  li.appendChild(a);
  return li;
}
