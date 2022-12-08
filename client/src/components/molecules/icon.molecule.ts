import * as atom from '../atoms/html-atom.js';

export type IconMoleculeParams = {
  className: string;
  styleName: { container: string; icon: string };
};

export function createIconMolecule(params: IconMoleculeParams): HTMLDivElement {
  const { className, styleName } = params;
  const iconContainer_DIV = atom.createDivElement({ styleName: styleName.container });
  const icon_SPAN = atom.createIconElement({ className, styleName: styleName.icon });
  iconContainer_DIV.appendChild(icon_SPAN);
  return iconContainer_DIV;
}
