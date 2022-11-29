import * as atom from '../../atoms/html-atom.js';
import { LiMoleculeParams } from './molecules/li.molecule.js';
import { createUlMolecule } from './molecules/ul.molecule.js';

export function createNavOrganism(params: LiMoleculeParams[]): HTMLElement {
  const nav = atom.createNavElement({
    styleName: 'NAV',
    eventReceiver: {
      eventDetail: 'MENU-BUTTON',
      currentState: 'transform:translateX(-140%);',
      // possibleStates: [],
      receiverFn: (c: string): string => {
        if (c === 'transform:translateX(-140%);') return 'transform:translateX(0%);';
        return 'transform:translateX(-140%);';
      },
    },
  });
  const ul = createUlMolecule(params);
  nav.appendChild(ul);
  return nav;
}
