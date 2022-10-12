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
export type FlexGap = string;

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
  | '900'
  | 'inherit'
  | 'initial'
  | 'unset';
export type FontSize = string;
export type FontStyle = 'normal' | 'italic' | 'oblique' | 'inherit' | 'initial' | 'unset';
export type LineHeight = string;
export type FontFamily = string;

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

export type Opacity = number | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';

export type Cursor = 'auto' | 'default' | 'none ' | 'help' | 'pointer' | 'progress' | 'wait' | 'not-allowed';
