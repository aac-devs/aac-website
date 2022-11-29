import { createMainElement } from '../../atoms/html-atom.js';
import { projectOrganims } from '../projects/project.organism.js';
import { createSectionFrame, SECTION_FRAME_PARAMS } from './section-frame.js';

export function createMainSections(): HTMLElement {
  const sections = createMainElement({ styleName: 'FRAMES_CONTAINER' });

  // console.log(SECTION_FRAME_PARAMS); // TODO: habilitar los datos de los projects de nuevo

  SECTION_FRAME_PARAMS.forEach((SECTION_FRAME) => {
    const sectionFrame = createSectionFrame(SECTION_FRAME);
    sections.append(sectionFrame);
  });

  return sections;
}
