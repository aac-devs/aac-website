import { createAnchorElement, createDivElement, createSectionElement } from '../../atoms/html-atom.js';
import { createIconMolecule } from '../nav/molecules/icon.molecule.js';

export function createSocialOrganims(): HTMLElement {
  const socialContainer = createDivElement({
    styleName: 'SOCIAL_CONTAINER',
    eventReceiver: {
      eventDetail: 'MENU-BUTTON',
      currentState: 'transform:translateX(-140%);',
      // possibleStates: [],
      receiverFn: (c: string): string => {
        if (c === 'transform:translateX(-140%);') return 'transform:translateX(0%);';
        return 'transform:translateX(-140%);';
      },
    },
  });
  const aGithub = createAnchorElement({
    href: '#',
    styleName: '',
    eventEmmiter: { eventDetail: 'MENU-BUTTON', eventType: 'click' },
  });
  const aLinkedin = createAnchorElement({
    href: '#',
    styleName: '',
    eventEmmiter: { eventDetail: 'MENU-BUTTON', eventType: 'click' },
  });
  const iconGithub = createIconMolecule({
    className: 'fa-brands fa-github',
    styleName: { container: 'SOCIAL_GITHUB_ICON_CONTAINER', icon: 'SOCIAL_ICON' },
  });
  const iconLinkedin = createIconMolecule({
    className: 'fa-brands fa-linkedin',
    styleName: { container: 'SOCIAL_LINKEDIN_ICON_CONTAINER', icon: 'SOCIAL_ICON' },
  });
  aGithub.appendChild(iconGithub);
  aLinkedin.appendChild(iconLinkedin);
  socialContainer.append(aGithub, aLinkedin);
  return socialContainer;
}
