function createAtom(tag: Tag) {
  return function <P extends AllParams>(params: P): HTMLElement {
    const element = <HTMLElType>globalThis.document.createElement(tag);
    const { id, href, textContent, className, stylesName, eventType, eventTag } = params;
    if (href) element.href = href;
    if (id) element.id = id;
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    if (eventType) {
      const customEvent = new CustomEvent('element', {
        detail: eventTag,
      });
      element.addEventListener(eventType, () => {
        globalThis.document.dispatchEvent(customEvent);
      });
    }
    function stylesFunction() {
      Object.entries(Document.prototype.getStyles()).forEach(([key, value]) => {
        if (key === stylesName) HTMLElement.prototype.setElementsStyles({ element, style: value });
      });
    }
    globalThis.document.addEventListener('styles', stylesFunction);
    stylesFunction();
    return element;
  };
}

interface RequiredParams {
  stylesName: string;
}

interface OptionalParams {
  href?: string;
  textContent?: string;
  id?: string;
  eventType?: EventType;
  className?: string;
  eventTag?: string;
}

type AllParams = RequiredParams & OptionalParams;

interface AnchorElementParams {
  href: string;
  textContent?: string;
  id?: string;
  stylesName: string;
  eventType?: EventType;
  eventTag?: string;
}

interface IconElementParams {
  className: string;
  stylesName: string;
}

interface DivElementParams {
  stylesName: string;
  eventType?: EventType;
  eventTag?: string;
}

interface ButtonElementParams {
  stylesName: string;
  eventType?: EventType;
  eventTag?: string;
  textContent?: string;
}

export const createIconElement = createAtom('i')<IconElementParams>;
export const createAnchorElement = createAtom('a')<AnchorElementParams>;
export const createDivElement = createAtom('div')<DivElementParams>;
export const createButtonElement = createAtom('button')<ButtonElementParams>;

// export const createHeaderElement = createAtom('header');
// export const createTextElement = createAtom('h1')<TxtParams>;
// export const createIconElement = createAtom('i')<IcoParams>;
// export const createImageElement = createAtom('img')<ImgParams>;
// export const createLiElement = createAtom('li');
// export const createSectionElement = createAtom('section')<SecParams>;
// export const createSpanElement = createAtom('span')<SpnParams>;
// export const createUlElement = createAtom('ul');
