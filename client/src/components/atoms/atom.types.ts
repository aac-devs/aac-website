interface GlobalParams {
  styleName: string;
  textContent?: string;
  className?: string;
  id?: string;
}

type TargetType = '_self' | '_blank' | '_parent' | '_top';

interface AnchorParams extends GlobalParams {
  href: string;
  target: TargetType;
}

interface ImageParams extends GlobalParams {
  src: string;
  alt: string;
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface HeadingParams extends GlobalParams {
  textTag: HeadingTag;
}

interface IconParams extends GlobalParams {
  className: string;
}

interface LabelControlParams extends GlobalParams {
  htmlFor: string;
}

interface ControlGlobalParams extends GlobalParams {
  disabled?: boolean;
  name?: string;
}

interface TextControlParams extends GlobalParams {
  autocomplete?: 'on' | 'off';
  autofocus?: boolean;
  maxlength?: number;
  minlength?: number;
  placeholder?: string;
  tabindex?: number;
  required?: boolean;
}

interface FormControlParams extends ControlGlobalParams {
  autocomplete?: 'on' | 'off';
}

interface InputControlParams extends ControlGlobalParams, TextControlParams {
  type?: InputType;
  inputmode?: 'latin' | 'numeric' | 'email';
  max?: string;
  min?: string;
  pattern?: string;
  title?: string;
  value?: string | never;
}

interface TextareaControlParams extends ControlGlobalParams, TextControlParams {
  cols?: number;
  rows?: number;
  value?: string | never;
}

interface ButtonControlParams extends ControlGlobalParams {
  title?: string;
  value?: never;
  buttonType: 'button' | 'submit' | 'reset';
  tabindex: number;
}

//----------------------------------------------------------

type AllHTMLElements = HTMLAnchorElement &
  HTMLButtonElement &
  HTMLDivElement &
  HTMLFormElement &
  HTMLHeadElement &
  HTMLHeadingElement &
  HTMLImageElement &
  HTMLInputElement &
  HTMLLabelElement &
  HTMLLIElement &
  HTMLSpanElement &
  HTMLTextAreaElement &
  HTMLUListElement;

type AllParams = Partial<AnchorParams> &
  Partial<ImageParams> &
  Partial<HeadingParams> &
  Partial<FormControlParams> &
  Partial<InputControlParams> &
  Partial<TextareaControlParams> &
  Partial<LabelControlParams> &
  Partial<ButtonControlParams>;

//----------------------------------------------------------

type HTMLTag =
  | 'a'
  | 'button'
  | 'div'
  | 'form'
  | 'header'
  | 'img'
  | 'input'
  | 'label'
  | 'li'
  | 'main'
  | 'nav'
  | 'textarea'
  | 'section'
  | 'span'
  | 'ul';

type ElementEventType = 'click' | 'resize' | 'change' | 'input';

type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';
