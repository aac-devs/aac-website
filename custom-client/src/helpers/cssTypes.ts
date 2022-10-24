import { NamedColor, SystemColor } from './color-names.js';

export type Display =
  | 'block'
  | 'inline'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'
  | 'flow-root'
  | 'none'
  | 'contents'
  | 'block flow'
  | 'inline flow'
  | 'inline flow-root'
  | 'block flex'
  | 'inline flex'
  | 'block grid'
  | 'inline grid'
  | 'block flow-root'
  | 'table'
  | 'table-row'
  | 'list-item'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset';

export type AlignItems = 'stretch' | 'center' | 'flex-start' | 'flex-end	' | 'baseline' | 'initial' | 'inherit';
export type AlignSelf = 'auto' | 'stretch' | 'center' | 'flex-start' | 'flex-end	' | 'baseline' | 'initial' | 'inherit';
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';
export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial'
  | 'inherit';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';
export type FlexGrow = number | GlobalType;

export type BoxSizing = 'border-box' | 'content-box';
export type BoxShadow =
  | 'none'
  | {
      'h-offset': string;
      'v-offset': string;
      blur: string;
      color: string;
    };

export type FontWeight =
  | 'normal'
  | 'bold'
  | 'lighter'
  | 'bolder'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export type FontStyle = 'normal' | 'italic' | 'oblique' | 'inherit' | 'initial' | 'unset';
export type LineHeight = string;

export type Position = 'static' | 'absolute' | 'fixed' | 'relative' | 'sticky' | 'initial' | 'inherit';

export type Distance = number | 'auto' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
export type Unit = 'px' | 'rem' | 'em' | '%' | 'vh' | 'vw';

export type Margin = {
  val: Distance;
  unit: Unit;
};

// Pendiente fit-content(value)
export type Size =
  | number
  | 'max-content'
  | 'min-content'
  | 'auto'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset';

export type Str = string;

export type TextDecorationLine = 'none' | 'underline' | 'overline' | 'line-through' | 'blink';

export type Cursor = 'auto' | 'default' | 'none ' | 'help' | 'pointer' | 'progress' | 'wait' | 'not-allowed';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX | NamedColor | SystemColor;

type Px = `${number}px`;
type Em = `${number}em`;
type Rem = `${number}rem`;
type Viewport = `${number}vh` | `${number}vw`;
export type Percentage = `${number}%`;

export type NtoS = `${number}`;

export type None = 'none';
export type Auto = 'auto';
export type GlobalType = 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
export type Keyword = 'max-content' | 'min-content' | 'auto';

type Absolute = 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large';
type Relative = 'smaller' | 'larger';

export type Length = Px | Em | Rem | Viewport;

export type MarPadTypes = Length | Percentage | Auto | GlobalType;

export type FontSize = Absolute | Relative | Length | Percentage | GlobalType;

type GenericFamily =
  | 'serif'
  | 'sans-serif'
  | 'monospace'
  | 'cursive'
  | 'fantasy'
  | 'system-ui'
  | 'ui-serif'
  | 'ui-sans-serif'
  | 'ui-monospace'
  | 'ui-rounded'
  | 'emoji'
  | 'math'
  | 'fangsong';

type NamedFamily = `"${string}"`;

export type FontFamily = NamedFamily | GenericFamily | GlobalType;

export type Opacity = number | Percentage | GlobalType;

export type Gap = 'normal' | Length | Percentage | GlobalType;
