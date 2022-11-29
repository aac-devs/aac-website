import {
  createDivElement,
  createInputElement,
  createLabelElement,
  createTextareaElement,
  InputmodeType,
  InputType,
} from '../../atoms/html-atom.js';

export interface InputTextParams {
  styleName: string;
  textContent?: string;
  className?: string;
  id?: string;
  inputmode?: InputmodeType;
  pattern?: string;
  type?: InputType;
  name?: string;
  title?: string;
  eventDetail?: string;
  minlength?: number;
  maxlength?: number;
  tabindex: number;
  fn?: (c: string, ev?: Event, className?: string) => string;
}

export interface TextareaParams {
  styleName: string;
  textContent?: string;
  className?: string;
  id?: string;
  eventDetail?: string;
  minlength?: number;
  maxlength?: number;
  tabindex?: number;
  cols?: number;
  rows?: number;
  fn?: (c: string, ev?: Event, className?: string) => string;
}

type FnType = typeof createTextareaElement | typeof createInputElement;
type FnParams = Partial<InputTextParams> & Partial<TextareaParams>;
export function createInputTextareaMolecule<F extends FnType, P extends FnParams>(func: F, p: P) {
  const { eventDetail: ed, fn, textContent, styleName, ...rest } = p;
  const container = createDivElement({ styleName: 'CONTACT_INPUT_CONTAINER' });
  const label = createLabelElement({ styleName: 'CONTACT_INPUT_LABEL', htmlFor: p.id!, textContent });
  const element = func({
    ...rest,
    styleName: styleName!,
    autocomplete: 'off',
    eventEmmiter: { eventDetail: ed!, eventType: 'input' },
    eventReceiver: { eventDetail: ed!, receiverFn: fn! },
  });
  container.append(label, element);
  return container;
}
