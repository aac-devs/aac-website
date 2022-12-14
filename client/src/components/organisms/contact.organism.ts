import * as atom from '../atoms/html-atom';
import * as org from './index';
import * as data from '../data/contact.organism.data';
import { BothParams, createInputTextareaMolecule } from '../molecules/input-textarea.molecule';
import { sendContactUserInfo } from '../helper-functions/send-sms';

export function contactOrganism(thisAppRepoLink: string) {
  const contactBody = globalThis.document.querySelector('.contact-body');
  const contactContainer_DIV = atom.createDivElement({ styleName: 'CONTACT_CONTAINER' });
  const reservedRightsContainer_DIV = org.reservedRightsOrganism(thisAppRepoLink);

  const contactFormContainer_FORM = atom.createFormElement({ styleName: 'CONTACT_FORM' });
  let formValues = data.INITIAL_VALUES_STATE;
  let formValuesState = data.INITIAL_FIELDS_STATE;
  let operation = { expr: '', result: 0 };

  operation = createRandomOperation();

  function createRandomOperation() {
    const opVal1 = Math.floor(Math.random() * 10);
    const opVal2 = Math.floor(Math.random() * 10);
    return {
      expr: `Solve this operation: ${opVal1} + ${opVal2} =`,
      result: opVal1 + opVal2,
    };
  }

  function changeButtonStyles(f: typeof formValuesState) {
    const comparationResult = f.username && f.useremail && f.usermessage && f.useroperation;
    const buttonStyles = comparationResult ? data.BUTTON_ENABLED_STYLES : data.BUTTON_DISABLED_STYLES;
    inputButton.disabled = comparationResult ? false : true;
    HTMLElement.prototype.setElementsStyles({ element: inputButton, style: buttonStyles });
  }

  function onButtonClick() {
    sendContactUserInfo(formValues);
    contactFormContainer_FORM.reset();
    for (let formValuesKey in formValues) formValues[formValuesKey] = '';
    for (let formValuesKey in formValuesState) formValuesState[formValuesKey] = false;
    changeButtonStyles(formValuesState);
    operation = createRandomOperation();
    globalThis.document.getElementById('useroperation')!.textContent = operation.expr;
  }

  function onTextChange(ev: Event) {
    const element = <HTMLInputElement>ev.target;
    const inputNumberPattern: string = '[\\w\\s]{3,}';
    const regex = new RegExp(`${element.pattern || inputNumberPattern}`, 'i');
    const formValuesKey: string = element.id;
    formValues[`${formValuesKey}`] = element.value;
    let outlineStyles: string = '';
    const matchResult = formValues[`${formValuesKey}`].match(regex);
    const isNumberElement = formValuesKey === 'useroperation';
    if (matchResult && isNumberElement) {
      const operationProof = Number.parseInt(formValues[`${formValuesKey}`]) === operation.result;
      outlineStyles = operationProof ? data.OUTLINE_SUCCESS_STYLES : data.OUTLINE_WRONG_STYLES;
      formValuesState[`${formValuesKey}`] = operationProof ? true : false;
    } else {
      outlineStyles = matchResult ? data.OUTLINE_SUCCESS_STYLES : data.OUTLINE_WRONG_STYLES;
      formValuesState[`${formValuesKey}`] = matchResult ? true : false;
    }
    HTMLElement.prototype.setElementsStyles({ element, style: outlineStyles });
    changeButtonStyles(formValuesState);
  }

  function onContentReset() {
    Array.from(globalThis.document.querySelectorAll('input')).forEach((el) => {
      el.style.setProperty('outline', '1px solid #ccc');
    });
    Array.from(globalThis.document.querySelectorAll('textarea')).forEach((el) => {
      el.style.setProperty('outline', '1px solid #ccc');
    });
  }

  [data.INPUT_NAME_PARAMS, data.INPUT_EMAIL_PARAMS, data.TEXTAREA_PARAMS, data.INPUT_OPERATION_PARAMS].forEach(
    (p: BothParams) => {
      const element = createInputTextareaMolecule(
        p.cols ? atom.createTextareaElement : atom.createInputElement,
        p.type === 'number' ? { ...p, textContent: operation.expr } : p
      );
      element.addEventListener('input', onTextChange);
      contactFormContainer_FORM.appendChild(element);
    }
  );

  const inputButton = atom.createButtonElement(data.INPUT_BUTTON_PARAMS);
  inputButton.addEventListener('click', onButtonClick);

  contactFormContainer_FORM.addEventListener('reset', onContentReset);
  contactFormContainer_FORM.appendChild(inputButton);

  contactContainer_DIV.append(contactFormContainer_FORM, reservedRightsContainer_DIV);
  contactBody?.appendChild(contactContainer_DIV);
}
