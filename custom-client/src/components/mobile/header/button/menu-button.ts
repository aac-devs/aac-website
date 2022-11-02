import { VisibilityType } from '../../../styles/menu-styles';

export interface ButtonWithFunctionReturn {
  button: HTMLButtonElement;
  styleFn: (styles: MenuButtonStyles) => void;
}

export type MenuButtonStyles = {
  button?: string;
  showBars: VisibilityType;
};

export default function createMenuButton(fn: (ev: Event) => void): ButtonWithFunctionReturn {
  const button = <HTMLButtonElement>globalThis.document.createElement('button');
  const barsContainer = <HTMLElement>globalThis.document.createElement('span');
  const xmarkContainer = <HTMLElement>globalThis.document.createElement('span');
  const bars = <HTMLElement>globalThis.document.createElement('i');
  const xmark = <HTMLElement>globalThis.document.createElement('i');

  bars.className = 'fa-solid fa-bars';
  xmark.className = 'fa-solid fa-xmark';

  bars.setAllStyles(''.css('height', '100%').css('aspect-ratio', '1'));
  xmark.setAllStyles(''.css('height', '100%').css('aspect-ratio', '1'));

  const ICON_STYLES = ''
    .css('height', '80%')
    .css('position', 'absolute')
    .css('top', '10%')
    .css('left', '10%')
    .css('aspect-ratio', '1');

  barsContainer.setAllStyles(ICON_STYLES.css('visibility', 'visible'));
  xmarkContainer.setAllStyles(ICON_STYLES.css('visibility', 'hidden'));

  barsContainer.appendChild(bars);
  xmarkContainer.appendChild(xmark);

  button.append(barsContainer, xmarkContainer);

  button.addEventListener('click', fn);

  function styleFn(styles: MenuButtonStyles) {
    if (styles.button) button.setAllStyles(styles.button);
    barsContainer.style.visibility = styles.showBars;
    xmarkContainer.style.visibility = styles.showBars === 'visible' ? 'hidden' : 'visible';
  }

  return { button, styleFn };
}
