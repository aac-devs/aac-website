import { createHeaderElement } from '../customElement/custom-element.js';
import { InfoComponentParams } from './custom-info-component.js';
import { UlComponentParams } from './custom-list-items-component.js';
import { createCustomNavComponent as createNavComponent, NavComponentParams } from './custom-nav-component.js';

interface HeaderButtonComponentParams {
  eventType: EventType;
  eventFn: (ev: Event) => void;
  iconClassNames: {
    bars: '';
    xmark: '';
  };
}

interface HeaderBrandComponentParams {
  text: string;
}

export interface MainHeaderComponentParams {
  navParams: NavComponentParams;
  buttonParams: HeaderButtonComponentParams;
  brandParams: HeaderBrandComponentParams;
}

export function createCustomMainHeaderComponent(params: MainHeaderComponentParams): CustomCompReturn<HTMLElType> {
  const [headerEl, headerStFn] = createHeaderElement();

  const [navEl, navStFn] = createNavComponent(params.navParams);

  function setStyles(st: ElementStyles) {
    console.log('main header styles function');
  }
  return [headerEl, setStyles];
}

// TODO: remove, only for proofs
const info: InfoComponentParams = {
  name: 'Andrés Arana C',
  desc: 'JavaScript Developer',
  lkdi: ['fa-brands fa-linkedin', '#linkedin'],
  gith: ['fa-brands fa-github', '#github'],
  evTp: 'click',
  evFn: () => {
    console.log('linkedin or github click');
  },
};

const listItems: UlComponentParams = {
  items: [
    ['Projects', 'fa-solid fa-gears'],
    [
      'HackerRank',
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1667017201/aac-website/info/HackerRank_Icon-1000px_qrcxjg.png',
    ],
    ['Skills', 'fa-solid fa-screwdriver-wrench'],
    ['Contact', 'fa-regular fa-message'],
  ],
  eventFn: (ev?: Event) => {
    if (!ev?.target) return;
    const target = <HTMLAnchorElement>ev.target;
    console.log(target.id);
  },
};

const navParams: NavComponentParams = {
  infoParams: info,
  ulParams: listItems,
};

const brandParams: HeaderBrandComponentParams = { text: 'aac-devs' };

const buttonParams: HeaderButtonComponentParams = {
  eventType: 'click',
  eventFn: mainButtonEvent,
  iconClassNames: {
    bars: '',
    xmark: '',
  },
};

function mainButtonEvent() {
  console.log('main button event');
}

const [header, headerSt] = createCustomMainHeaderComponent({ navParams, brandParams, buttonParams });

headerSt(Document.prototype.getStyles());

export { header };
