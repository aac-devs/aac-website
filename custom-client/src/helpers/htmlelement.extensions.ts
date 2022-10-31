interface PropsObject {
  [index: string]: string;
}

interface HTMLElement {
  addStyles(newStyles: string): void;
  setAllStyles(newStyles: string): void;
  changeStyleProps(newStyles: PropsObject): void;
  setClassName(className: string): void;
}

HTMLElement.prototype.addStyles = function (newStyles: string) {
  const element = <HTMLElement>this;
  const currentStyles = element.getAttribute('style');
  const mergedStyles = currentStyles ? `${currentStyles}${newStyles}` : newStyles;
  element.setAttribute('style', `${mergedStyles}`);
  // console.log('add:', element.getAttribute('style'));
};

function setAttribute(attrName: string) {
  return function (attrValue: string) {
    const element = <HTMLElement>this;
    element.setAttribute(attrName, attrValue);
  };
}

HTMLElement.prototype.setAllStyles = setAttribute('style');
// HTMLElement.prototype.setClassName = setAttribute('class');

HTMLElement.prototype.changeStyleProps = function (propsObject: PropsObject) {
  const element = <HTMLElement>this;
  for (const [key, value] of Object.entries(propsObject)) {
    element.style.setProperty(key, value);
  }
  // element.setAttribute('style', newStyles);
  // console.log('loose:==>', element.getAttribute('style'));
};
