type Tag = 'div' | 'header' | 'a' | 'ul' | 'li' | 'h1' | 'button' | 'i' | 'img' | 'span' | 'section';
type EventType = 'click' | 'resize';

type HTMLElType = HTMLElement & HTMLAnchorElement & HTMLImageElement & HTMLLIElement;

interface CustomElementParams {
  clas?: string;
  id?: string;
  href?: string;
  src?: string;
  text?: string;
  evTp?: EventType;
  evFn?: (ev?: Event) => void;
}

type CustomElemReturn<T> = [T, (st: string) => void];
type CustomCompReturn<T> = [T, (st: ElementStyles) => void];

// type HdParams = Required<Pick<CustomElementParams, 'tag'>>;

type AOptionaParams = Partial<Pick<CustomElementParams, 'text'>>;
type ARequiredParams = Required<Pick<CustomElementParams, 'href' | 'evTp' | 'evFn' | 'id'>>;
type AncParams = AOptionaParams & ARequiredParams;

type TxtParams = Required<Pick<CustomElementParams, 'text'>>;
type ButParams = Required<Pick<CustomElementParams, 'evTp' | 'evFn'>>;
type SecParams = Required<Pick<CustomElementParams, 'id'>>;
type IcoParams = Required<Pick<CustomElementParams, 'clas'>>;
type ImgParams = Required<Pick<CustomElementParams, 'src'>>;
// type LiParams = Required<Pick<CustomElementParams, 'tag'>>;
type SpnParams = Pick<CustomElementParams, 'text'>;
// type UlParams = LiParams;
// type DvParams = HdParams;
// type NvParams = HdParams;
