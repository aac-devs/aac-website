import getScreenSize from '../../helpers/screen-size.js';
import * as mol from '../molecules/index.js';

export const BARS_ICON: mol.IconMoleculeParams = {
  className: 'fa-solid fa-bars',
  styleName: { container: 'HEADER_BUTTON_ICON_CONTAINER', icon: 'HEADER_BUTTON_ICON' },
};

export const XMARK_ICON: mol.IconMoleculeParams = {
  className: 'fa-solid fa-xmark',
  styleName: { container: 'HEADER_BUTTON_ICON_CONTAINER', icon: 'HEADER_BUTTON_ICON' },
};

export const HEADER_PARAMS: GlobalParams = { styleName: 'HEADER_CONTAINER' };
export const BRAND_PARAMS: HeadingParams = { styleName: 'HEADER_BRAND', textTag: 'h1', textContent: 'aac-devs' };
export const BUTTON_PARAMS: GlobalParams = { styleName: 'HEADER_BUTTON' };

const NAV_PORTRAIT_VISIBLE = 'transform:translateX(0%)';
const SOCIAL_PORTRAIT_VISIBLE = 'transform:translateX(0%)';
const INFO_PORTRAIT_VISIBLE = 'transform:translateY(0%)';

const NAV_PORTRAIT_HIDDEN = 'transform:translateX(-1400%)';
const SOCIAL_PORTRAIT_HIDDEN = 'transform:translateX(-1400%)';
const INFO_PORTRAIT_HIDDEN = 'transform:translateY(1000%)';

const NAV_LANDSCAPE_VISIBLE = 'transform:translateY(0%)';
const SOCIAL_LANDSCAPE_VISIBLE = 'transform:translateY(0%)';
const INFO_LANDSCAPE_VISIBLE = 'transform:translateY(0%)';

const NAV_LANDSCAPE_HIDDEN = 'transform:translateY(-1400%)';
const SOCIAL_LANDSCAPE_HIDDEN = 'transform:translateY(1000%)';
const INFO_LANDSCAPE_HIDDEN = 'transform:translateY(1000%)';

type NavPortraitStyle = typeof NAV_PORTRAIT_VISIBLE | typeof NAV_PORTRAIT_HIDDEN;
type NavLandscapeStyle = typeof NAV_LANDSCAPE_VISIBLE | typeof NAV_LANDSCAPE_HIDDEN;
type SocialPortraitStyle = typeof SOCIAL_PORTRAIT_VISIBLE | typeof SOCIAL_PORTRAIT_HIDDEN;
type SocialLandscapeStyle = typeof SOCIAL_LANDSCAPE_VISIBLE | typeof SOCIAL_LANDSCAPE_HIDDEN;
type InfoPortraitStyle = typeof INFO_PORTRAIT_VISIBLE | typeof INFO_PORTRAIT_HIDDEN;
type InfoLandscapeStyle = typeof INFO_LANDSCAPE_VISIBLE | typeof INFO_LANDSCAPE_HIDDEN;
type ButtonIconType = 'display:none;' | 'display:block;';

type TypeOrientation = 'portrait-primary' | 'landscape-primary';
export type TypeButtonIcon = 'bars' | 'xmark';

export function positioningContainers(b: TypeButtonIcon) {
  const o = <TypeOrientation>getScreenSize().orientation;

  let navStyle: NavPortraitStyle | NavLandscapeStyle;
  let socialStyle: SocialPortraitStyle | SocialLandscapeStyle;
  let infoStyle: InfoPortraitStyle | InfoLandscapeStyle;
  let barsBtnStyle: ButtonIconType;
  let xmarkBtnStyle: ButtonIconType;
  let newState: TypeButtonIcon;

  if (b === 'bars') {
    if (o === 'portrait-primary') {
      navStyle = NAV_PORTRAIT_VISIBLE;
      socialStyle = SOCIAL_PORTRAIT_VISIBLE;
      infoStyle = INFO_PORTRAIT_VISIBLE;
    } else {
      navStyle = NAV_LANDSCAPE_VISIBLE;
      socialStyle = SOCIAL_LANDSCAPE_VISIBLE;
      infoStyle = INFO_LANDSCAPE_VISIBLE;
    }
    newState = 'xmark';
    barsBtnStyle = 'display:none;';
    xmarkBtnStyle = 'display:block;';
  } else {
    if (o === 'portrait-primary') {
      navStyle = NAV_PORTRAIT_HIDDEN;
      socialStyle = SOCIAL_PORTRAIT_HIDDEN;
      infoStyle = INFO_PORTRAIT_HIDDEN;
    } else {
      navStyle = NAV_LANDSCAPE_HIDDEN;
      socialStyle = SOCIAL_LANDSCAPE_HIDDEN;
      infoStyle = INFO_LANDSCAPE_HIDDEN;
    }
    xmarkBtnStyle = 'display:none;';
    barsBtnStyle = 'display:block;';
    newState = 'bars';
  }
  return { navStyle, socialStyle, infoStyle, barsBtnStyle, xmarkBtnStyle, newState };
}
