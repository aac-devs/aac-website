import './html-element-extensions/string.extensions';
import './html-element-extensions/document.extensions';
import './html-element-extensions/htmlelement.extensions';
import './state/index';
import './styles/index';

import createSections from './components/templates/sections';
import * as org from './components/organisms/index';

const html: HTMLElement = globalThis.document.getElementsByTagName('html')[0];
const body: HTMLElement = globalThis.document.getElementsByTagName('body')[0];

const { HTML: HTML_STYLES, BODY: BODY_STYLES } = Document.prototype.getStyles();

HTMLElement.prototype.resetElementsStyles(
  { element: html, style: HTML_STYLES! },
  { element: body, style: BODY_STYLES! }
);

globalThis.document.addEventListener('state', () => {
  const data: StateType | undefined = Document.prototype.getState('hola');
  if (data) {
    const { defaults, projects, hackerrank, skills } = data;
    if (defaults) body.appendChild(org.createMainHeaderOrganism(defaults));
    body.appendChild(createSections());
    if (projects) org.projectOrganims(projects);
    if (hackerrank) org.hackerrankOrganims(hackerrank);
    if (skills) org.skillsOrganims(skills);
    if (defaults) org.contactOrganism(defaults.thisAppRepoLink);
  }
});

const customEvent = new CustomEvent('nav-close');

body.addEventListener('click', () => {
  globalThis.document.dispatchEvent(customEvent);
});
