import { TextTag, Theme } from '../../helpers/enums.js';
import { createTextElement } from '../text.js';

// ----------------------------------------------------------------------------------
// -------------- BRAND -------------------------------------------------------------
// ----------------------------------------------------------------------------------
export function createBrand(className: string): HTMLElement {
  const brand = createTextElement('aac-devs', TextTag.brand, 'light');
  brand.setAttribute('class', className);
  return brand;
}
