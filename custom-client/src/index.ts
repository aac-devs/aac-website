import { createHeader, updateHeader } from './components/header.js';
import CSS from './helpers/css.js';
import { eventsRegister } from './helpers/events.js';
import { dom } from './helpers/dom.js';
import { createMenuNav } from './components/header/nav.js';
import { createMainHeader } from './components/header/head.js';
import ThemeColor from './helpers/colors.js';
import { createBrand } from './components/header/brand.js';
import createMenuButton from './components/header/menu-button.js';
import createMenuUl from './components/header/ul.js';
import createListItem from './components/header/li.js';

const html = globalThis.document.getElementsByTagName('html')[0];
// const htmlStyles = CSSStyles.insert(html.getAttribute('style')).toString();
// html.setAttribute('style', styles.html);
html.setAttribute(
  'style',
  CSS.start()
    .boxSizing('border-box')
    .fontFamily('Poppins')
    .height(100, '%')
    .margin('0')
    .padding('0')
    .backgroundColor('wheat')
    .toString()
);

const body = globalThis.document.getElementsByTagName('body')[0];
body.setAttribute(
  'style',
  CSS.start()
    .boxSizing('border-box')
    .padding('0')
    .margin('0')
    .backgroundColor(ThemeColor.colorGreyLighter)
    .minHeight(100, '%')
    .toString()
);

// -------------- MAIN HEADER -------------------------------------------------------
const mainHeader = createMainHeader('main-header');
// -------------- BRAND -------------------------------------------------------------
const brandElement = createBrand('brand-element');
// -------------- MENU BUTTON -------------------------------------------------------
const menuButton = createMenuButton('menu-button');
// -------------- MENU NAV ----------------------------------------------------------
const menuNav = createMenuNav('menu-nav', mainHeader.style.height);
// -------------- MENU UL -----------------------------------------------------------
const menuUl = createMenuUl('menu-ul');
// -------------- MENU LIST ITEMS ---------------------------------------------------
const itemNames = ['Projects', 'HackerRank', 'Skills', 'Contact'];
itemNames.forEach((itemName: string) => {
  menuUl.appendChild(createListItem(itemName));
});

menuNav.appendChild(menuUl);
mainHeader.appendChild(brandElement);
mainHeader.appendChild(menuButton);
mainHeader.appendChild(menuNav);

body.appendChild(mainHeader);

// console.log(body.getAttribute('style'));
// body.setAttribute('style', styles.body);

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
