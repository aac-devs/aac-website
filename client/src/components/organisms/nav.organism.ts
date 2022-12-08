import * as atom from '../atoms/html-atom.js';
import * as mol from '../molecules/index.js';

export function createNavOrganism(params: mol.LiMoleculeParams[]): HTMLElement {
  const navContainer_NAV = atom.createNavElement({ styleName: 'NAV' });
  const listItems_UL = mol.createUlMolecule(params);
  navContainer_NAV.appendChild(listItems_UL);
  return navContainer_NAV;
}
