interface PropsObject {
  [index: string]: string;
}

interface HTMLElement {
  addStyles(newStyles: string): void;
  setAllStyles(newStyles: string): void;
  changeStyleProps(newStyles: PropsObject): void;
  setClassName(className: string): void;
  setElementsStyles(...items: ElementStyleParam[]): void;
}

HTMLElement.prototype.addStyles = function (newStyles: string) {
  const element = <HTMLElement>this;
  const currentStyles = element.getAttribute('style');
  const mergedStyles = currentStyles ? `${currentStyles}${newStyles}` : newStyles;
  element.setAttribute('style', `${mergedStyles}`);
};

function setAttribute(attrName: string) {
  return function (attrValue: string) {
    const element = <HTMLElement>this;
    element.setAttribute(attrName, attrValue);
  };
}

HTMLElement.prototype.setAllStyles = setAttribute('style');

HTMLElement.prototype.changeStyleProps = function (propsObject: PropsObject) {
  const element = <HTMLElement>this;
  for (const [key, value] of Object.entries(propsObject)) {
    element.style.setProperty(key, value);
  }
};

type ElementStyleParam = {
  element: HTMLElement;
  style: string;
};

HTMLElement.prototype.setElementsStyles = function (...items: ElementStyleParam[]) {
  items.forEach((item) => {
    item.element.setAllStyles(item.style);
  });
};
