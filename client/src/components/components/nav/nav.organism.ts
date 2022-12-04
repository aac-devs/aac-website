import * as atom from '../../atoms/html-atom.js';
import { LiMoleculeParams } from './molecules/li.molecule.js';
import { createUlMolecule } from './molecules/ul.molecule.js';

export function createNavOrganism(params: LiMoleculeParams[]): HTMLElement {
  const nav = atom.createNavElement({ styleName: 'NAV' });
  const ul = createUlMolecule(params);
  nav.appendChild(ul);
  return nav;
}
