interface PropsObject {
  [index: string]: string;
}

interface HTMLElement {
  setElementsStyles(...items: ElementStyleParam[]): void; // Agrega estilos a los ya existentes
  resetElementsStyles(...items: ElementStyleParam[]): void; // Sobreescribe los estilos
}

type ElementStyleParam = {
  element: HTMLElement;
  style: string;
};

HTMLElement.prototype.setElementsStyles = function (...items: ElementStyleParam[]) {
  items.forEach((item) => {
    const stylesArray = item.style.split(';');
    stylesArray.forEach((st) => {
      const [prop, value] = st.split(':');
      item.element.style.setProperty(prop, value);
    });
  });
};

HTMLElement.prototype.resetElementsStyles = function (...items: ElementStyleParam[]) {
  items.forEach((item) => {
    item.element.setAttribute('style', item.style);
  });
};
