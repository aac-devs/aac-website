import { InfoReturn } from '../../../../../helpers/interfaces';
import { InfoStyles } from '../../../../../helpers/types';

export function createInfoSection(fn: (ev?: Event) => void): InfoReturn {
  const info: HTMLElement = globalThis.document.createElement('div');
  const filter: HTMLElement = globalThis.document.createElement('div');

  const name: HTMLElement = globalThis.document.createElement('h1');
  const description: HTMLElement = globalThis.document.createElement('h2');
  const jsLogo: HTMLElement = globalThis.document.createElement('div');
  const linkedInAnchor: HTMLAnchorElement = globalThis.document.createElement('a');
  const githubAnchor: HTMLAnchorElement = globalThis.document.createElement('a');

  const linkedInIcon: HTMLElement = globalThis.document.createElement('i');
  const githubIcon: HTMLElement = globalThis.document.createElement('i');

  name.innerHTML = 'Andrés Arana C';
  description.innerHTML = 'JavaScript Developer';

  linkedInIcon.className = 'fa-brands fa-linkedin';
  githubIcon.className = 'fa-brands fa-github';

  linkedInAnchor.href = '#linkedin';
  githubAnchor.href = '#github';

  linkedInAnchor.appendChild(linkedInIcon);
  githubAnchor.appendChild(githubIcon);

  githubIcon.setAllStyles(''.css('height', '100%').css('width', '100%'));
  linkedInIcon.setAllStyles(''.css('height', '100%').css('width', '100%'));

  linkedInAnchor.addEventListener('click', fn);
  githubAnchor.addEventListener('click', fn);

  info.append(filter, name, description, jsLogo, linkedInAnchor, githubAnchor);

  function setStyles(styles: InfoStyles) {
    filter.setAllStyles(styles.filter);
    name.setAllStyles(styles.name);
    description.setAllStyles(styles.description);
    jsLogo.setAllStyles(styles.jsLogo);
    linkedInAnchor.setAllStyles(styles.linkedin);
    githubAnchor.setAttribute('style', styles.github);
  }

  return {
    info,
    setStyles,
  };
}
