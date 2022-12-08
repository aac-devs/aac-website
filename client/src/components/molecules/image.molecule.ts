import * as atom from '../atoms/html-atom.js';

export type ImageMoleculeParams = {
  src: string;
  alt: string;
  styleName: { container: string; image: string };
};

export function createImageMolecule(params: ImageMoleculeParams): HTMLDivElement {
  const { src, alt, styleName } = params;
  const imageContainer_DIV = atom.createDivElement({ styleName: styleName.container });
  const image_IMG = atom.createImageElement({ src, alt, styleName: styleName.image });
  imageContainer_DIV.appendChild(image_IMG);
  return imageContainer_DIV;
}
