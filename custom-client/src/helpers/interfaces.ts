import { InfoStyles, ListItemFn } from './types';

export interface ElementWithStyleFunctionReturn {
  element: HTMLElement;
  styleFn: ListItemFn;
}

export interface ElementWithStyleFunctionArrayReturn {
  element: HTMLElement;
  styleFns: ListItemFn[];
}

export interface InfoReturn {
  info: HTMLElement;
  setStyles: (styles: InfoStyles) => void;
}
