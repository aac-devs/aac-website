import CSS from '../../helpers/css.js';
import getScreenSize from '../../helpers/sizes.js';

type ElementClassNames = string | string[];
export type ElementReferenceReturn = HTMLElement | (HTMLElement | null)[] | null;

export function elementsReference(classNames: ElementClassNames): ElementReferenceReturn {
  if (!classNames) return null;
  if (Array.isArray(classNames))
    return classNames.map((className) => <HTMLElement>globalThis.document.querySelector(`.${className}`));
  return <HTMLElement>globalThis.document.querySelector(`.${classNames}`);
}

type NavStateType = 'shown' | 'hidden' | 'error';

function hideOpen() {
  let navState: NavStateType = 'hidden';

  const TOUCH_AREA_WIDTH_HIDDEN = CSS.start().width('10vw').toString();
  const NAV_LEFT_HIDDEN = CSS.start()
    .left(`${getScreenSize().width * -0.4}px`)
    .toString();
  const NAV_SHADOW_HIDDEN = CSS.start().boxShadow('none').toString();

  const TOUCH_AREA_WIDTH_SHOWN = CSS.start().width('100vw').toString();
  const NAV_LEFT_SHOWN = CSS.start().left('0px').toString();
  const NAV_SHADOW_SHOWN = CSS.start().boxShadow('0rem', '2.4rem', '2.8rem', 'rgba(0, 0, 0, 0.3)').toString();

  let areaWidth: string, left: string, shadow: string;

  return (): NavStateType => {
    const references: ElementReferenceReturn = elementsReference(['menu-nav', 'touch-area', 'menu-button']);
    if (!Array.isArray(references)) return 'error';

    const nav = <HTMLElement | null>references[0];
    const touchArea = <HTMLElement | null>references[1];
    const menuButton = <HTMLElement | null>references[2];

    if (navState === 'hidden') {
      navState = 'shown';
      areaWidth = TOUCH_AREA_WIDTH_SHOWN;
      left = NAV_LEFT_SHOWN;
      shadow = NAV_SHADOW_SHOWN;
    } else {
      navState = 'hidden';
      areaWidth = TOUCH_AREA_WIDTH_HIDDEN;
      left = NAV_LEFT_HIDDEN;
      shadow = NAV_SHADOW_HIDDEN;
    }
    if (touchArea && nav) {
      touchArea.setAttribute(
        'style',
        `${CSS.start()
          .insert(`${touchArea.getAttribute('style')}${areaWidth}`)
          .toString()}`
      );
      nav.setAttribute(
        'style',
        `${CSS.start()
          .insert(`${nav.getAttribute('style')}${left}${shadow}`)
          .toString()}`
      );
    }
    return navState;
  };
}

// TODO: Refactorizar código

export const hideOpenNav = hideOpen();

//     touchAreaWidth = CSS.start().width('100vw').toString();
//     leftStyle = CSS.start().left('0px').toString();
//     shadowStyle = CSS.start().boxShadow('0rem', '2.4rem', '2.8rem', 'rgba(0, 0, 0, 0.3)').toString();

//     touchAreaWidth = CSS.start().width('10vw').toString();
//     leftStyle = CSS.start()
//       .left(`${screenWidth * -0.4}px`)
//       .toString();
//     shadowStyle = CSS.start().boxShadow('none').toString();

//   touchArea.setAttribute(
//     'style',
//     `${CSS.start()
//       .insert(`${touchArea.getAttribute('style')}${touchAreaWidth}`)
//       .toString()}`
//   );
//   nav.setAttribute(
//     'style',
//     `${CSS.start()
//       .insert(`${nav.getAttribute('style')}${leftStyle}${shadowStyle}`)
//       .toString()}`
//   );
