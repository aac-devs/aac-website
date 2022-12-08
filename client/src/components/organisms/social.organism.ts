import * as atom from '../atoms/html-atom.js';
import * as mol from '../molecules/index.js';

const customEvent = new CustomEvent('nav-close');

// TODO: poner esta función en su archivo individual
function createSocialItem(item: SocialItemType): HTMLElement {
  // console.log({ item });
  const socialAnchor_ANCHOR = atom.createAnchorElement({ href: item.href, styleName: '', target: '_blank' });
  const anchorIcon_DIV = mol.createIconMolecule({
    className: item.iconClassname,
    styleName: { container: 'SOCIAL_ICON_CONTAINER', icon: 'SOCIAL_ICON' },
  });
  anchorIcon_DIV.style.setProperty('color', item.color);

  function dispatchEventToCloseNav() {
    globalThis.document.dispatchEvent(customEvent);
  }

  socialAnchor_ANCHOR.appendChild(anchorIcon_DIV);
  socialAnchor_ANCHOR.addEventListener('click', dispatchEventToCloseNav);

  globalThis.document.addEventListener('styles', () => {
    anchorIcon_DIV.style.setProperty('color', item.color);
  });

  return socialAnchor_ANCHOR;
}

// ------------
export function createSocialOrganims(params: SocialItemType[]): HTMLElement {
  const socialContainer_DIV = atom.createDivElement({ styleName: 'SOCIAL_CONTAINER' });

  params.forEach((param: SocialItemType) => {
    const item = createSocialItem(param);
    socialContainer_DIV.appendChild(item);
  });

  socialContainer_DIV.addEventListener('click', (ev: Event) => ev.stopPropagation());

  return socialContainer_DIV;
}
