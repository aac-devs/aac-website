import ThemeColor from '../helpers/colors.js';
import { TextTag, Theme } from '../helpers/enums.js';
import getScreenSize from '../helpers/sizes.js';
import { createAnchorElement } from './anchor.js';
import { createTextElement } from './text.js';
// import { styles } from '../helpers/styles.js';

export function createHeader(brand: string, items: string[]): HTMLHeadElement {
  const header = window.document.createElement('header');
  const nav = window.document.createElement('nav');
  const ul = window.document.createElement('ul');

  // console.log(styles.touchArea);

  items.forEach((item) => {
    const li = window.document.createElement('li');
    li.appendChild(
      createAnchorElement({
        text: item,
        href: `#${item.toLowerCase()}`,
        color: ThemeColor.colorGreyLighter,
        hoverColor: ThemeColor.colorAccentLight,
        className: 'menu-item',
      })
    );
    ul.appendChild(li);
  });

  ul.setAttribute('class', 'list-items');

  nav.setAttribute('class', 'menu-nav');
  nav.appendChild(ul);

  const brandElement = createTextElement(brand, TextTag.brand, Theme.light);
  brandElement.style.height = 'auto';

  const buttonElement = window.document.createElement('button');
  buttonElement.setAttribute('class', 'menu-button');
  buttonElement.innerHTML = 'X';
  // const buttonStyles = getScreenSize().width > 944 ? styles.menuButton.large : styles.menuButton.small;
  // buttonElement.setAttribute('style', buttonStyles);

  header.appendChild(brandElement);

  header.appendChild(buttonElement);
  header.appendChild(nav);

  // const headerStyles = getScreenSize().width > 944 ? styles.header.large : styles.header.small;

  // console.log(headerStyles);
  // header.setAttribute('style', headerStyles);
  header.setAttribute('class', 'main-header');

  return header;
}

export function updateHeader() {
  const nav = <HTMLElement>window.document.querySelector('.nav');
  if (nav) {
    const ul = <HTMLElement>window.document.querySelector('.list-items');
    const menuItems = window.document.getElementsByClassName('menu-item') as HTMLCollectionOf<HTMLElement>;
    const header = <HTMLElement>window.document.querySelector('.main-header');
    const buttonElement = <HTMLElement>window.document.querySelector('.menu-button');
    const screenValues = getScreenSize();

    let ulStyles: string,
      navStyles: string,
      menuItemStyles: string,
      headerStyles: string,
      headerHeight: string,
      buttonStyles: string;

    if (screenValues.width > 944) {
      // Big Screens:
      // headerStyles = styles.header.large;
      headerHeight = header.style.height;

      // buttonStyles = styles.menuButton.large;

      // ulStyles = styles.ul.large;

      // menuItemStyles = styles.menuItem.large;

      // navStyles = styles.nav.large;
      // nav.setAttribute('style', navStyles);
    } else {
      // Small Screens:
      // headerStyles = styles.header.small;
      headerHeight = header.style.height;

      // buttonStyles = styles.menuButton.small;

      // ulStyles = styles.ul.small;

      // menuItemStyles = styles.menuItem.small;

      // navStyles = `${styles.nav.small};left:${`-${screenValues.width * 0.5}px`};width:${`${
      //   screenValues.width * 0.4
      // }px`};top:${`${header.style.height}`};`;

      // console.log(navStyles);
      // nav.setAttribute('style', navStyles);
      // nav.style.setProperty('height', `calc(${screenValues.height}px - ${header.style.height})`);
    }

    // header.setAttribute('style', headerStyles);
    header.style.height = headerHeight;

    // buttonElement.setAttribute('style', buttonStyles);

    // ul.setAttribute('style', ulStyles);

    Array.from(menuItems).forEach((item) => {
      item.setAttribute('style', menuItemStyles);
      item.style.color = ThemeColor.colorGreyLighter;
    });
  }
}
