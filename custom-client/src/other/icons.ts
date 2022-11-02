// import getScreenSize from '../../helpers/sizes.js';

// type RelativeIconSize =
//   | 'fa-2xs' // 10px - 0.625em
//   | 'fa-xs' // 12px - 0.75em
//   | 'fa-sm' // 14px - 0.875em
//   | 'fa-lg' // 20px - 1.25em
//   | 'fa-xl' // 24px - 1.5em
//   | 'fa-2xl'; // 32px - 2em

// type LiteralIconSize =
//   | 'fa-1x' // 1em
//   | 'fa-2x' // 2em
//   | 'fa-3x' // 3em
//   | 'fa-4x' // 4em
//   | 'fa-5x' // 5em
//   | 'fa-6x' // 6em
//   | 'fa-7x' // 7em
//   | 'fa-8x' // 8em
//   | 'fa-9x' // 9em
//   | 'fa-10x'; // 10em

// font-size can be used to change the icon size
// type IconSize = RelativeIconSize | LiteralIconSize;

export enum Icons {
  'bars' = 'fa-solid fa-bars',
  'xmark' = 'fa-solid fa-xmark',
  'linkedin' = 'fa-brands fa-linkedin',
  'github' = 'fa-brands fa-github',
  'link' = 'fa-solid fa-arrow-up-right-from-square',
  'javascript' = 'fa-brands fa-js',
  'pager' = 'fa-solid fa-pager',
  'project' = 'fa-solid fa-gears',
  'square_javascript' = 'fa-brands fa-square-js',
  'skill' = 'fa-solid fa-screwdriver-wrench',
  'contact' = 'fa-regular fa-message',
  'info' = 'fa-solid fa-circle-info',
  'copy_right' = 'fa-solid fa-copyright',
}

export function createIcon(iconType: Icons): HTMLElement {
  const icon: HTMLElement = globalThis.document.createElement('i');
  icon.setAttribute('class', iconType);
  icon.style.fontSize = '2.6rem';
  icon.style.margin = '0rem';
  icon.style.border = '1px solid black';
  icon.style.padding = '0.3rem';
  icon.style.aspectRatio = '1';
  icon.style.borderRadius = '0.5rem';
  return icon;
}
