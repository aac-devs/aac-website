// type SectionStyles = {
//   SECTION_STYLES: string;
//   HEADER_STYLES: string;
//   TITLE_STYLES: string;
//   ICON_STYLES: string;
// };

// type Subscriber<Type> = {
//   [Property in keyof Type]: (newValue: Type[Property]) => void;
// };

// interface CustomElement {
//   tag: string;
//   src?: string;
//   textContent?: string;
//   className?: string;
//   id?: string;
//   eventFn?: (ev?: Event) => void;
// }

// interface ReturnCustomElement<Type> {
//   element: HTMLElement;
//   setStylesFn: <Type>(STYLES: Subscriber<Type>) => void;
// }

// function customEl<Type>(elem: CustomElement): ReturnCustomElement<Type> {
//   const element: HTMLElement = globalThis.document.createElement(elem.tag);

//   function setStylesFn(st: Type) {
//     console.log(st);
//   }
//   return {
//     element,
//     setStylesFn<Type>
//   };z
// }
