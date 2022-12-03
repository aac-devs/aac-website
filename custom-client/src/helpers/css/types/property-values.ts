type Display =
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

type AlignItems = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
type AlignSelf = 'auto' | 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';
type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial'
  | 'inherit';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';
type FlexGrow = number | GlobalType;

type BoxSizing = 'border-box' | 'content-box';
type ShadowLength = Px | Em | Rem;

type BoxShadow = 'none' | `${ShadowLength} ${ShadowLength} ${ShadowLength} ${Color}`;
// {
//     'h-offset': string;
//     'v-offset': string;
//     blur: string;
//     color: Color;
//   };

type FontWeight =
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

type FontStyle = 'normal' | 'italic' | 'oblique' | 'inherit' | 'initial' | 'unset';
type LineHeight = string;

type Position = 'static' | 'absolute' | 'fixed' | 'relative' | 'sticky' | 'initial' | 'inherit';

type Distance = number | 'auto' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
type Unit = 'px' | 'rem' | 'em' | '%' | 'vh' | 'vw';

// type Margin = {
//   val: Distance;
//   unit: Unit;
// };

// Pendiente fit-content(value)
type Size =
  | number
  | 'max-content'
  | 'min-content'
  | 'auto'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset';

type Str = string;

type TextDecorationLine = 'none' | 'underline' | 'overline' | 'line-through' | 'blink';

type Cursor = 'auto' | 'default' | 'none ' | 'help' | 'pointer' | 'progress' | 'wait' | 'not-allowed';

// type RGB = `rgb(${number}, ${number}, ${number})`;
// type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
// type HEX = `#${string}`;

// type Color = RGB | RGBA | HEX | NamedColor | SystemColor;

type Px = `${number}px`;
type Em = `${number}em`;
type Rem = `${number}rem`;
type Viewport = `${number}${'vh' | 'vw'}`;
type Percentage = `${number}%`;

type NtoS = `${number}`;

type None = 'none';
type Auto = 'auto';
type GlobalType = 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
type Keyword = 'max-content' | 'min-content' | 'auto';

type Absolute = 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large';
type Relative = 'smaller' | 'larger';

type Length = Px | Em | Rem | Viewport;

type MarPadTypes = Length | Percentage | Auto | GlobalType;

type FontSize = Absolute | Relative | Length | Percentage | GlobalType;

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

type FontFamily = NamedFamily | GenericFamily | GlobalType | `${NamedFamily}, ${GenericFamily}`;

type Opacity = number | Percentage | GlobalType;

type Gap = 'normal' | Length | Percentage | GlobalType;

type BorderRadius = Length | Percentage | GlobalType;

type Color = RGB | RGBA | HEX | NamedColor | SystemColor;

type NamedColor = CSSLev1 | CSSLev2 | CSSLev3 | CSSLev4;
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type ScrollBehaviorType = GlobalType | 'auto' | 'smooth';
