import { createAnchorElement, createDivElement } from '../../atoms/html-atom.js';
import { frameOrganism } from '../reusable/frame.organism.js';

export function hackerrankOrganims(params: HackerrankType) {
  const hackerrankBody = globalThis.document.querySelector('.hackerrank-body');
  const hackerrankContainer = createDivElement({ styleName: 'HACKERRANK_CONTAINER' });

  const hrBadges = frameOrganism('Badges')(params.badges);
  const hrVerifiedSkills = frameOrganism('Verified Skills')(params.verifiedSkills);
  const hrProfileLink = createAnchorElement({
    styleName: 'HACKERRANK_PROFILE_LINK_CONTAINER',
    href: '#',
    textContent: 'Go to HackerRank profile..',
  });

  hackerrankContainer.append(hrBadges, hrVerifiedSkills, hrProfileLink);
  hackerrankBody?.appendChild(hackerrankContainer);
}
