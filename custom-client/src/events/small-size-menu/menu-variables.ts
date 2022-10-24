import getScreenSize from '../../helpers/sizes.js';

export type NavStateType = 'shown' | 'hidden' | 'error';

export interface HideOpenMenu {
  'touch-width': string;
  'nav-left': string;
  'nav-shadow': string;
  state: NavStateType;
}

export const menuShown: HideOpenMenu = {
  'touch-width': '100vw',
  'nav-left': '0px',
  'nav-shadow': '0rem  2.4rem 2.8rem rgba(0, 0, 0, 0.3)',
  state: 'shown',
};

export const menuHidden: HideOpenMenu = {
  'touch-width': '10vw',
  'nav-left': `${
    getScreenSize().width > getScreenSize().height ? getScreenSize().width * -1 : getScreenSize().height * -1
  }px`,
  'nav-shadow': 'none',
  state: 'hidden',
};
