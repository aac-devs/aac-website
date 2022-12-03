import { createAnchorElement, createDivElement, createHeadingElement } from '../../atoms/html-atom.js';

const RESERVED_RIGHTS = `© Andrés Arana Castillo - 2022`;

const APP_DESCRIPTION = `This WebApp was made using only JavaScript (TypeScript) without Frameworks/Libraries, without .css files, index.html file has only <body> tag with <head> tag of course. This WebApp is completly responsive. Trying to make the code as reusable as possible. You can watch its code`;

export function contactFooterOrganism(): HTMLElement {
  const footerContainer = createDivElement({ styleName: 'CONTACT_FOOTER_CONTAINER' });
  const codeAnchor = createAnchorElement({
    href: '#',
    target: '_blank',
    styleName: 'CONTACT_CODE_ANCHOR',
    textContent: 'here',
  });
  const footerRights = createHeadingElement({
    textTag: 'h6',
    styleName: 'CONTACT_FOOTER_APP_RESERVED_RIGHTS',
    textContent: RESERVED_RIGHTS,
  });
  const footerDescription = createHeadingElement({ textTag: 'p', styleName: 'CONTACT_FOOTER_APP_DESCRIPTION' });

  footerDescription.append(`${APP_DESCRIPTION} `, codeAnchor, '!.');
  codeAnchor.addEventListener('click', (ev: Event) => ev.stopPropagation());

  footerContainer.append(footerRights, footerDescription);
  return footerContainer;
}
