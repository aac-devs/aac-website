// import { TxParams } from "../custom-interface/custom.interfaces";

function createCustomElement<T extends HTMLElType, P extends CustomElementParams>(params: P): CustomElemReturn<T> {
  const { clas, evFn, evTp, href, id, src, text } = params;
  const element = <T>globalThis.document.createElement('div');
  if (id) element.id = id;
  if (clas) element.className = clas;
  if (text) element.textContent = text;
  if (href) element.href = href;
  if (src) element.src = src;
  if (evFn) element.addEventListener(evTp!, evFn);
  function setStyles(style: string) {
    HTMLElement.prototype.resetElementsStyles({ element, style });
  }
  return [element, setStyles];
}

function createElement(tag: Tag) {
  return function <P extends CustomElementParams>(params?: P): CustomElemReturn<HTMLElType> {
    const element = <HTMLElType>globalThis.document.createElement(tag);
    if (params) {
      const { id, href, text, clas, evFn, evTp, src } = params;
      switch (tag) {
        case 'a':
          element.href = href!;
          element.id = id!;
          if (text) element.textContent = text;
          break;
        case 'button':
          if (text) element.textContent = text;
          break;
        case 'h1':
          element.textContent = text!;
          break;
        case 'i':
          element.className = clas!;
          break;
        case 'img':
          element.src = src!;
          break;
        case 'section':
          element.id = id!;
          break;
      }
      if (evFn) element.addEventListener(evTp!, evFn);
    }
    function setStyles(style: string) {
      HTMLElement.prototype.resetElementsStyles({ element, style });
    }
    return [element, setStyles];
  };
}

export const createAnchorElement = createElement('a')<AncParams>;
export const createButtonElement = createElement('button')<ButParams>;
export const createDivElement = createElement('div');
export const createHeaderElement = createElement('header');
export const createTextElement = createElement('h1')<TxtParams>;
export const createIconElement = createElement('i')<IcoParams>;
export const createImageElement = createElement('img')<ImgParams>;
export const createLiElement = createElement('li');
export const createSectionElement = createElement('section')<SecParams>;
export const createSpanElement = createElement('span')<SpnParams>;
export const createUlElement = createElement('ul');
