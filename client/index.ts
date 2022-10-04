const inputName = <HTMLElement>window.document.getElementById('contact-name')!;
const inputEmail = <HTMLElement>window.document.getElementById('contact-email')!;
const textMessage = <HTMLElement>window.document.getElementById('contact-message')!;
const labelVerify = <HTMLElement>window.document.getElementById('label-contact-verify')!;
const inputVerify = <HTMLElement>window.document.getElementById('contact-verify')!;
const buttonSend = <HTMLElement>window.document.getElementById('contact-button')!;
const contactForm = <HTMLFormElement>window.document.getElementById('contact-form')!;

interface FormValues {
  name: string | null;
  email: string | null;
  message: string | null;
  verify: boolean | null;
}

const initialValues: FormValues = {
  name: null,
  email: null,
  message: null,
  verify: null,
};

let formValues = { ...initialValues };

const redOutlineStyle = '3px solid red';
const blueOutlineStyle = '3px solid blue';

function focusin(e: Event) {
  if (e.target) {
    const target = e.target as HTMLInputElement;
    if (target.value.length < 3) {
      target.setAttribute('style', 'outline: 3px solid blue;');
    }
  }
}

function focusout(e: Event) {
  if (e.target) {
    const target = e.target as HTMLInputElement;
    target.setAttribute('style', 'outline: none;');
  }
}

function btnSendAction() {
  const { name, email, message, verify } = formValues;
  if (name && email && message && verify) {
    buttonSend.removeAttribute('disabled');
    return true;
  } else {
    buttonSend.setAttribute('disabled', '');
    return false;
  }
}

// INPUT NAME:
inputName.addEventListener('focusin', focusin);
inputName.addEventListener('focusout', focusout);

inputName.addEventListener('keyup', (e: KeyboardEvent) => {
  if (e.target) {
    const target = e.target as HTMLInputElement;
    if (target.value.length >= 3) {
      inputName.style.outline = blueOutlineStyle;
      formValues.name = target.value;
    } else {
      inputName.style.outline = redOutlineStyle;
      formValues.name = null;
    }
    btnSendAction();
  }
});

// INPUT EMAIL

inputEmail.addEventListener('focusin', focusin);
inputEmail.addEventListener('focusout', focusout);

inputEmail.addEventListener('keyup', (e: KeyboardEvent) => {
  if (e.target) {
    const target = e.target as HTMLInputElement;
    const regExp = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
    const textEmail = target.value;
    if (regExp.test(textEmail)) {
      inputEmail.style.outline = blueOutlineStyle;
      formValues.email = textEmail;
    } else {
      inputEmail.style.outline = redOutlineStyle;
      formValues.email = null;
    }
    btnSendAction();
  }
});

// TEXTAREA MESSAGE

textMessage.addEventListener('focusin', focusin);
textMessage.addEventListener('focusout', focusout);

textMessage.addEventListener('keyup', (e) => {
  if (e.target) {
    const target = e.target as HTMLInputElement;
    if (target.value.length >= 5) {
      textMessage.style.outline = blueOutlineStyle;
      formValues.message = target.value;
    } else {
      textMessage.style.outline = redOutlineStyle;
      formValues.message = null;
    }
    btnSendAction();
  }
});

// INPUT VERIFY
let a: number, b: number, result: number;

function initVerifyValues() {
  a = Math.floor(Math.random() * 10);
  b = Math.floor(Math.random() * 10);
  result = a + b;
  labelVerify.innerHTML = `Please, solve this operation: ${a} + ${b}`;
}

initVerifyValues();

inputVerify.addEventListener('focusin', focusin);
inputVerify.addEventListener('focusout', focusout);

inputVerify.addEventListener('keyup', (e) => {
  if (e.target) {
    const target = e.target as HTMLInputElement;
    const enteredValue = target.value;
    if (enteredValue === result.toString()) {
      formValues.verify = true;
      inputVerify.style.outline = blueOutlineStyle;
    } else {
      formValues.verify = false;
      inputVerify.style.outline = redOutlineStyle;
    }
    btnSendAction();
  }
});

// FORM

contactForm.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault();
  if (btnSendAction()) {
    alert('enviar post a back y enviar sms');
    contactForm.reset();
    inputName.style.outline = 'none';
    inputEmail.style.outline = 'none';
    textMessage.style.outline = 'none';
    inputVerify.style.outline = 'none';
    buttonSend.setAttribute('disabled', '');
    initVerifyValues();
  }
});
