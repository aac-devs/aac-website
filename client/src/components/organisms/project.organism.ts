import * as atom from '../atoms/html-atom.js';
import * as mol from '../molecules/index.js';

// ------------
export function projectOrganims(projectList: ProjectType[]) {
  const projectBody = globalThis.document.querySelector('.projects-body');
  const projectUl = atom.createUlElement({ styleName: 'PROJECTS_UL' });

  projectList.forEach((projectItem) => {
    const cardItem = mol.projectCardMolecule(projectItem);
    projectUl.appendChild(cardItem);
  });

  projectBody?.appendChild(projectUl);
}
