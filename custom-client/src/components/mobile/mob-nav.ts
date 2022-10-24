import '../../helpers/htmlelement.extensions.js';
import getScreenSize from '../../helpers/sizes.js';
import { createIcon, Icons } from '../other/icons.js';
import mobileLandscapeStyles from './mobile-landscape-styles.js';
import mobilePortraitStyles from './mobile-portrait-styles.js';

export interface ComponentStyles {
  header: string;
  'nav-shown': string;
  'nav-hidden': string;
  ul: string;
  info: string;
  'button-bars': string;
  'button-xmark': string;
  'touch-shown': string;
  'touch-hidden': string;
}

// TODO: poner estos estilos en los ComponentStyles
const ANCHOR_STYLES = `
  box-sizing:border-box;
  background-color:#eee;
  text-decoration:none;
  font-size:1.6rem;
  flex-grow:1;
  border-radius:0.8rem;
  padding:0.2rem 0.5rem;
  color:#333;
  `;

const LIST_ITEM_STYLES = `
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  column-gap:1rem;
  border-radius:0.8rem;
  `;

const ICON_ITEM_STYLES = `
  font-size:1.6rem;
  margin-right:1rem;
  width:2rem;
`;

function createMenuItems(): HTMLElement {
  const ul: HTMLElement = globalThis.document.createElement('ul');
  [
    'Projects fa-solid fa-gears',
    'HackerRank fa-solid fa-pager',
    'Skills fa-solid fa-screwdriver-wrench',
    'Contact fa-regular fa-message',
  ].forEach((listName) => {
    const li = <HTMLElement>globalThis.document.createElement('li');
    const a: HTMLElement = globalThis.document.createElement('a');
    const i: HTMLElement = globalThis.document.createElement('i');

    const iClass: string | null | (string | null)[] = listName.match(/fa-\w+ fa-\w+-?\w*/);
    const aText = <string | null | (string | null)[]>listName.match(/\w+\b/);

    if (!(iClass && iClass[0] && aText && aText[0])) return;
    i.setAttribute('class', `${iClass[0]} menu-icon`);

    a.append(i, aText[0]);
    // i.setAttribute('id', 'menu-icon');

    const aLink = aText[0].replace(/^/, '#').toLowerCase();
    const liClass = aText[0].replace(/$/, '-menu-item').toLowerCase();

    a.setAttribute('href', aLink);
    li.setAttribute('class', liClass);
    li.appendChild(a);

    i.setAttribute('style', ICON_ITEM_STYLES);
    a.setAttribute('style', ANCHOR_STYLES);
    li.setAttribute('style', LIST_ITEM_STYLES);

    ul.appendChild(li);

    a.addEventListener('click', (ev) => {
      console.log('a click');
      // TODO: la única función de este listener es cerrar el mobile-nav con cualquier botón que realice el evento
    });
  });
  return ul;
}

export default function mobileHeader() {
  const header: HTMLElement = globalThis.document.createElement('header');
  const nav: HTMLElement = globalThis.document.createElement('nav');
  const info: HTMLElement = globalThis.document.createElement('section');
  const touch: HTMLElement = globalThis.document.createElement('div');
  const button: HTMLElement = globalThis.document.createElement('button');
  const ul: HTMLElement = createMenuItems();

  let styles: ComponentStyles;

  nav.appendChild(info);
  nav.appendChild(ul);
  header.appendChild(touch);
  header.appendChild(button);
  header.appendChild(nav);

  function updateElements() {
    const { height, width, orientation, device } = getScreenSize();

    if (device === 'desktop') return;

    styles =
      orientation === 'portrait-primary' ? mobilePortraitStyles(width, height) : mobileLandscapeStyles(width, height);

    header.setAttribute('style', styles.header);
    nav.setAttribute('style', styles['nav-shown']); // cambiar a hidden
    info.setAttribute('style', styles.info);
    ul.setAttribute('style', styles.ul);
    touch.setAttribute('style', styles['touch-shown']); // cambiar a hidden
    button.setAttribute('style', styles['button-bars']);

    const icons = globalThis.document.getElementsByClassName('menu-icon') as HTMLCollectionOf<HTMLElement>;
    Array.from(icons).forEach((i) => {
      i.style.backgroundColor = 'blue';
    });
    // TODO: lo mismo para los anchors de los menu items
  }

  let timeOut: NodeJS.Timeout;

  globalThis.addEventListener('resize', () => {
    clearTimeout(timeOut);
    nav.style.display = 'none';
    button.style.display = 'none';

    timeOut = setTimeout(() => {
      updateElements();
    }, 100);
  });

  nav.style.display = 'none';
  button.style.display = 'none';
  updateElements();
  return header;
}
