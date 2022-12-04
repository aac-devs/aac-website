import { createUlElement } from '../../atoms/html-atom.js';
import { projectCardMolecule } from './project.card.molecule.js';

export function projectOrganims(params: ProjectType[]) {
  const projectBody = globalThis.document.querySelector('.projects-body');
  const projectUl = createUlElement({ styleName: 'PROJECTS_UL' });

  params.forEach((param) => {
    const cardItem = projectCardMolecule(param);
    projectUl.appendChild(cardItem);
  });

  projectBody?.appendChild(projectUl);
}
