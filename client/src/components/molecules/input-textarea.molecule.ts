import * as atom from '../atoms/html-atom.js';

export type TextareaFnType = typeof atom.createTextareaElement;
export type InputFnType = typeof atom.createInputElement;

export type BothFn = TextareaFnType | InputFnType;
export type BothParams = InputControlParams & TextareaControlParams;
export type BothReq = [BothFn, BothParams];

export function createInputTextareaMolecule<F extends BothFn, P extends BothParams>(func: F, p: P) {
  const { textContent, ...rest } = p;
  const container = atom.createDivElement({ styleName: 'CONTACT_INPUT_CONTAINER' });
  const label = atom.createLabelElement({
    styleName: 'CONTACT_INPUT_LABEL',
    htmlFor: p.id!,
    id: p.id!,
    textContent,
  });
  const element = func({ ...rest });
  container.append(label, element);
  return container;
}
