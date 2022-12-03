import getScreenSize from '../../helpers/sizes.js';
import { desktopStyles } from './desktop.js';
import { mobileLandscapeStyles } from './mobile-landscape.js';
import { mobilePortraitStyles } from './mobile-portrait.js';

const styleEvent = new Event('styles', { bubbles: true });

let timeOut: NodeJS.Timeout;

function updateStyles() {
  const { height, width, orientation, device } = getScreenSize();
  const formatSize = orientation === 'portrait-primary' ? height : width;
  globalThis.document.getElementsByTagName('html')[0].style.fontSize = `${formatSize / 16}%`;

  let stylesToUpdate: ElementStyles = {};
  if (device === 'mobile') {
    stylesToUpdate = orientation === 'portrait-primary' ? mobilePortraitStyles() : mobileLandscapeStyles();
  } else if ('desktop') {
    stylesToUpdate = desktopStyles();
  }

  Document.prototype.setStyles(stylesToUpdate);
  globalThis.document.dispatchEvent(styleEvent);
}

globalThis.addEventListener('resize', () => {
  clearTimeout(timeOut);
  timeOut = setTimeout(updateStyles, 100);
});

updateStyles();
