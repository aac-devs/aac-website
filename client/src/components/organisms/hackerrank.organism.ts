import * as atom from '../atoms/html-atom.js';
import * as org from './index.js';

// ------------
export function hackerrankOrganims(params: HackerrankType) {
  const hackerrankBody = globalThis.document.querySelector('.hackerrank-body');

  const hackerrankContainer = atom.createDivElement({ styleName: 'HACKERRANK_CONTAINER' });
  const hrProfileLink = atom.createAnchorElement({
    styleName: 'HACKERRANK_PROFILE_LINK_CONTAINER',
    href: params.profileLink,
    textContent: 'Go to HackerRank profile..',
    target: '_blank',
  });

  const hrBadges = org.hrSkillsSectionOrganism('Badges')(params.badges);
  const hrVerifiedSkills = org.hrSkillsSectionOrganism('Verified Skills')(params.verifiedSkills);

  hackerrankContainer.append(hrBadges, hrVerifiedSkills, hrProfileLink);
  hackerrankBody?.appendChild(hackerrankContainer);
}
