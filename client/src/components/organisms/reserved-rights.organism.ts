import * as atom from '../atoms/html-atom.js';

const RESERVED_RIGHTS_HEADING = `© Andrés Arana Castillo - 2022`;

const RESERVED_RIGHTS_DESCRIPTION = `This WebApp was made using only JavaScript (TypeScript) without Frameworks/Libraries, without .css files, index.html file has only <body> tag with <head> tag of course. This WebApp is completly responsive. Trying to make the code as reusable as possible. You can watch its code`;

export function reservedRightsOrganism(thisAppRepoLink: string): HTMLDivElement {
  const reservedRightsContainer_DIV = atom.createDivElement({ styleName: 'CONTACT_FOOTER_CONTAINER' });
  const linkToGithub_ANCHOR = atom.createAnchorElement({
    href: thisAppRepoLink,
    target: '_blank',
    styleName: 'CONTACT_CODE_ANCHOR',
    textContent: 'here',
  });
  const reservedRightsHeading_H6 = atom.createHeadingElement({
    textTag: 'h6',
    styleName: 'CONTACT_FOOTER_APP_RESERVED_RIGHTS',
    textContent: RESERVED_RIGHTS_HEADING,
  });
  const reservedRightsDescription_P = atom.createHeadingElement({
    textTag: 'p',
    styleName: 'CONTACT_FOOTER_APP_DESCRIPTION',
  });

  reservedRightsDescription_P.append(`${RESERVED_RIGHTS_DESCRIPTION} `, linkToGithub_ANCHOR, '!.');
  reservedRightsHeading_H6.addEventListener('click', (ev: Event) => ev.stopPropagation());

  reservedRightsContainer_DIV.append(reservedRightsHeading_H6, reservedRightsDescription_P);
  return reservedRightsContainer_DIV;
}
