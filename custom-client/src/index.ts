import mobileHeader from './components/header/nav/nav.js';
import { mobileSections } from './components/sections/index.js';
import './helpers/css/string.extensions.js';
import './helpers/document.extensions.js';
import './helpers/htmlelement.extensions.js';
import './state/index.js';
import './components/styles/index.js';
import './state-full-compnents/events/click-event.js';
import { header } from './components/customComponents/custom-main-header-component.js';
import {
  createAnchorElement,
  createButtonElement,
  createDivElement,
  createIconElement,
} from './state-full-compnents/atoms/html-element.js';
// import { ul } from './components/customComponents/custom-list-items-component.js';
// import { info } from './components/customComponents/custom-info-section-component.js';
// import { nav } from './components/customComponents/custom-nav-component.js';

const html: HTMLElement = globalThis.document.getElementsByTagName('html')[0];
const body: HTMLElement = globalThis.document.getElementsByTagName('body')[0];
const relleno: HTMLElement = globalThis.document.createElement('div');

const { html: HTML_STYLES, body: BODY_STYLES } = Document.prototype.getStyles();

HTMLElement.prototype.setElementsStyles(
  { element: html, style: HTML_STYLES! },
  { element: body, style: BODY_STYLES! },
  { element: relleno, style: ''.cssProperties(['background-color', 'wheat'], ['height', '100vh']) }
);

//

// body.append(mobileHeader());

// const elements = mobileSections();

// elements.forEach((el) => body.appendChild(el));
// body.append(ul, info);
// body.append(header);
const anchor = createAnchorElement({
  href: '#link',
  eventType: 'click',
  id: 'lk1',
  textContent: 'enlace de prueba',
  stylesName: 'main-header-nav-ul-li-anchor',
  eventTag: 'anchor event',
});

const icon1 = createIconElement({ className: 'fa-brands fa-github', stylesName: 'main-header-nav-ul-li-anchor-icon' });
const icon2 = createIconElement({
  className: 'fa-brands fa-linkedin',
  stylesName: 'main-header-nav-ul-li-anchor-icon',
});

const container = createDivElement({
  stylesName: 'main-header-nav-info-linkedin',
  eventType: 'click',
  eventTag: 'icon-github',
});

container.appendChild(icon1);

const btn1 = createButtonElement({ stylesName: 'main-header-button', eventType: 'click', eventTag: 'btn1-event' });
const btn2 = createButtonElement({
  stylesName: 'main-header-button',
  eventType: 'click',
  eventTag: 'btn2-event',
  textContent: 'aac',
});

btn1.appendChild(icon2);

body.append(anchor, container, btn1, btn2);

// body.append(relleno);
