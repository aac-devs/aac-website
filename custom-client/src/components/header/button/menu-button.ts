import { ButtonWithFunctionReturn, MenuButtonStyles } from '../../../helpers/interfaces';

export default function createMainHeaderButton(clickFunction: (ev: Event) => void): ButtonWithFunctionReturn {
  const buttonElement = <HTMLButtonElement>globalThis.document.createElement('button');
  const barsIconContainerElement = <HTMLElement>globalThis.document.createElement('span');
  const xmarkIconContainerElement = <HTMLElement>globalThis.document.createElement('span');
  const barsIconElement = <HTMLElement>globalThis.document.createElement('i');
  const xmarkIconElement = <HTMLElement>globalThis.document.createElement('i');

  barsIconElement.className = 'fa-solid fa-bars';
  xmarkIconElement.className = 'fa-solid fa-xmark';

  const ICON_STATIC_STYLES = ''.cssProperties(['height', '100%'], ['width', '100%']);

  const ICON_CONTAINER_STYLES = ''.cssProperties(
    ['height', '80%'],
    ['position', 'absolute'],
    ['top', '10%'],
    ['left', '10%'],
    ['aspect-ratio', '1']
  );

  HTMLElement.prototype.resetElementsStyles(
    { element: barsIconElement, style: ICON_STATIC_STYLES },
    { element: xmarkIconElement, style: ICON_STATIC_STYLES }
    // { element: barsIconContainerElement, style: ICON_CONTAINER_STYLES.css('visibility', 'visible') },
    // { element: xmarkIconContainerElement, style: ICON_CONTAINER_STYLES.css('visibility', 'hidden') }
  );

  barsIconContainerElement.appendChild(barsIconElement);
  xmarkIconContainerElement.appendChild(xmarkIconElement);

  buttonElement.append(barsIconContainerElement, xmarkIconContainerElement);

  buttonElement.addEventListener('click', clickFunction);

  function stylesFunction(STYLES: MenuButtonStyles) {
    if (STYLES.button) HTMLElement.prototype.resetElementsStyles({ element: buttonElement, style: STYLES.button });
    barsIconContainerElement.style.visibility = STYLES.showBars;
    xmarkIconContainerElement.style.visibility = STYLES.showBars === 'visible' ? 'hidden' : 'visible';
  }

  return { buttonElement, stylesFunction };
}
