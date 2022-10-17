import ThemeColor from '../helpers/colors.js';
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
      .padding('0px')
      .margin('0px')
      .marginBlockStart('0px')
      .marginBlockEnd('0px')
      .color(textColor === 'dark' ? ThemeColor.dark : ThemeColor.light)
      .cursor('not-allowed')
      .height('auto')
      .toString()
  );

  return textElement;
}
