import ThemeColor from './helpers/colors.js';
import setChildrenRelation from './helpers/relations.js';
import getScreenSize from './helpers/sizes.js';
import mobileHeader from './components/mobile/header/nav/nav.js';
import './helpers/string.extensions.js';

const html = globalThis.document.getElementsByTagName('html')[0];
html.setAttribute(
  'style',
  ''
    .css('box-sizing', 'border-box')
    .css('font-family', '"Poppins", sans-serif')
    .css('height', '100%')
    .css('margin', '0')
    .css('padding', '0')
    .css('background-color', '#fff')
);

const body = globalThis.document.getElementsByTagName('body')[0];
body.setAttribute(
  'style',
  ''
    .css('box-sizing', 'border-box')
    .css('padding', '0')
    .css('margin', '0')
    .css('background-color', '#fff')
    .css('min-height', '100%')
    .css('position', 'relative')
);

body.appendChild(mobileHeader());
