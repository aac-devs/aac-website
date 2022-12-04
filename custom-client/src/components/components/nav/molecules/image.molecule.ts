import * as atom from '../../../atoms/html-atom.js';

export type ImageMoleculeParams = {
  src: string;
  alt: string;
  styleName: { container: string; image: string };
};

export function createImageMolecule(params: ImageMoleculeParams): HTMLDivElement {
  const { src, alt, styleName } = params;
  const container = atom.createDivElement({ styleName: styleName.container });
  const img = atom.createImageElement({ src, alt, styleName: styleName.image });
  container.appendChild(img);
  return container;
}
