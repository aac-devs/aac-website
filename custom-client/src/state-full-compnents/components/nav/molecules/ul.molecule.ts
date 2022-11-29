import * as atom from '../../../atoms/html-atom.js';
import { createLiMolecule, LiMoleculeParams } from './li.molecule.js';

export function createUlMolecule(params: LiMoleculeParams[]): HTMLUListElement {
  const ul = atom.createUlElement({ styleName: 'NAV_UL' });
  params.forEach((param) => ul.appendChild(createLiMolecule(param)));
  return ul;
}
