import { LiMoleculeParams } from './molecules/li.molecule';

const LI_STYLES_NAME = 'NAV_LI';
const ANCHOR_STYLES_NAME = 'NAV_ANCHOR';
const ICON_STYLES_NAME = 'NAV_ICON';
const ICON_CONTAINER_STYLES_NAME = 'NAV_ICON_CONTAINER';

export const liItemsData: LiMoleculeParams[] = [
  {
    anchor: { styleName: ANCHOR_STYLES_NAME, textContent: 'Projects', href: '#projects', target: '_self' },
    icon: {
      className: 'fa-solid fa-gears',
      styleName: {
        container: ICON_CONTAINER_STYLES_NAME,
        icon: ICON_STYLES_NAME,
      },
    },
    li: { styleName: LI_STYLES_NAME },
    hasIconImage: true,
    hasText: false,
  },
  {
    anchor: { styleName: ANCHOR_STYLES_NAME, textContent: 'HackerRank', href: '#hackerrank', target: '_self' },
    image: {
      src: 'https://res.cloudinary.com/aac-devs-data/image/upload/v1667017201/aac-website/info/HackerRank_Icon-1000px_qrcxjg.png',
      alt: 'image-name',
      styleName: {
        container: ICON_CONTAINER_STYLES_NAME,
        image: ICON_STYLES_NAME,
      },
    },
    li: { styleName: LI_STYLES_NAME },
    hasIconImage: true,
    hasText: false,
  },
  {
    anchor: { styleName: ANCHOR_STYLES_NAME, textContent: 'Skills', href: '#skills', target: '_self' },
    icon: {
      className: 'fa-solid fa-screwdriver-wrench',
      styleName: {
        container: ICON_CONTAINER_STYLES_NAME,
        icon: ICON_STYLES_NAME,
      },
    },
    li: { styleName: LI_STYLES_NAME },
    hasIconImage: true,
    hasText: false,
  },
  {
    anchor: { styleName: ANCHOR_STYLES_NAME, textContent: 'Contact', href: '#contact', target: '_self' },
    icon: {
      className: 'fa-regular fa-message',
      styleName: {
        container: ICON_CONTAINER_STYLES_NAME,
        icon: ICON_STYLES_NAME,
      },
    },
    li: { styleName: LI_STYLES_NAME },
    hasIconImage: true,
    hasText: false,
  },
];
