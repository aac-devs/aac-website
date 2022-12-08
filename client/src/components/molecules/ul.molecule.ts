import * as atom from '../atoms/html-atom.js';
import * as mol from '../molecules/index.js';

export function createUlMolecule(params: mol.LiMoleculeParams[]): HTMLUListElement {
  const listItems_UL = atom.createUlElement({ styleName: 'NAV_UL' });

  function updateListItems() {
    listItems_UL.innerHTML = '';
    params.forEach((param) => listItems_UL.appendChild(mol.createLiMolecule(param)));
  }

  globalThis.document.addEventListener('styles', updateListItems);
  updateListItems();
  return listItems_UL;
}
