// // import './helpers/css/string.extensions.js';

// export type OpenCloseState = 'opened' | 'closed';

// function setElementAttributes<P extends AllHTMLElement>(attrs: P, elem: AllHTMLElement): AllHTMLElement {
//   // console.log(attrs);
//   if (attrs.textContent) elem.textContent = attrs.textContent;
//   if (attrs.href) elem.href = attrs.href;
//   return elem;
// }

// type StylesType = {
//   prop: string;
//   value: string;
// };

// interface AnchorInterface extends Partial<HTMLAnchorElement> {}

// interface TextInterface extends Partial<HTMLHeadingElement> {}

// // export const createTextElement = createAtom()<TextElementParams<VisibleHiddenType>>;
// export const createTextElement = createAtom()<TextInterface>;
// // export const createAnchorElement = createAtom('a')<AnchorInterface>;

// type AllHTMLElement = Partial<AnchorInterface> & Partial<TextInterface> & Partial<HTMLElement>;
// //& Partial<HTMLElement> & Partial<HTMLFormElement>;

// // function createAtom(tag?: Tag) {
// //   let currenStyles: StylesType;
// //   let stylesList: StylesType[];
// //   // let openCloseState: OpenCloseState = 'closed';
// //   // return function <P extends AllParams>(params: P): HTMLElement {
// //   return function <P extends AllHTMLElement>(params: P): AllHTMLElement {
// //     //   const {
// //     //   id,
// //     //   borderBox,
// //     //   boxSidesReset,
// //     //   href,
// //     //   textContent,
// //     //   className,
// //     //   hoverText,
// //     //   stylesName,
// //     //   textTag,
// //     //   eventType,
// //     //   customEventDetail,
// //     //   src,
// //     //   alt,
// //     //   dataset,
// //     //   datasetState,
// //     //   datasetCallbackFn,
// //     // } = params;
// //     // const tagg = params.headingTag ? params.headingTag : tag;
// //     // let element = <AllHTMLElement>globalThis.document.createElement(tagg!);
// //     // element = <AllHTMLElement>setElementAttributes(params, element);
// //     // if (params.elementDataset) {
// //     //   const { key, value, states, stateChangeFn } = params.elementDataset;
// //     //   element.dataset![`${key}`] = value[0];
// //     //   datasetStates = states;
// //     //   datasetStateSelected = states[0];
// //     //   globalThis.document.addEventListener(params.listenerDetail!, () => {
// //     //     const newState: DatasetValue = stateChangeFn(datasetStates, datasetStateSelected);
// //     //     datasetStateSelected = newState;
// //     //     element.dataset![`${key}`] = newState[0];
// //     //     // element.styles[`${key}`];
// //     //     // element.setAttribute('style', value[1].toString());
// //     //   });
// //     // }
// //     // if (params.eventType && params.listenerDetail) {
// //     //   console.log('eventType && listenerDetail');
// //     //   const customEvent = new CustomEvent(params.listenerDetail, {
// //     //     detail: params.listenerDetail,
// //     //   });
// //     //   element.addEventListener!(params.eventType!, () => {
// //     //     globalThis.document.dispatchEvent(customEvent);
// //     //   });
// //     // }
// //     // const element = <HTMLElType>globalThis.document.createElement(`${textTag ? textTag : tag}`);
// //     // if (href) element.href = href;
// //     // if (id) element.id = id;
// //     // if (hoverText) element.title = hoverText;
// //     // if (className) element.className = className;
// //     // if (textContent) element.textContent = textContent;
// //     // if (src) element.src = src;
// //     // if (alt) element.alt = alt;
// //     // if (dataset && customEventDetail) {
// //     //   element.dataset[`${dataset}`] = datasetState;
// //     //   globalThis.document.addEventListener(customEventDetail, () => {
// //     //     if (datasetCallbackFn) {
// //     //       const oldDatasetValue = <typeof datasetState>element.dataset[`${dataset}`];
// //     //       const [newDatasetValue, newElementStyles] = datasetCallbackFn(oldDatasetValue!);
// //     //       element.dataset[`${dataset}`] = newDatasetValue;
// //     //       Object.entries(newElementStyles).forEach(([key, value]: [string, string]) => {
// //     //         element.style.setProperty(key, value);
// //     //       });
// //     //     }
// //     //   });
// //     // }
// //     // if (eventType) {
// //     //   const customEvent = new CustomEvent('element', {
// //     //     detail: customEventDetail,
// //     //   });
// //     //   element.addEventListener(eventType, () => {
// //     //     globalThis.document.dispatchEvent(customEvent);
// //     //   });
// //     // }
// //     // function stylesFunction() {
// //     //   Object.entries(Document.prototype.getStyles()).forEach(([key, value]) => {
// //     //     if (key === stylesName) HTMLElement.prototype.setElementsStyles({ element, style: value });
// //     //   });
// //     //   if (boxSidesReset || borderBox) {
// //     //     const boxSideStyle = boxSidesReset
// //     //       ? 'margin:0;marginBlock:0;marginInline:0;padding:0;paddingBlock:0;paddingInline:0;'
// //     //       : '';
// //     //     const boxSizingStyle = borderBox ? 'box-sizing:border-box;' : '';
// //     //     const current = element.getAttribute('style');
// //     //     element.setAttribute('style', `${current ? current : ''}${boxSideStyle}${boxSizingStyle}`);
// //     //   }
// //     // }
// //     // globalThis.addEventListener('styles', stylesFunction);
// //     // stylesFunction();
// //     // return element;
// //   };
// // }

// interface RequiredParams {
//   stylesName: string;
// }

// interface OptionalParams<T> {
//   alt?: string;
//   borderBox?: boolean;
//   boxSidesReset?: boolean;
//   className?: string;
//   customEventDetail?: CustomEventDetail;
//   eventType?: EventType;
//   href?: string;
//   id?: string;
//   src?: string;
//   textTag?: string;
//   textContent?: string;
//   hoverText?: string;
//   dataset?: string;
//   datasetState?: T;
//   datasetCallbackFn?: (oldDatasetValue: T) => [T, CSSProperty];
//   // datasetCallbackFn?: (oldDatasetValue: T) => NavDatasetReturn;
// }

// type AllParams = RequiredParams & OptionalParams<any>;

// interface AnchorElementParams<T> {
//   href: string;
//   borderBox?: boolean;
//   textContent?: string;
//   id?: string;
//   stylesName: string;
//   eventType?: EventType;
//   customEventDetail?: CustomEventDetail;
//   boxSidesReset?: boolean;
//   dataset?: string;
//   datasetState?: T;
//   datasetCallbackFn?: (oldDatasetValue: T) => [T, CSSProperty];
//   // datasetCallbackFn?: (oldDatasetValue: T) => NavDatasetReturn;
// }

// interface IconElementParams<T> {
//   borderBox?: boolean;
//   className: string;
//   stylesName: string;
//   boxSidesReset?: boolean;
//   customEventDetail?: CustomEventDetail;
//   dataset?: string;
//   datasetState?: T;
//   datasetCallbackFn?: (oldDatasetValue: T) => [T, CSSProperty];
//   // datasetCallbackFn?: (oldDatasetValue: T) => NavDatasetReturn;
// }

// interface ImageElementParams<T> {
//   borderBox?: boolean;
//   stylesName: string;
//   src: string;
//   alt: string;
//   boxSidesReset?: boolean;
//   customEventDetail?: CustomEventDetail;
//   dataset?: string;
//   datasetState?: T;
//   datasetCallbackFn?: (oldDatasetValue: T) => [T, CSSProperty];
//   // datasetCallbackFn?: (oldDatasetValue: T) => NavDatasetReturn;
// }

// interface DivElementParams<T> {
//   borderBox?: boolean;
//   stylesName: string;
//   eventType?: EventType;
//   customEventDetail?: CustomEventDetail;
//   boxSidesReset?: boolean;
//   dataset?: string;
//   datasetState?: T;
//   datasetCallbackFn?: (oldDatasetValue: T) => [T, CSSProperty];
//   // datasetCallbackFn?: (oldDatasetValue: T) => NavDatasetReturn;
// }

// interface ButtonElementParams<T> {
//   borderBox?: boolean;
//   stylesName: string;
//   eventType?: EventType;
//   customEventDetail?: CustomEventDetail;
//   textContent?: string;
//   boxSidesReset?: boolean;
//   hoverText?: string;
//   dataset?: string;
//   datasetState?: T;
//   datasetCallbackFn?: (oldDatasetValue: T) => [T, CSSProperty];
//   // datasetCallbackFn?: (oldDatasetValue: T) => NavDatasetReturn;
// }

// type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
// // H1 ... H6, P
// interface TextElementParams<T> {
//   borderBox?: boolean;
//   textTag: TextTag;
//   stylesName: string;
//   textContent?: string;
//   boxSidesReset?: boolean;
//   eventType?: EventType;
//   customEventDetail?: CustomEventDetail;
//   dataset?: string;
//   datasetState?: T;
//   datasetCallbackFn?: (oldDatasetValue: T) => [T, CSSProperty];
//   // datasetCallbackFn?: (oldDatasetValue: T) => NavDatasetReturn;
// }

// interface LiElementParams<T> {
//   stylesName: string;
//   borderBox?: boolean;
//   boxSidesReset?: boolean;
//   customEventDetail?: CustomEventDetail;
//   dataset?: string;
//   datasetState?: T;
//   datasetCallbackFn?: (oldDatasetValue: T) => [T, CSSProperty];
//   // datasetCallbackFn?: (oldDatasetValue: T) => NavDatasetReturn;
// }

// interface NavElementParams<T> {
//   stylesName: string;
//   borderBox?: boolean;
//   boxSidesReset?: boolean;
//   eventType?: EventType;
//   customEventDetail?: CustomEventDetail;
//   /**
//    * Atributo agregado a un elemento para que éste pueda responder ante una acción disparada con un event:
//    */
//   dataset?: string;
//   /**
//    * Estado inicial del atributo personalizado agregado al elemento:
//    */
//   datasetState?: T;
//   /**
//    * Función que se ejecuta cuando se recibe desde el event-listener:
//    */
//   datasetCallbackFn?: (oldDatasetValue: T) => [T, CSSProperty];
// }

// // type NavDatasetReturn = [OpenCloseState, CSSProperty];
// export type VisibleHiddenType = 'visible' | 'hidden';

// interface StylesName {
//   styles: string;
// }

// interface HeadingTag {
//   headingTag: TextTag;
// }

// interface EventLinker {
  //   listenerDetail?: string;
//   elementDataset?: DatasetAttribute;
//   eventType?: string;
// }

// export type DatasetValue = [value: string, stylesName: string];

// interface DatasetAttribute {
//   key: string;
//   value: DatasetValue;
//   states: DatasetValue[];
//   stateChangeFn: (stateList: DatasetValue[], currentState: DatasetValue) => DatasetValue;
// }

// // export const createButtonElement = createAtom('button')<ButtonElementParams<any>>;
// // export const createDivElement = createAtom('div')<DivElementParams<any>>;
// // export const createIconElement = createAtom('i')<IconElementParams<any>>;
// // export const createImageElement = createAtom('img')<ImageElementParams<any>>;
// // export const createLiElement = createAtom('li')<LiElementParams<any>>;
// // export const createNavElement = createAtom('nav')<NavElementParams<OpenCloseState>>;

// // export const createNavElement = createAtom('nav')<NavElementParams && <NavDatasetParams && NavDatasetReturn>;
// // BLOCK ELEMENTS:

// // INLINE ELEMENTS:

// // export const createHeaderElement = createAtom('header');
// // export const createSectionElement = createAtom('section')<SecParams>;
// // export const createSpanElement = createAtom('span')<SpnParams>;
// // export const createUlElement = createAtom('ul');

// /*
// GROUP TAGS:
//   GENERAL:
//   - <div>, <p>, <hr>, <pre>, <main>. <blockquote>
//   LISTS & TERMS:
//   - <ul>, <ol>, <li>, <dl>, <dt>, <dd>
//   FIGURE & CAPTIONS:
//   - <figure>, <figcaption>
//   SEMANTIC TAGS:
//   - <article>, <section>, <nav>, <aside>, <h1>, <h2> ... <h6>, <header>, <footer>, <address>

// TABLE TAGS:

// TEXT SEMANTIC TAGS:
//   - <em>, <strong>, <mark>, <i>, <b>, <u>, <sub>, <sup>, <small>, <var>, <samp>, <kdb>, <dfn>, <abbr>, <cite>, <q>, <br>, <wbr>, <s>, <data>, <time>, <code>

// HIPERLINKS:
//   - <a>, <area>

// EDIT TAGS:
//   - <ins>, <del>

// IMAGE TAGS:
//   IMAGES:
//   - <img>, <map>
//   NEXT-GEN IMAGES:
//   - <picture>, <source>

// INTERACTIVE TAGS:
//   - <output>, <progress>, <meter>, <details>, <summary>
// */
