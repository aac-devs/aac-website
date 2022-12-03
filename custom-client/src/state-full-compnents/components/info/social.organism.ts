import { createAnchorElement, createDivElement, createSectionElement } from '../../atoms/html-atom.js';
import { createIconMolecule } from '../nav/molecules/icon.molecule.js';

const customEvent = new CustomEvent('nav-close');

export function createSocialOrganims(): HTMLElement {
  const socialContainer = createDivElement({ styleName: 'SOCIAL_CONTAINER' });
  const aGithub = createAnchorElement({ href: '#', styleName: '', target: '_blank' });
  const aLinkedin = createAnchorElement({ href: '#', styleName: '', target: '_blank' });
  const iconGithub = createIconMolecule({
    className: 'fa-brands fa-github',
    styleName: { container: 'SOCIAL_GITHUB_ICON_CONTAINER', icon: 'SOCIAL_ICON' },
  });
  const iconLinkedin = createIconMolecule({
    className: 'fa-brands fa-linkedin',
    styleName: { container: 'SOCIAL_LINKEDIN_ICON_CONTAINER', icon: 'SOCIAL_ICON' },
  });

  function dispatchEventToCloseNav() {
    globalThis.document.dispatchEvent(customEvent);
  }

  aGithub.addEventListener('click', dispatchEventToCloseNav);
  aLinkedin.addEventListener('click', dispatchEventToCloseNav);
  socialContainer.addEventListener('click', (ev: Event) => ev.stopPropagation());

  aGithub.appendChild(iconGithub);
  aLinkedin.appendChild(iconLinkedin);
  socialContainer.append(aGithub, aLinkedin);
  return socialContainer;
}
