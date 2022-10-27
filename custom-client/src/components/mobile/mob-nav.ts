import '../../helpers/htmlelement.extensions.js';
import '../../helpers/string.extensions.js';
import getScreenSize from '../../helpers/sizes.js';
// import { navStyles } from './styles/navStyles.js';
import { menuStyles } from './styles/menu-styles.js';

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

function createMenuItems(fn: (ev?: Event) => void): HTMLElement {
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

    a.addEventListener('click', fn);
  });
  return ul;
}

export default function mobileHeader() {
  const header: HTMLElement = globalThis.document.createElement('header');
  const nav: HTMLElement = globalThis.document.createElement('nav');
  const info: HTMLElement = globalThis.document.createElement('section');
  const touch: HTMLElement = globalThis.document.createElement('div');
  const button: HTMLElement = globalThis.document.createElement('button');

  let navStyle: string;
  let navState: 'visible' | 'hidden' = 'hidden';
  const HIDE_NAV = 'translateX(-100%)';
  const SHOW_NAV = 'translateX(0%)';
  const HIDE_SHADOW = 'none';
  const SHOW_SHADOW = '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)';

  const ul: HTMLElement = createMenuItems(() => {
    navStyle = navStyle.css('transform', HIDE_NAV).css('box-shadow', HIDE_SHADOW);
    navState = 'hidden';
    nav.setAttribute('style', navStyle);
  });

  nav.setAttribute('class', 'menu-nav');

  button.style.width = '3rem';
  button.style.height = '3rem';
  button.style.backgroundColor = 'red';

  nav.appendChild(info);
  nav.appendChild(ul);
  header.appendChild(touch);
  header.appendChild(button);
  header.appendChild(nav);

  function updateElements() {
    if (getScreenSize().device === 'desktop') return;

    const [HEADER_STYLES, NAV_STYLES, INFO_STYLES, UL_STYLES] = menuStyles();

    navStyle = NAV_STYLES.css('transform', 'translateX(-100%)').css('box-shadow', 'none');
    header.setAttribute('style', HEADER_STYLES);
    nav.setAttribute('style', navStyle); // cambiar a hidden
    info.setAttribute('style', INFO_STYLES);
    ul.setAttribute('style', UL_STYLES);
    // touch.setAttribute('style', styles['touch-shown']); // cambiar a hidden
    // button.setAttribute('style', styles['button-bars']);

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
    navState = 'hidden';
    // button.style.display = 'none';

    timeOut = setTimeout(() => {
      updateElements();
    }, 100);
  });

  button.addEventListener('click', () => {
    if (navState === 'hidden') {
      navState = 'visible';
      navStyle = navStyle.css('transform', SHOW_NAV).css('box-shadow', SHOW_SHADOW);
    } else {
      navState = 'hidden';
      navStyle = navStyle.css('transform', HIDE_NAV).css('box-shadow', HIDE_SHADOW);
    }
    nav.setAttribute('style', navStyle);
  });

  nav.style.display = 'none';
  // button.style.display = 'none';
  updateElements();
  return header;
}
