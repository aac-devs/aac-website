import * as atom from '../../atoms/html-atom.js';
import * as data from './contact.organism.data.js';
import { createInputTextareaMolecule } from './input-textarea.molecule.js';

// TODO: poner footer en CONTACT con la información que se quiere mostrar.
// TODO: enviar campos del formulario mediante un POST (cuando esté el backend)

export function contactOrganism() {
  const contactBody = globalThis.document.querySelector('.contact-body');
  const contactContainer = atom.createDivElement({ styleName: 'CONTACT_CONTAINER' });

  const form = atom.createFormElement({ styleName: 'CONTACT_FORM' });
  let formValues = data.INITIAL_VALUES_STATE;
  let formValuesState = data.INITIAL_FIELDS_STATE;

  let opVal1: number = Math.floor(Math.random() * 10);
  let opVal2: number = Math.floor(Math.random() * 10);
  let opExpr: string = `Solve this operation: ${opVal1} + ${opVal2} =`;
  let opResult: number = opVal1 + opVal2;

  function changeButtonStyles(f: typeof formValuesState) {
    const comparationResult = f.username && f.useremail && f.usermessage && f.useroperation;
    const buttonStyles = comparationResult ? data.BUTTON_ENABLED_STYLES : data.BUTTON_DISABLED_STYLES;
    inputButton.disabled = comparationResult ? false : true;
    HTMLElement.prototype.setElementsStyles({ element: inputButton, style: buttonStyles });
  }

  function onValueChange(c: string, ev?: Event, className?: string) {
    if (!ev) return '';
    const elementSelected = <HTMLInputElement>globalThis.document.querySelector(`.${className}`);
    if (!elementSelected) return '';

    const inputNumberPattern: string = '[\\w\\s]{3,}';
    const regex = new RegExp(`${elementSelected.pattern || inputNumberPattern}`, 'i');
    const target = ev.target as HTMLInputElement;
    const formValuesKey: string = elementSelected.id;
    formValues[`${formValuesKey}`] = target.value;
    let outlineStyles: string = '';
    const matchResult = formValues[`${formValuesKey}`].match(regex);
    const isNumberElement = formValuesKey === 'useroperation';
    if (matchResult && isNumberElement) {
      const operationProof = Number.parseInt(formValues[`${formValuesKey}`]) === opResult;
      outlineStyles = operationProof ? data.OUTLINE_SUCCESS_STYLES : data.OUTLINE_WRONG_STYLES;
      formValuesState[`${formValuesKey}`] = operationProof ? true : false;
    } else {
      outlineStyles = matchResult ? data.OUTLINE_SUCCESS_STYLES : data.OUTLINE_WRONG_STYLES;
      formValuesState[`${formValuesKey}`] = matchResult ? true : false;
    }
    HTMLElement.prototype.setElementsStyles({ element: elementSelected, style: outlineStyles });
    changeButtonStyles(formValuesState);

    console.log(formValues, formValuesState);
    return '';
  }

  function onButtonClick(c: string) {
    console.log('contact button click');
    form.reset();
    for (let formValuesKey in formValues) formValues[formValuesKey] = '';
    for (let formValuesKey in formValuesState) formValuesState[formValuesKey] = false;
    changeButtonStyles(formValuesState);
    Array.from(globalThis.document.querySelectorAll('input')).forEach((el) => {
      el.style.setProperty('outline', '1px solid #ccc');
    });
    Array.from(globalThis.document.querySelectorAll('textarea')).forEach((el) => {
      el.style.setProperty('outline', '1px solid #ccc');
    });
    return '';
  }

  const inputName = createInputTextareaMolecule(atom.createInputElement, {
    ...data.INPUT_NAME_PARAMS,
    fn: onValueChange,
  });
  const inputEmail = createInputTextareaMolecule(atom.createInputElement, {
    ...data.INPUT_EMAIL_PARAMS,
    fn: onValueChange,
  });
  const textareaMessage = createInputTextareaMolecule(atom.createTextareaElement, {
    ...data.TEXTAREA_PARAMS,
    fn: onValueChange,
  });
  const inputOperation = createInputTextareaMolecule(atom.createInputElement, {
    ...data.INPUT_OPERATION_PARAMS,
    fn: onValueChange,
    textContent: opExpr,
  });
  const inputButton = atom.createButtonElement({
    ...data.INPUT_BUTTON_PARAMS,
    eventReceiver: { eventDetail: 'CONTACT-BUTTON', receiverFn: onButtonClick },
  });

  form.append(inputName, inputEmail, textareaMessage, inputOperation, inputButton);

  contactContainer.appendChild(form);
  contactBody?.appendChild(contactContainer);
}

// function createInputMolecule(p: InputTextParams): HTMLElement {
//   const { eventDetail, fn, textContent, ...rest } = p;
//   const container = createDivElement({ styleName: 'CONTACT_INPUT_CONTAINER' });
//   const label = createLabelElement({ styleName: 'CONTACT_INPUT_LABEL', htmlFor: p.id!, textContent });
//   const input = createInputElement({
//     ...rest,
//     styleName: 'CONTACT_INPUT_TEXT',
//     autocomplete: 'off',
//     eventEmmiter: { eventDetail: eventDetail!, eventType: 'input' },
//     eventReceiver: {
//       currentState: '',
//       eventDetail,
//       receiverFn: fn,
//     },
//   });
//   container.append(label, input);
//   return container;
// }

// function createTextareaMolecule(p: TextareaParams): HTMLElement {
//   const { eventDetail, fn, textContent, ...rest } = p;
//   const container = createDivElement({ styleName: 'CONTACT_INPUT_CONTAINER' });
//   const label = createLabelElement({ styleName: 'CONTACT_INPUT_LABEL', htmlFor: p.id!, textContent });
//   const textarea = createTextareaElement({
//     ...rest,
//     styleName: 'CONTACT_TEXTAREA',
//     autocomplete: 'off',
//     eventEmmiter: { eventDetail: eventDetail!, eventType: 'input' },
//     eventReceiver: {
//       currentState: '',
//       eventDetail: eventDetail!,
//       receiverFn: fn ? fn : undefined,
//     },
//   });
//   container.append(label, textarea);
//   return container;
// }
