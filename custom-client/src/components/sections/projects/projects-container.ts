import projectCard from './project-card.js';

export default function projectContainer(): HTMLElement {
  const containerElement: HTMLElement = globalThis.document.createElement('main');
  const ulElement: HTMLElement = globalThis.document.createElement('ul');
  const footerElement: HTMLElement = globalThis.document.createElement('footer');

  let projectList: ProjectType[];

  footerElement.innerHTML = 'view more...';
  containerElement.append(ulElement, footerElement);

  function setElementsStyles() {
    const STYLES: ElementStyles = Document.prototype.getStyles();
    HTMLElement.prototype.setElementsStyles(
      { element: containerElement, style: STYLES['project-section-container']! },
      { element: ulElement, style: STYLES['project-section-ul']! },
      { element: footerElement, style: STYLES['project-section-footer']! }
    );
  }

  function updateListItems() {
    projectList = Document.prototype.getState('hola')?.projects || [];
    ulElement.innerHTML = '';
    if (projectList.length > 0) {
      projectList.forEach((item: ProjectType) => {
        ulElement.appendChild(projectCard(item));
      });
    }
  }

  globalThis.document.addEventListener('styles', setElementsStyles);
  globalThis.document.addEventListener('state', updateListItems);

  setElementsStyles();
  updateListItems();

  return containerElement;
}

// const filter: HTMLElement = globalThis.document.createElement('div');
// filter.setAllStyles(
//   ''
//     .css('position', 'absolute')
//     .css('top', '0')
//     .css('left', '0')
//     .css('height', '100%')
//     .css('width', 'auto')
//     .css('opacity', '1')
//     // .css('z-index', '-1')
//     .css('background-color', '#fff')
// );
