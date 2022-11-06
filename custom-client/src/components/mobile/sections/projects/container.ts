import projectCard from './project-card.js';

export default function projectContainer(): HTMLElement {
  const container: HTMLElement = globalThis.document.createElement('main');
  const ul: HTMLElement = globalThis.document.createElement('ul');
  // const filter: HTMLElement = globalThis.document.createElement('div');
  const footer: HTMLElement = globalThis.document.createElement('footer');
  // const containerStyle = globalThis.document.createElement('style');

  let projectList: ProjectType[];

  footer.innerHTML = 'view more...';
  footer.setAllStyles(
    ''
      //
      .css('font-size', '5vw')
      .css('color', '#fff')
      .css('height', '5vh')
      .css('background-color', 'aqua')
  );

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

  // ul.append(filter);

  // container.setAttribute(
  //   'style',
  //   'height: auto; background-color: white; margin-block-start: 0; margin-block-end: 0; list-style: none; padding-inline-start: 0;display:flex;flex-direction:row;justify-content:space-evenly;align-items:flex-start;gap:2rem;flex-wrap:wrap'
  // );

  ul.setAllStyles(
    ''
      .css('margin-block-start', '0')
      .css('position', 'relative')
      //
      .css('display', 'flex')
      .css('flex-direction', 'column')
      .css('justify-content', 'flex-start')
      .css('align-items', 'center')
      .css('row-gap', '5vw')
      // .css('padding-top', '5vh')
      // .css('flex-wrap', 'wrap')

      .css('overflow-x', 'scroll')
      .css('padding', '5vw 0')
      .css('height', '100%')
      // .css('background-color', 'rgba(255, 255, 255, 0.7)')
      .css('opacity', '1')
      .css('list-style', 'none')
      .css('margin-block-end', '0')
  );

  container.setAllStyles(
    ''
      .css('display', 'flex')
      .css('flex-direction', 'column')
      .css('justify-content', 'space-between')
      .css('height', 'inherit')
  );

  function updateListItems() {
    projectList = Document.prototype.getState('hola')?.projects || [];
    if (projectList.length > 0) {
      // container.remove();
      projectList.forEach((item: ProjectType) => {
        ul.appendChild(projectCard(item));
      });
    }
  }

  globalThis.document.addEventListener('state', () => {
    updateListItems();
  });

  updateListItems();

  container.append(ul, footer);

  return container;
}
