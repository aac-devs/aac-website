import getScreenSize from '../../../../helpers/sizes.js';
import * as atom from '../../../atoms/html-atom.js';
import { createLiMolecule, LiMoleculeParams } from './li.molecule.js';

export function createUlMolecule(params: LiMoleculeParams[]): HTMLUListElement {
  const ul = atom.createUlElement({ styleName: 'NAV_UL' });

  function updateUlElements() {
    ul.innerHTML = '';
    params.forEach((param) => ul.appendChild(createLiMolecule(param)));
  }

  globalThis.document.addEventListener('styles', updateUlElements);
  updateUlElements();
  return ul;
}
