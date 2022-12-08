import * as atom from '../atoms/html-atom.js';
import * as mol from '../molecules/index.js';

export type SectionFrameParams = {
  headerTitle: string;
  headerPicture: { iconClassname?: string; imageSrc?: string };
};

export const SECTION_FRAME_PARAMS: SectionFrameParams[] = [
  { headerTitle: 'Projects', headerPicture: { iconClassname: 'fa-solid fa-gears' } },
  {
    headerTitle: 'HackerRank',
    headerPicture: {
      imageSrc:
        'https://res.cloudinary.com/aac-devs-data/image/upload/v1667017201/aac-website/info/HackerRank_Icon-1000px_qrcxjg.png',
    },
  },
  { headerTitle: 'Skills', headerPicture: { iconClassname: 'fa-solid fa-screwdriver-wrench' } },
  { headerTitle: 'Contact', headerPicture: { iconClassname: 'fa-regular fa-message' } },
];

export function createSectionFrame(params: SectionFrameParams): HTMLElement {
  const { headerTitle: TITLE, headerPicture: PICTURE } = params;

  const sectionFrame_SECTION = atom.createSectionElement({
    styleName: 'FRAME_SINGLE_CONTAINER',
    id: TITLE.toLowerCase(),
  });
  const sectionHeader_HEADER = atom.createHeaderElement({ styleName: 'FRAME_HEADER_CONTAINER' });
  const headerTitle_H1 = atom.createHeadingElement({
    styleName: 'FRAME_HEADER_TEXT',
    textTag: 'h1',
    textContent: TITLE,
  });
  if (PICTURE.iconClassname) {
    const headerIcon_DIV = mol.createIconMolecule({
      className: PICTURE.iconClassname,
      styleName: { container: 'FRAME_HEADER_ICON_CONTAINER', icon: 'FRAME_HEADER_ICON' },
    });
    sectionHeader_HEADER.append(headerIcon_DIV, headerTitle_H1);
  } else if (PICTURE.imageSrc) {
    const headerImage_DIV = mol.createImageMolecule({
      src: PICTURE.imageSrc,
      alt: TITLE.toLowerCase(),
      styleName: { container: 'FRAME_HEADER_ICON_CONTAINER', image: 'FRAME_HEADER_ICON' },
    });
    sectionHeader_HEADER.append(headerImage_DIV, headerTitle_H1);
  }
  const sectionBody_DIV = atom.createDivElement({
    styleName: 'FRAME_BODY',
    className: `${params.headerTitle.toLowerCase()}-body`,
  });
  sectionFrame_SECTION.append(sectionHeader_HEADER, sectionBody_DIV);

  return sectionFrame_SECTION;
}
// TODO: poner los valores y demás en la carpeta .data, con el nombre del archivo más .data para identificarlos, de la misma forma crear una carpeta de types o interfaces
