import {
  createDivElement,
  createHeaderElement,
  createHeadingElement,
  createSectionElement,
} from '../../atoms/html-atom.js';
import { createIconMolecule } from '../nav/molecules/icon.molecule.js';
import { createImageMolecule } from '../nav/molecules/image.molecule.js';

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
  const sectionFrame = createSectionElement({
    styleName: 'FRAME_SINGLE_CONTAINER',
    id: TITLE.toLowerCase(),
  });
  const sectionHeader = createHeaderElement({ styleName: 'FRAME_HEADER_CONTAINER' });
  const headerTitle = createHeadingElement({
    styleName: 'FRAME_HEADER_TEXT',
    textTag: 'h1',
    textContent: TITLE,
  });
  if (PICTURE.iconClassname) {
    const headerIcon = createIconMolecule({
      className: PICTURE.iconClassname,
      styleName: { container: 'FRAME_HEADER_ICON_CONTAINER', icon: 'FRAME_HEADER_ICON' },
    });
    sectionHeader.append(headerIcon, headerTitle);
  } else if (PICTURE.imageSrc) {
    const headerImage = createImageMolecule({
      src: PICTURE.imageSrc,
      alt: TITLE.toLowerCase(),
      styleName: { container: 'FRAME_HEADER_ICON_CONTAINER', image: 'FRAME_HEADER_ICON' },
    });
    sectionHeader.append(headerImage, headerTitle);
  }
  const sectionBody = createDivElement({
    styleName: 'FRAME_BODY',
    className: `${params.headerTitle.toLowerCase()}-body`,
  });
  sectionFrame.append(sectionHeader, sectionBody);

  return sectionFrame;
}
