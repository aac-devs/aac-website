function createAtomicElement(tag?: HTMLTag) {
  return function <P extends AllParams>(p: P): AllHTMLElements {
    const element = <AllHTMLElements>globalThis.document.createElement(p.textTag ? p.textTag : tag!);

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
    if (p.target) element.target = p.target;
    if (p.textContent) element.textContent = p.textContent;
    if (p.title) element.title = p.title;
    if (p.type) element.type = p.type;
    if (p.value) element.value = p.value;

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
