import ThemeColor from '../../helpers/colors.js';
import CSS from '../../helpers/css.js';
import getScreenSize from '../../helpers/sizes.js';
import { createAnchorElement } from '../anchor.js';

const LI_SMALL_STYLES: string = `margin:0;margin-block-start:0px;margin-block-end:0px;border-radius:5px;display:block;text-align:center;padding:0.5rem;border:1px solid ${ThemeColor.colorMainLight};background-color:${ThemeColor.colorMainDarker}`;

const LI_LARGE_STYLES: string = `margin:0;margin-block-start:0px;margin-block-end:0px;border-radius:0;display:inline;text-align:center;padding:0;border:none;background-color:${ThemeColor.colorMainDark}`;

const A_LARGE_STYLES: string = CSS.start()
  .fontWeight('400')
  .fontSize('1.8rem')
  .padding('0')
  .margin('0')
  .marginBlockStart(0, 'px')
  .marginBlockEnd(0, 'px')
  .textDecorationLine('none')
  .toString();
const A_SMALL_STYLES: string = CSS.start()
  .fontWeight('400')
  .fontSize('3rem')
  .padding('0')
  .margin('0')
  .marginBlockStart(0, 'px')
  .marginBlockEnd(0, 'px')
  .textDecorationLine('none')
  .toString();

// ----------------------------------------------------------------------------------
// -------------- MENU LIST ITEM ----------------------------------------------------
// ----------------------------------------------------------------------------------
export default function createListItem(name: string) {
  const li: HTMLElement = globalThis.document.createElement('li');
  li.setAttribute('class', `${name.toLowerCase()}-item`);
  const anchor: HTMLElement = createAnchorElement({
    className: name,
    text: name,
    href: `#${name.toLowerCase()}`,
    color: ThemeColor.colorGreyLighter,
    hoverColor: ThemeColor.colorAccentNormal,
  });
  li.appendChild(anchor);
  setStyles();

  function setStyles() {
    const { liStyles, aStyles } =
      getScreenSize().width > 944
        ? { liStyles: LI_LARGE_STYLES, aStyles: A_LARGE_STYLES }
        : { liStyles: LI_SMALL_STYLES, aStyles: A_SMALL_STYLES };
    anchor.setAttribute('style', CSS.insert(`${anchor.getAttribute('style')}${aStyles}`).toString());
    li.setAttribute('style', liStyles);
  }

  window.addEventListener('resize', setStyles);
  return li;
}