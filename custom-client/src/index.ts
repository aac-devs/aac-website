import CSS from './helpers/css.js';
import { createMenuNav } from './components/header/nav.js';
import { createMainHeader } from './components/header/head.js';
import ThemeColor from './helpers/colors.js';
import { createBrand } from './components/header/brand.js';
import createMenuButton from './components/header/menu-button.js';
import createMenuUl from './components/header/ul.js';
import createListItem from './components/header/li.js';
import { createTouchArea } from './components/header/touch-area.js';
// import touchEvent from './events/touch-listeners.js';
import { createIcon, Icons } from './components/other/icons.js';
import { proto } from './components/header/small-menu.js';
import setChildrenRelation from './helpers/relations.js';
import { addListener, ListenerType } from './events/listeners.js';

const html = globalThis.document.getElementsByTagName('html')[0];
// const htmlStyles = CSSStyles.insert(html.getAttribute('style')).toString();
// html.setAttribute('style', styles.html);
html.setAttribute(
  'style',
  CSS.start()
    .boxSizing('border-box')
    .fontFamily('"Poppins"', 'monospace')
    .height('100%')
    .margin('0px')
    .padding('0px')
    .backgroundColor('white')
    .toString()
);

const body = globalThis.document.getElementsByTagName('body')[0];
body.setAttribute(
  'style',
  CSS.start()
    .boxSizing('border-box')
    .padding('0px')
    .margin('0px')
    .backgroundColor(ThemeColor.colorGreyLighter)
    .minHeight('100%')
    .toString()
);

// -------------- MAIN HEADER -------------------------------------------------------
const mainHeader = createMainHeader('main-header');

// -------------- BRAND -------------------------------------------------------------
const brandElement = createBrand('brand-element');

// -------------- MENU BUTTON -------------------------------------------------------
const menuButton = createMenuButton('menu-button', mainHeader.style.height);

// -------------- MENU NAV ----------------------------------------------------------
const menuNav = createMenuNav('menu-nav', mainHeader.style.height);

// -------------- MENU UL -----------------------------------------------------------
const menuUl = createMenuUl('menu-ul');

// -------------- MENU LIST ITEMS ---------------------------------------------------
const listItems: HTMLElement[] = ['Projects', 'HackerRank', 'Skills', 'Contact'].map((itemName) =>
  createListItem(itemName)
);

// -------------- TOUCH AREA --------------------------------------------------------
const touchArea = createTouchArea('touch-area');

const linkedinIcon = createIcon(Icons.linkedin);
const githubIcon = createIcon(Icons.github);

// -------------- BODY RELATIONSHIP -------------------------------------------------
setChildrenRelation({
  parent: body,
  children: [
    setChildrenRelation({
      parent: mainHeader,
      children: [
        touchArea,
        brandElement,
        menuButton,
        setChildrenRelation({
          parent: menuNav,
          children: [setChildrenRelation({ parent: menuUl, children: listItems })],
        }),
      ],
    }),
    ,
    linkedinIcon,
    githubIcon,
  ],
});

// -------------- LISTENERS ---------------------------------------------------------
const elementListeners: ListenerType[] = [
  [menuButton, 'click'],
  [touchArea, 'touchmove'],
  [menuNav, 'touchmove'],
];

addListener(elementListeners);

// -------------- LISTENERS ---------------------------------------------------------

export function listeners(ev: Event) {
  console.clear();
  if (!ev.target) return;
  const target = <HTMLElement>ev.target;
  const type: string = ev.type;
  console.log(target);
  console.log(type);
  switch (type) {
    case 'click':
      if (target.className.endsWith('-menu-a')) {
        console.log('click event / anchor');
      } else if (target.className === 'menu-button') {
        console.log('click event / menu-button');
      }
      break;
    case 'touchmove':
      if (target.className === 'menu-nav') {
        console.log('touch event / menu-nav');
        // touchEvent(ev, menuNav, touchArea);
      } else if (target.className === 'touch-area') {
        console.log('touch event / touch-area');
        // touchEvent(ev, menuNav, touchArea);
      }
      break;
  }
}

// const barsIcon = createIcon(Icons.bars);
// const xmarkIcon = createIcon(Icons.xmark);
// const linkedinIcon = createIcon(Icons.linkedin);
// const githubIcon = createIcon(Icons.github);
// const linkIcon = createIcon(Icons.link);
// const jsIcon = createIcon(Icons.javascript);
// const jsSqIcon = createIcon(Icons.square_javascript);
// const pagerIcon = createIcon(Icons.pager);
// const projectIcon = createIcon(Icons.project);
// const skillIcon = createIcon(Icons.skill);
// const contactIcon = createIcon(Icons.contact);
// const infoIcon = createIcon(Icons.info);
// const copyRightIcon = createIcon(Icons.copy_right);

proto();

// HEADER:
// const header = createHeader('aac-devs', ['Projects', 'HackerRank', 'Skills', 'Contact']);
// body.appendChild(header);
// const touchArea = window.document.createElement('div');

// touchArea.setAttribute('class', 'touch-area');
// touchArea.setAttribute('style', styles.touchArea.off);

// body.appendChild(touchArea);

//---------------------------------
// const newStyles = CSSStyles.insert(body.getAttribute('style')).toString();
// console.log(newStyles);

// const newHtmlStyles = CSSStyles.insert(html.getAttribute('style')).toString();
// console.log(styles.body);
// console.log(newHtmlStyles);

// const changed = CSSStyles.insert(html.getAttribute('style'))
//   .right('auto')
//   .top(22, 'px')
//   .left(18, 'vh')
//   .bottom(2, '%')
//   .marginTop('auto')
//   .marginRight(25, 'rem')
//   .margin('50rem')
//   .padding('12px')
//   .toString();
// console.log(changed);

// globalThis.setTimeout(() => {
//   console.log('aca');
//   // adjustScreenSize();
//   // updateHeader();
//   dom('init');
//   eventsRegister();
//   console.log('y aca');
// }, 100);

// const resp = replaceStyles(
//   header.getAttribute('style'),
//   'flex-direction:column;justify-content:flex-start;align-items:stretch'
// );
// console.log(resp);

// TODO: Enviar la imagen del menu y demás a cloudinary y luego incoroporarlas en el elemento. Buscar imágenes en flaticon.es
// Pendiente pushear a github
// Ajustar el tamaño del brand en pantallas pequeñas

// const image = window.document.createElement('img');
// image.setAttribute(
//   'src',
//   'https://res.cloudinary.com/aac-devs-data/image/upload/v1663975746/aac-website/projects/youtubeclone_ypszxw.png'
// );

// image.setAttribute('alt', 'menu-image');
// image.setAttribute('style', 'height:100px;width:100px');
// body.appendChild(image);
