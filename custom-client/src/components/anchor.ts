import ThemeColor from '../helpers/colors';
import { addListener } from '../events/listeners.js';

export interface AnchorParams {
  text: string;
  href: string;
  color: ThemeColor;
  hoverColor: ThemeColor;
  className: string;
}

export function createAnchorElement(values: AnchorParams): HTMLAnchorElement {
  const anchorElement = globalThis.document.createElement('a');
  anchorElement.innerText = values.text;
  anchorElement.setAttribute('href', values.href);
  anchorElement.setAttribute('class', `${values.className.toLowerCase()}-menu-a`);

  anchorElement.style.color = `${values.color}`;

  anchorElement.addEventListener('mouseover', () => {
    anchorElement.style.color = values.hoverColor;
    anchorElement.style.transition = 'color 0.3s ease-in-out';
  });

  anchorElement.addEventListener('mouseout', () => {
    anchorElement.style.color = values.color;
  });

  addListener([[anchorElement, 'click']]);

  return anchorElement;
}
