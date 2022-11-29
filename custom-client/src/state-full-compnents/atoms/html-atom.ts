type AllHTMLElements = HTMLAnchorElement &
  HTMLButtonElement &
  HTMLDivElement &
  HTMLFormElement &
  HTMLHeadElement &
  HTMLHeadingElement &
  HTMLImageElement &
  HTMLInputElement &
  HTMLLabelElement &
  HTMLLIElement &
  HTMLSpanElement &
  HTMLTextAreaElement &
  HTMLUListElement;

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

type HTMLTag =
  | 'a'
  | 'button'
  | 'div'
  | 'form'
  | 'header'
  | 'img'
  | 'input'
  | 'label'
  | 'li'
  | 'main'
  | 'nav'
  | 'textarea'
  | 'section'
  | 'span'
  | 'ul';

function createAtomicElement(tag?: HTMLTag) {
  return function <P extends AllParams>(p: P): AllHTMLElements {
    const element = <AllHTMLElements>globalThis.document.createElement(p.textTag ? p.textTag : tag!);
    let currentState: string; // Estilos adicionales a los que se aplican con cada screen

    if (p.alt) element.alt = p.alt;
    if (p.autocomplete) element.autocomplete = p.autocomplete;
    if (p.autofocus) element.autofocus = p.autofocus;
    if (p.buttonType) element.type = p.buttonType;
    if (p.className) element.className = p.className;
    if (p.cols) element.cols = p.cols;
    if (p.disabled) element.disabled = p.disabled;
    if (p.href) element.href = p.href;
    if (p.htmlFor) element.htmlFor = p.htmlFor;
    if (p.id) element.id = p.id;
    if (p.inputmode) element.inputMode = p.inputmode;
    if (p.max) element.max = p.max;
    if (p.maxlength) element.maxLength = p.maxlength;
    if (p.min) element.min = p.min;
    if (p.minlength) element.minLength = p.minlength;
    if (p.name) element.name = p.name;
    if (p.pattern) element.pattern = p.pattern;
    if (p.placeholder) element.placeholder = p.placeholder;
    if (p.required) element.required = p.required;
    if (p.rows) element.rows = p.rows;
    if (p.src) element.src = p.src;
    if (p.tabindex) element.tabIndex = p.tabindex;
    if (p.textContent) element.textContent = p.textContent;
    if (p.title) element.title = p.title;
    if (p.type) element.type = p.type;
    if (p.value) element.value = p.value;

    if (p.eventReceiver) {
      currentState = p.eventReceiver.currentState!;
      if (p.type || p.cols) {
        element.addEventListener(p.eventReceiver.eventDetail, (ev: Event) => {
          currentState = p.eventReceiver?.receiverFn(currentState, ev, p.className)!;
        });
      } else {
        globalThis.document.addEventListener(p.eventReceiver.eventDetail, (ev: Event) => {
          currentState = p.eventReceiver?.receiverFn(currentState, ev)!;
          HTMLElement.prototype.setElementsStyles({ element, style: currentState });
        });
      }
    }

    if (p.eventEmmiter) {
      const customEvent = new CustomEvent(p.eventEmmiter.eventDetail, { detail: p.eventEmmiter.eventDetail });
      element.addEventListener!(p.eventEmmiter.eventType, () => {
        if (p.type || p.cols) {
          element.dispatchEvent(customEvent);
        } else {
          globalThis.document.dispatchEvent(customEvent);
        }
      });
    }

    function setMainStyles() {
      const styles = Document.prototype.getStyles();
      Object.entries(styles).forEach(([key, value]: [string, string]) => {
        if (key === p.styleName) {
          HTMLElement.prototype.resetElementsStyles({ element, style: value });
        }
      });
    }

    globalThis.document.addEventListener('styles', setMainStyles);
    setMainStyles();
    return element;
  };
}

export type EventType = 'click' | 'resize' | 'change' | 'input';

export type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

type AutocompleteType = 'off' | 'on';

export type InputmodeType = 'latin' | 'numeric' | 'email';

export type GlobalParams = {
  styleName: string;
  textContent?: string;
  className?: string;
  id?: string;

  eventReceiver?: {
    eventDetail: string;
    currentState?: string;
    receiverFn: (currentState: string, ev?: Event, className?: string) => string;
  };

  eventEmmiter?: {
    eventDetail: string;
    eventType: EventType; // click, resize, etc
  };
};

type ControlGlobalParams = {
  disabled?: boolean;
  name?: string;
};

type TextControlParams = {
  autocomplete?: AutocompleteType;
  autofocus?: boolean;
  maxlength?: number;
  minlength?: number;
  placeholder?: string;
  required?: boolean;
};

type FormControlParams = GlobalParams &
  ControlGlobalParams & {
    autocomplete?: AutocompleteType;
  };

export type InputControlParams = GlobalParams &
  ControlGlobalParams &
  TextControlParams & {
    type?: InputType;
    inputmode?: InputmodeType;
    max?: string;
    min?: string;
    pattern?: string;
    tabindex?: number;
    title?: string;
    value?: never;
  };

export type TextareaControlParams = GlobalParams &
  ControlGlobalParams &
  TextControlParams & {
    cols?: number;
    rows?: number;
  };

export type ButtonControlParams = GlobalParams &
  ControlGlobalParams & {
    title?: string;
    value?: never;
    buttonType: 'button' | 'submit' | 'reset';
    tabindex?: number;
  };

export type LabelControlParams = GlobalParams & {
  htmlFor: string;
};

type AnchorParams = GlobalParams & {
  href: string;
};

type ImageParams = GlobalParams & {
  src: string;
  alt: string;
};

export type HeadingParams = GlobalParams & {
  textTag: HeadingTag;
};

type IconParams = GlobalParams & {
  className: string;
};

type AllParams = Partial<AnchorParams> &
  Partial<ImageParams> &
  Partial<HeadingParams> &
  Partial<FormControlParams> &
  Partial<InputControlParams> &
  Partial<TextareaControlParams> &
  Partial<LabelControlParams> &
  Partial<ButtonControlParams>;

export const createAnchorElement = createAtomicElement('a')<AnchorParams>;
export const createImageElement = createAtomicElement('img')<ImageParams>;
export const createHeadingElement = createAtomicElement()<HeadingParams>;
export const createHeaderElement = createAtomicElement('header')<GlobalParams>;
export const createNavElement = createAtomicElement('nav')<GlobalParams>;
export const createUlElement = createAtomicElement('ul')<GlobalParams>;
export const createLiElement = createAtomicElement('li')<GlobalParams>;
export const createButtonElement = createAtomicElement('button')<ButtonControlParams>;
export const createIconElement = createAtomicElement('span')<IconParams>;
export const createDivElement = createAtomicElement('div')<GlobalParams>;
export const createSectionElement = createAtomicElement('section')<GlobalParams>;
export const createMainElement = createAtomicElement('main')<GlobalParams>;
export const createInputElement = createAtomicElement('input')<InputControlParams>;
export const createFormElement = createAtomicElement('form')<FormControlParams>;
export const createLabelElement = createAtomicElement('label')<LabelControlParams>;
export const createTextareaElement = createAtomicElement('textarea')<TextareaControlParams>;

const anchor = createAnchorElement({
  href: '#',
  styleName: 'main-header-nav-ul-li-anchor',
  textContent: 'enlace',
  eventEmmiter: { eventDetail: 'background-color', eventType: 'click' },
});
const image = createImageElement({ src: 'https://img.com', styleName: 'img-style', alt: 'image-text' });
const text = createHeadingElement({
  textTag: 'h1',
  styleName: 'main-header-brand',
  textContent: 'texto',
  eventReceiver: {
    currentState: 'background-color:red;',
    // possibleStates: [
    //   'background-color:red;',
    //   'background-color:green;',
    //   'background-color:blue;',
    //   'background-color:transparent;',
    // ],
    eventDetail: 'background-color',
    receiverFn: (currentState: string): string => {
      let newState: string = '';
      // for (let i = 0; i < possibleStates.length; i++) {
      //   if (possibleStates[i] === currentState) {
      //     if (i === possibleStates.length - 1) {
      //       newState = possibleStates[0];
      //     } else {
      //       newState = possibleStates[i + 1];
      //     }
      //     break;
      //   }
      // }
      return newState;
    },
  },
});

export { anchor, image, text };
