import { ButtonControlParams } from '../../atoms/html-atom.js';
import { InputTextParams, TextareaParams } from './input-textarea.molecule.js';

export const INITIAL_VALUES_STATE: { [key: string]: string } = {
  username: '',
  useremail: '',
  usermessage: '',
  useroperation: '',
};

export const INITIAL_FIELDS_STATE: { [key: string]: boolean } = {
  username: false,
  useremail: false,
  usermessage: false,
  useroperation: false,
};

export const BUTTON_ENABLED_STYLES: string =
  'border:1px solid rgb(46, 160, 67);background-color:rgb(35, 134, 54);color:#fff';
export const BUTTON_DISABLED_STYLES: string =
  'border:transparent;background-color:rgba(35, 134, 54, 0.6);color:rgba(240, 246, 252, 0.5)';
export const OUTLINE_SUCCESS_STYLES: string = 'outline:3px solid mediumblue;background-color:lavender';
export const OUTLINE_WRONG_STYLES: string = 'outline:3px solid red;background-color:palegoldenrod';

export const INPUT_NAME_PARAMS: InputTextParams = {
  styleName: 'CONTACT_INPUT_TEXT',
  type: 'text',
  eventDetail: 'TEXT-CHANGE',
  id: 'username',
  inputmode: 'latin',
  name: 'username',
  pattern: '^[a-zA-Z]{2,}[a-zA-Z ]*[a-zA-Z]+$',
  className: 'input-name',
  textContent: 'Name:',
  minlength: 3,
  maxlength: 20,
  title: 'Error',
  tabindex: 1,
  fn: () => '',
};

export const INPUT_BUTTON_PARAMS: ButtonControlParams = {
  buttonType: 'button',
  styleName: 'CONTACT_BUTTON',
  className: 'contact-button',
  disabled: true,
  id: 'contactbutton',
  name: 'contact-button',
  tabindex: 5,
  title: 'Error button',
  textContent: 'Send',
  eventEmmiter: {
    eventDetail: 'CONTACT-BUTTON',
    eventType: 'click',
  },
};

export const INPUT_EMAIL_PARAMS: InputTextParams = {
  styleName: 'CONTACT_INPUT_TEXT',
  type: 'email',
  eventDetail: 'EMAIL-CHANGE',
  id: 'useremail',
  inputmode: 'latin',
  name: 'useremail',
  pattern: '^[a-z][\\w.]*@[\\w.]{3,}.[a-z]{2,}$',
  className: 'input-email',
  textContent: 'Email:',
  title: 'Error email',
  tabindex: 2,
  fn: () => '',
};

export const TEXTAREA_PARAMS: TextareaParams = {
  styleName: 'CONTACT_TEXTAREA',
  className: 'textarea',
  cols: 20,
  eventDetail: 'TEXTAREA-CHANGE',
  fn: () => '',
  id: 'usermessage',
  rows: 5,
  tabindex: 3,
  textContent: 'Message:',
  minlength: 3,
  maxlength: 120,
};

export const INPUT_OPERATION_PARAMS: InputTextParams = {
  styleName: 'CONTACT_INPUT_TEXT',
  className: 'input-number',
  eventDetail: 'NUMBER-CHANGE',
  fn: () => '',
  id: 'useroperation',
  inputmode: 'numeric',
  name: 'useroperation',
  tabindex: 4,
  type: 'number',
  title: 'Number Error',
  textContent: '',
  pattern: '^[0-9]{1,}$',
  maxlength: 2,
  minlength: 2,
};
