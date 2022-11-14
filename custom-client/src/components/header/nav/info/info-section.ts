import { InfoReturn } from '../../../../helpers/interfaces';
import { InfoStyles } from '../../../../helpers/types';

export function createInfoSection(fn: (ev?: Event) => void): InfoReturn {
  const infoElement: HTMLElement = globalThis.document.createElement('div');
  const filterElement: HTMLElement = globalThis.document.createElement('div');

  const nameElement: HTMLElement = globalThis.document.createElement('h1');
  const descriptionElement: HTMLElement = globalThis.document.createElement('h2');
  const jsLogoElement: HTMLElement = globalThis.document.createElement('div');
  const linkedInAnchorElement: HTMLAnchorElement = globalThis.document.createElement('a');
  const githubAnchorElement: HTMLAnchorElement = globalThis.document.createElement('a');

  const linkedInIconElement: HTMLElement = globalThis.document.createElement('i');
  const githubIconElement: HTMLElement = globalThis.document.createElement('i');

  nameElement.textContent = 'Andrés Arana C';
  descriptionElement.textContent = 'JavaScript Developer';

  linkedInIconElement.className = 'fa-brands fa-linkedin';
  githubIconElement.className = 'fa-brands fa-github';

  linkedInAnchorElement.href = '#linkedin';
  githubAnchorElement.href = '#github';

  linkedInAnchorElement.appendChild(linkedInIconElement);
  githubAnchorElement.appendChild(githubIconElement);

  const ICON_STYLES = ''.cssProperties(['height', '100%'], ['width', '100%']);
  githubIconElement.setAllStyles(ICON_STYLES);
  linkedInIconElement.setAllStyles(ICON_STYLES);

  linkedInAnchorElement.addEventListener('click', fn);
  githubAnchorElement.addEventListener('click', fn);

  infoElement.append(
    filterElement,
    nameElement,
    descriptionElement,
    jsLogoElement,
    linkedInAnchorElement,
    githubAnchorElement
  );

  function stylesFunction(STYLES: InfoStyles) {
    HTMLElement.prototype.setElementsStyles(
      { element: filterElement, style: STYLES.FILTER },
      { element: nameElement, style: STYLES.NAME },
      { element: descriptionElement, style: STYLES.DESCRIPTION },
      { element: jsLogoElement, style: STYLES.JS_LOGO },
      { element: linkedInAnchorElement, style: STYLES.LINKEDIN },
      { element: githubAnchorElement, style: STYLES.GITHUB }
    );
  }

  return {
    infoElement,
    stylesFunction,
  };
}
