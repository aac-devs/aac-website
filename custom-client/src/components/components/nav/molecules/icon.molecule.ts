import * as atom from '../../../atoms/html-atom.js';

export type IconMoleculeParams = {
  className: string;
  styleName: { container: string; icon: string };
};

export function createIconMolecule(params: IconMoleculeParams): HTMLDivElement {
  const { className, styleName } = params;
  const container = atom.createDivElement({ styleName: styleName.container });
  const icon = atom.createIconElement({ className, styleName: styleName.icon });
  container.appendChild(icon);
  return container;
}
