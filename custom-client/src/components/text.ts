import CSS from '../helpers/css.js';
import { FontSize, FontWeight, TextTag, Theme } from '../helpers/enums.js';

export function createTextElement(text: string, size: TextTag, textColor: Theme): HTMLElement {
  const textElement = window.document.createElement(size);
  textElement.innerText = text;
  textElement.setAttribute(
    'style',
    CSS.start()
      .fontWeight(FontWeight[size])
      .fontSize(FontSize[size])
      .padding('0')
      .margin('0')
      .marginBlockStart(0, 'px')
      .marginBlockEnd(0, 'px')
      .color(textColor.toString())
      .cursor('not-allowed')
      .height('auto')
      .toString()
  );
  return textElement;
}
