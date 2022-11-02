import mobileHeader from './components/mobile/header/nav/nav.js';
import { mobileSections } from './components/mobile/sections/projects.js';
import './helpers/string.extensions.js';

globalThis.document
  .getElementsByTagName('html')[0]
  .setAllStyles(
    ''
      .css('box-sizing', 'border-box')
      .css('font-family', '"Poppins", sans-serif')
      .css('height', '100%')
      .css('margin', '0')
      .css('padding', '0')
      .css('position', 'relative')
      .css('scroll-behavior', 'smooth')
      .css('background-color', '#fff')
  );

const body = globalThis.document.getElementsByTagName('body')[0];
body.setAllStyles(
  ''
    .css('box-sizing', 'border-box')
    .css('padding', '0')
    .css('margin', '0')
    .css('background-color', '#fff')
    .css('min-height', '100%')
    .css('position', 'relative')
);

body.append(mobileHeader());

const { elements, setState } = mobileSections();

elements.forEach((el) => body.appendChild(el));

setTimeout(() => {
  setState({ project: 'games', hackerrank: 'days of js', skills: 'JavaScript', contact: 'aac@mail.com' });
}, 3000);
