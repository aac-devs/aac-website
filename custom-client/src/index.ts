import './helpers/css/string.extensions.js';
import './helpers/document.extensions.js';
import './helpers/htmlelement.extensions.js';
import './state/index.js';
import './components/styles/index.js';
import './state-full-compnents/events/click-event.js';
import { createMainHeaderOrganism } from './state-full-compnents/components/header/header.organism.js';
import { createMainSections } from './state-full-compnents/components/sections/sections.js';
import { projectOrganims } from './state-full-compnents/components/projects/project.organism.js';
import { hackerrankOrganims } from './state-full-compnents/components/hackerrank/hackerrank.organism.js';
import { skillsOrganims } from './state-full-compnents/components/skills/skills.organism.js';
import { contactOrganism } from './state-full-compnents/components/contact/contact.organism.js';

const html: HTMLElement = globalThis.document.getElementsByTagName('html')[0];
const body: HTMLElement = globalThis.document.getElementsByTagName('body')[0];
const relleno: HTMLElement = globalThis.document.createElement('div');

const { html: HTML_STYLES, body: BODY_STYLES } = Document.prototype.getStyles();

HTMLElement.prototype.resetElementsStyles(
  { element: html, style: HTML_STYLES! },
  { element: body, style: BODY_STYLES! },
  { element: relleno, style: ''.cssProperties(['background-color', 'lime'], ['height', '100vh']) }
);

body.appendChild(createMainHeaderOrganism());
body.appendChild(createMainSections());
setTimeout(() => {
  const data: StateType | undefined = Document.prototype.getState('hola');
  if (data) {
    projectOrganims(data.projects);
    hackerrankOrganims(data.hackerrank);
    skillsOrganims(data.skills);
    contactOrganism();
  }
}, 200);

// body.appendChild(createSocialOrganims());
// body.appendChild(createNavOrganism(liItemsData));
// body.append(image, anchor, text, relleno);

// body.append(mobileHeader());

// const elements = mobileSections();

// elements.forEach((el) => body.appendChild(el));
// body.append(ul, info);
// body.append(header);

// const hText = <HTMLElement>createTextElement({
//   styles: 'background-color:yellow',
//   headingTag: 'h1',
//   textContent: 'titulo',
//   listenerDetail: 'backcolor-change',
//   elementDataset: {
//     key: 'backgroundColor',
//     value: ['red', 'background-color:red'],
//     states: [
//       ['red', 'background-color:red'],
//       ['green', 'background-color:green'],
//       ['blue', 'background-color:blue'],
//     ],
//     stateChangeFn: (stateList: DatasetValue[], currentState: DatasetValue): DatasetValue => {
//       let newState: DatasetValue = ['', ''];
//       console.log({ currentState });
//       for (let i = 0; i < stateList.length; i++) {
//         if (stateList[i][0] === currentState[0]) {
//           console.log({ i, currentState });
//           if (i === stateList.length - 1) {
//             newState[0] = stateList[0][0];
//             newState[1] = stateList[0][1];
//           } else {
//             newState[0] = stateList[i + 1][0];
//             newState[1] = stateList[i + 1][1];
//           }
//           break;
//         }
//       }
//       console.log({ newState });
//       return newState;
//     },
//   },
// });

// const aa = <HTMLElement>createAnchorElement({
//   styles: 'background-color:blue',
//   href: '#hola',
//   textContent: 'my link',
//   id: 'link1',
//   eventType: 'click',
//   listenerDetail: 'backcolor-change',
// });

// const anchor = createAnchorElement({
//   href: '#link',
//   // eventType: 'click',
//   id: 'lk1',
//   textContent: 'enlace de prueba',
//   stylesName: 'main-header-nav-ul-li-anchor',
//   customEventDetail: 'anchor-event',
// });

// body.append(hText, aa);

// const icon2 = createIconElement({
//   className: 'fa-brands fa-linkedin',
//   stylesName: 'main-header-nav-ul-li-anchor-icon',
// });

// const icon1 = createIconElement({
//   className: 'fa-brands fa-github',
//   stylesName: 'main-header-nav-ul-li-anchor-icon',
// });

// const container = createDivElement({
//   stylesName: 'main-header-nav-info-linkedin',
//   // eventType: 'click',
//   customEventDetail: 'icon-github',
// });

// container.appendChild(icon1);

// const btn1 = createButtonElement({
//   stylesName: 'main-header-button',
//   // eventType: 'click',
//   customEventDetail: 'text-visible-hidden',
// });
// const btn2 = createButtonElement({
//   stylesName: 'main-header-button',
//   // eventType: 'click',
//   customEventDetail: 'open-close-nav',
//   textContent: 'aac',
//   hoverText: 'my tooltip',
// });

// const containerImage = createDivElement({
//   stylesName: 'main-header-nav-ul-li-anchor-icon-container',
//   borderBox: true,
// });

// const image = createImageElement({
//   stylesName: 'main-header-nav-ul-li-anchor-icon',
//   alt: 'hr-image',
//   src: 'https://res.cloudinary.com/aac-devs-data/image/upload/v1667017201/aac-website/info/HackerRank_Icon-1000px_qrcxjg.png',
// });

// containerImage.appendChild(image);
// btn1.appendChild(icon2);

// const h1Text = createTextElement({
//   textTag: 'h1',
//   textContent: 'h1 texto',
//   stylesName: 'main-header-brand',
//   boxSidesReset: true,
//   borderBox: true,
//   customEventDetail: 'text-visible-hidden',
//   dataset: 'textVisibility',
//   datasetState: 'visible',
//   datasetCallbackFn: (oldValue: VisibleHiddenType) => {
//     let newValue: VisibleHiddenType;
//     if (oldValue === 'visible') {
//       newValue = 'hidden';
//     } else {
//       newValue = 'visible';
//     }
//     return [newValue, { visibility: newValue }];
//   },
// });
// const h2Text = createTextElement({
//   textTag: 'h2',
//   textContent: 'h2 texto',
//   stylesName: '',
//   boxSidesReset: true,
//   borderBox: true,
// });
// const h3Text = createTextElement({
//   textTag: 'h3',
//   textContent: 'h3 texto',
//   stylesName: '',
//   boxSidesReset: true,
// });
// const h4Text = createTextElement({
//   textTag: 'h4',
//   textContent: 'h4 texto',
//   stylesName: '',
//   boxSidesReset: true,
//   borderBox: true,
// });
// const h5Text = createTextElement({
//   textTag: 'h5',
//   textContent: 'h5 texto',
//   stylesName: '',
//   boxSidesReset: true,
// });
// const h6Text = createTextElement({
//   textTag: 'h6',
//   textContent: 'h6 texto',
//   stylesName: '',
//   boxSidesReset: true,
// });
// const pText = createTextElement({
//   textTag: 'p',
//   textContent: 'p texto',
//   stylesName: '',
//   boxSidesReset: true,
// });

// const li = createLiElement({
//   stylesName: 'main-header-nav-ul-li',
//   borderBox: true,
//   boxSidesReset: true,
// });
// li.appendChild(h3Text);

// const nav = createNavElement({
//   stylesName: 'main-header-nav',
//   borderBox: true,
//   boxSidesReset: true,
//   customEventDetail: 'open-close-nav',
//   dataset: 'openCloseNav',
//   datasetState: 'closed',
//   datasetCallbackFn: (oldDatasetValue: OpenCloseState) => {
//     if (oldDatasetValue === 'closed') return ['opened', { transform: 'translateX(0%)' }];
//     return ['closed', { transform: 'translateX(-140%)' }];
//   },
// });

// nav.append(anchor);

// body.append(nav, container, containerImage, h1Text, h2Text, li, h4Text, h5Text, h6Text, pText, btn1, btn2);

// body.append(relleno);
