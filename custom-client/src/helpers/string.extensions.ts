interface String {
  css(key: Prop, value: string): string;
  CSSDisplay(value: Display): string;
}

String.prototype.css = function (key: Prop, value: string) {
  const regexp = new RegExp(`(?<=${key}:)[^;]+`, 'g');
  if (this.match(regexp)) {
    // console.log(this.match(regexp));
    return `${this.replace(regexp, value)}`;
  }
  return `${this}${key}:${value};`;
};

function propertyFactory(key: Prop) {
  return function <T>(value: T) {
    const regexp = new RegExp(`(?<=${key}:)[^;]+`, 'g');
    if (this.match(regexp)) return `${this.replace(regexp, value)}`;
    return `${this}${key}:${value};`;
  };
}

String.prototype.CSSDisplay = propertyFactory('display')<Display>;

//#####################################################################################################################
//#####################################################################################################################
//#####################################################################################################################
// PROPERTY VALUE TYPES

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

//#####################################################################################################################
//#####################################################################################################################
//#####################################################################################################################
// LENGTH KEY TYPES

type Length = Px | Em | Rem | Viewport;
type Px = `${number}px`;
type Em = `${number}em`;
type Rem = `${number}rem`;
type Viewport = `${number}vh` | `${number}vw`;

type Percentage = `${number}%`;

//#####################################################################################################################
//#####################################################################################################################
//#####################################################################################################################
// GLOBAL

type GlobalType = 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';

//#####################################################################################################################
//#####################################################################################################################
//#####################################################################################################################
// PROPERTY KEY TYPES

type Prop =
  | '-webkit-line-clamp'
  | '-webkit-text-fill-color'
  | '-webkit-text-stroke'
  | '-webkit-text-stroke-color'
  | '-webkit-text-stroke-width'
  | 'accent-color'
  | 'align-content'
  | 'align-items'
  | 'align-self'
  // | 'Experimentalalign-tracks'
  | 'all'
  | 'animation'
  // | 'Experimentalanimation-composition'
  | 'animation-delay'
  | 'animation-direction'
  | 'animation-duration'
  | 'animation-fill-mode'
  | 'animation-iteration-count'
  | 'animation-name'
  | 'animation-play-state'
  // | 'Experimentalanimation-timeline'
  | 'animation-timing-function'
  | 'appearance'
  | 'aspect-ratio'
  | 'backdrop-filter'
  | 'backface-visibility'
  | 'background'
  | 'background-attachment'
  | 'background-blend-mode'
  | 'background-clip'
  | 'background-color'
  | 'background-image'
  | 'background-origin'
  | 'background-position'
  | 'background-position-x'
  | 'background-position-y'
  | 'background-repeat'
  | 'background-size'
  | 'block-size'
  | 'border'
  | 'border-block'
  | 'border-block-color'
  | 'border-block-end'
  | 'border-block-end-color'
  | 'border-block-end-style'
  | 'border-block-end-width'
  | 'border-block-start'
  | 'border-block-start-color'
  | 'border-block-start-style'
  | 'border-block-start-width'
  | 'border-block-style'
  | 'border-block-width'
  | 'border-bottom'
  | 'border-bottom-color'
  | 'border-bottom-left-radius'
  | 'border-bottom-right-radius'
  | 'border-bottom-style'
  | 'border-bottom-width'
  | 'border-collapse'
  | 'border-color'
  | 'border-end-end-radius'
  | 'border-end-start-radius'
  | 'border-image'
  | 'border-image-outset'
  | 'border-image-repeat'
  | 'border-image-slice'
  | 'border-image-source'
  | 'border-image-width'
  | 'border-inline'
  | 'border-inline-color'
  | 'border-inline-end'
  | 'border-inline-end-color'
  | 'border-inline-end-style'
  | 'border-inline-end-width'
  | 'border-inline-start'
  | 'border-inline-start-color'
  | 'border-inline-start-style'
  | 'border-inline-start-width'
  | 'border-inline-style'
  | 'border-inline-width'
  | 'border-left'
  | 'border-left-color'
  | 'border-left-style'
  | 'border-left-width'
  | 'border-radius'
  | 'border-right'
  | 'border-right-color'
  | 'border-right-style'
  | 'border-right-width'
  | 'border-spacing'
  | 'border-start-end-radius'
  | 'border-start-start-radius'
  | 'border-style'
  | 'border-top'
  | 'border-top-color'
  | 'border-top-left-radius'
  | 'border-top-right-radius'
  | 'border-top-style'
  | 'border-top-width'
  | 'border-width'
  | 'bottom'
  | 'box-decoration-break'
  | 'box-shadow'
  | 'box-sizing'
  | 'break-after'
  | 'break-before'
  | 'break-inside'
  | 'caption-side'
  | 'caret-color'
  | 'clear'
  | 'clip-path'
  | 'color'
  | 'color-scheme'
  | 'column-count'
  | 'column-fill'
  | 'column-gap'
  | 'column-rule'
  | 'column-rule-color'
  | 'column-rule-style'
  | 'column-rule-width'
  | 'column-span'
  | 'column-width'
  | 'columns'
  | 'contain'
  // | 'Experimentalcontain-intrinsic-block-size'
  // | 'Experimentalcontain-intrinsic-height'
  // | 'Experimentalcontain-intrinsic-inline-size'
  // | 'Experimentalcontain-intrinsic-size'
  // | 'Experimentalcontain-intrinsic-width'
  | 'content'
  | 'content-visibility'
  | 'counter-increment'
  | 'counter-reset'
  | 'counter-set'
  | 'cursor'
  | 'direction'
  | 'display'
  | 'empty-cells'
  | 'filter'
  | 'flex'
  | 'flex-basis'
  | 'flex-direction'
  | 'flex-flow'
  | 'flex-grow'
  | 'flex-shrink'
  | 'flex-wrap'
  | 'float'
  | 'font'
  | 'font-family'
  | 'font-feature-settings'
  | 'font-kerning'
  | 'font-language-override'
  | 'font-optical-sizing'
  | 'font-size'
  | 'font-size-adjust'
  | 'font-stretch'
  | 'font-style'
  | 'font-synthesis'
  | 'font-variant'
  | 'font-variant-alternates'
  | 'font-variant-caps'
  | 'font-variant-east-asian'
  | 'font-variant-ligatures'
  | 'font-variant-numeric'
  | 'font-variant-position'
  | 'font-variation-settings'
  | 'font-weight'
  | 'forced-color-adjust'
  | 'gap'
  | 'grid'
  | 'grid-area'
  | 'grid-auto-columns'
  | 'grid-auto-flow'
  | 'grid-auto-rows'
  | 'grid-column'
  | 'grid-column-end'
  | 'grid-column-start'
  | 'grid-row'
  | 'grid-row-end'
  | 'grid-row-start'
  | 'grid-template'
  | 'grid-template-areas'
  | 'grid-template-columns'
  | 'grid-template-rows'
  | 'hanging-punctuation'
  | 'height'
  | 'hyphenate-character'
  | 'hyphens'
  | 'image-orientation'
  | 'image-rendering'
  // | 'Experimentalimage-resolution'
  // | 'Experimentalinitial-letter'
  // | 'Experimentalinitial-letter-align'
  | 'inline-size'
  | 'inset'
  | 'inset-block'
  | 'inset-block-end'
  | 'inset-block-start'
  | 'inset-inline'
  | 'inset-inline-end'
  | 'inset-inline-start'
  | 'isolation'
  | 'justify-content'
  | 'justify-items'
  | 'justify-self'
  // | 'Experimentaljustify-tracks'
  | 'left'
  | 'letter-spacing'
  | 'line-break'
  | 'line-height'
  // | 'Experimentalline-height-step'
  | 'list-style'
  | 'list-style-image'
  | 'list-style-position'
  | 'list-style-type'
  | 'margin'
  | 'margin-block'
  | 'margin-block-end'
  | 'margin-block-start'
  | 'margin-bottom'
  | 'margin-inline'
  | 'margin-inline-end'
  | 'margin-inline-start'
  | 'margin-left'
  | 'margin-right'
  | 'margin-top'
  // | 'Experimentalmargin-trim'
  | 'mask'
  | 'mask-border'
  | 'mask-border-mode'
  | 'mask-border-outset'
  | 'mask-border-repeat'
  | 'mask-border-slice'
  | 'mask-border-source'
  | 'mask-border-width'
  | 'mask-clip'
  | 'mask-composite'
  | 'mask-image'
  | 'mask-mode'
  | 'mask-origin'
  | 'mask-position'
  | 'mask-repeat'
  | 'mask-size'
  | 'mask-type'
  // | 'Experimentalmasonry-auto-flow'
  // | 'Experimentalmath-depth'
  // | 'Experimentalmath-shift'
  // | 'Experimentalmath-style'
  | 'max-block-size'
  | 'max-height'
  | 'max-inline-size'
  | 'max-width'
  | 'min-block-size'
  | 'min-height'
  | 'min-inline-size'
  | 'min-width'
  | 'mix-blend-mode'
  | 'object-fit'
  | 'object-position'
  | 'offset'
  | 'offset-anchor'
  | 'offset-distance'
  | 'offset-path'
  // | 'Experimentaloffset-position'
  | 'offset-rotate'
  | 'opacity'
  | 'order'
  | 'orphans'
  | 'outline'
  | 'outline-color'
  | 'outline-offset'
  | 'outline-style'
  | 'outline-width'
  | 'overflow'
  | 'overflow-anchor'
  | 'overflow-block'
  | 'overflow-clip-margin'
  | 'overflow-inline'
  | 'overflow-wrap'
  | 'overflow-x'
  | 'overflow-y'
  | 'overscroll-behavior'
  | 'overscroll-behavior-block'
  | 'overscroll-behavior-inline'
  | 'overscroll-behavior-x'
  | 'overscroll-behavior-y'
  | 'padding'
  | 'padding-block'
  | 'padding-block-end'
  | 'padding-block-start'
  | 'padding-bottom'
  | 'padding-inline'
  | 'padding-inline-end'
  | 'padding-inline-start'
  | 'padding-left'
  | 'padding-right'
  | 'padding-top'
  | 'page-break-after'
  | 'page-break-before'
  | 'page-break-inside'
  | 'paint-order'
  | 'perspective'
  | 'perspective-origin'
  | 'place-content'
  | 'place-items'
  | 'place-self'
  | 'pointer-events'
  | 'position'
  | 'print-color-adjust'
  | 'quotes'
  | 'resize'
  | 'right'
  | 'rotate'
  | 'row-gap'
  // | 'Experimentalruby-align'
  | 'ruby-position'
  | 'scale'
  | 'scroll-behavior'
  | 'scroll-margin'
  | 'scroll-margin-block'
  | 'scroll-margin-block-end'
  | 'scroll-margin-block-start'
  | 'scroll-margin-bottom'
  | 'scroll-margin-inline'
  | 'scroll-margin-inline-end'
  | 'scroll-margin-inline-start'
  | 'scroll-margin-left'
  | 'scroll-margin-right'
  | 'scroll-margin-top'
  | 'scroll-padding'
  | 'scroll-padding-block'
  | 'scroll-padding-block-end'
  | 'scroll-padding-block-start'
  | 'scroll-padding-bottom'
  | 'scroll-padding-inline'
  | 'scroll-padding-inline-end'
  | 'scroll-padding-inline-start'
  | 'scroll-padding-left'
  | 'scroll-padding-right'
  | 'scroll-padding-top'
  | 'scroll-snap-align'
  | 'scroll-snap-stop'
  | 'scroll-snap-type'
  // | 'Experimentalscroll-timeline'
  // | 'Experimentalscroll-timeline-axis'
  // | 'Experimentalscroll-timeline-name'
  | 'scrollbar-color'
  | 'scrollbar-gutter'
  | 'scrollbar-width'
  | 'shape-image-threshold'
  | 'shape-margin'
  | 'shape-outside'
  | 'tab-size'
  | 'table-layout'
  | 'text-align'
  | 'text-align-last'
  | 'text-combine-upright'
  | 'text-decoration'
  | 'text-decoration-color'
  | 'text-decoration-line'
  // | 'Experimentaltext-decoration-skip'
  | 'text-decoration-skip-ink'
  | 'text-decoration-style'
  | 'text-decoration-thickness'
  | 'text-emphasis'
  | 'text-emphasis-color'
  | 'text-emphasis-position'
  | 'text-emphasis-style'
  | 'text-indent'
  | 'text-justify'
  | 'text-orientation'
  | 'text-overflow'
  | 'text-rendering'
  | 'text-shadow'
  // | 'Experimentaltext-size-adjust'
  | 'text-transform'
  | 'text-underline-offset'
  | 'text-underline-position'
  | 'top'
  | 'touch-action'
  | 'transform'
  | 'transform-box'
  | 'transform-origin'
  | 'transform-style'
  | 'transition'
  | 'transition-delay'
  | 'transition-duration'
  | 'transition-property'
  | 'transition-timing-function'
  | 'translate'
  | 'unicode-bidi'
  | 'user-select'
  | 'vertical-align'
  | 'visibility'
  | 'white-space'
  | 'widows'
  | 'width'
  | 'will-change'
  | 'word-break'
  | 'word-spacing'
  | 'writing-mode'
  | 'z-index';

//#####################################################################################################################
//#####################################################################################################################
//#####################################################################################################################
// COLOR NAMES

type Color = RGB | RGBA | HEX | NamedColor | SystemColor;

type NamedColor = CSSLev1 | CSSLev2 | CSSLev3 | CSSLev4;
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type CSSLev1 =
  | 'black' //  #000000
  | 'silver' // #c0c0c0
  | 'gray' // #808080
  | 'white' // #ffffff
  | 'maroon' // #800000
  | 'red' // #ff0000
  | 'purple' // #800080
  | 'fuchsia' // #ff00ff
  | 'green' // #008000
  | 'lime' // #00ff00
  | 'olive' // #808000
  | 'yellow' // #ffff00
  | 'navy' // #000080
  | 'blue' // #0000ff
  | 'teal' // #008080
  | 'aqua'; // #00ffff
type CSSLev2 = 'orange'; // #ffa500
type CSSLev3 =
  | 'aliceblue' // #f0f8ff
  | 'antiquewhite' // #faebd7
  | 'aquamarine' // #7fffd4
  | 'azure' // #f0ffff
  | 'beige' // #f5f5dc
  | 'bisque' // #ffe4c4
  | 'blanchedalmond' // #ffebcd
  | 'blueviolet' // #8a2be2
  | 'brown' // #a52a2a
  | 'burlywood' // #deb887
  | 'cadetblue' // #5f9ea0
  | 'chartreuse' // #7fff00
  | 'chocolate' // #d2691e
  | 'coral' // #ff7f50
  | 'cornflowerblue' // #6495ed
  | 'cornsilk' // #fff8dc
  | 'crimson' // #dc143c
  | 'cyan' // #00ffff
  | 'darkblue' // #00008b
  | 'darkcyan' // #008b8b
  | 'darkgoldenrod' // #b8860b
  | 'darkgray' // #a9a9a9
  | 'darkgreen' // #006400
  | 'darkgrey' // #a9a9a9
  | 'darkkhaki' // #bdb76b
  | 'darkmagenta' // #8b008b
  | 'darkolivegreen' // #556b2f
  | 'darkorange' // #ff8c00
  | 'darkorchid' // #9932cc
  | 'darkred' // #8b0000
  | 'darksalmon' // #e9967a
  | 'darkseagreen' // #8fbc8f
  | 'darkslateblue' // #483d8b
  | 'darkslategray' // #2f4f4f
  | 'darkslategrey' // #2f4f4f
  | 'darkturquoise' // #00ced1
  | 'darkviolet' // #9400d3
  | 'deeppink' // #ff1493
  | 'deepskyblue' // #00bfff
  | 'dimgray' // #696969
  | 'dimgrey' // #696969
  | 'dodgerblue' // #1e90ff
  | 'firebrick' // #b22222
  | 'floralwhite' // #fffaf0
  | 'forestgreen' // #228b22
  | 'gainsboro' // #dcdcdc
  | 'ghostwhite' // #f8f8ff
  | 'gold' // #ffd700
  | 'goldenrod' // #daa520
  | 'greenyellow' // #adff2f
  | 'grey' // #808080
  | 'honeydew' // #f0fff0
  | 'hotpink' // #ff69b4
  | 'indianred' // #cd5c5c
  | 'indigo' // #4b0082
  | 'ivory' // #fffff0
  | 'khaki' // #f0e68c
  | 'lavender' // #e6e6fa
  | 'lavenderblush' // #fff0f5
  | 'lawngreen' // #7cfc00
  | 'lemonchiffon' // #fffacd
  | 'lightblue' // #add8e6
  | 'lightcoral' // #f08080
  | 'lightcyan' // #e0ffff
  | 'lightgoldenrodyellow' // #fafad2
  | 'lightgray' // #d3d3d3
  | 'lightgreen' // #90ee90
  | 'lightgrey' // #d3d3d3
  | 'lightpink' // #ffb6c1
  | 'lightsalmon' // #ffa07a
  | 'lightseagreen' // #20b2aa
  | 'lightskyblue' // #87cefa
  | 'lightslategray' // #778899
  | 'lightslategrey' // #778899
  | 'lightsteelblue' // #b0c4de
  | 'lightyellow' // #ffffe0
  | 'limegreen' // #32cd32
  | 'linen' // #faf0e6
  | 'magenta' // #ff00ff
  | 'mediumaquamarine' // #66cdaa
  | 'mediumblue' // #0000cd
  | 'mediumorchid' // #ba55d3
  | 'mediumpurple' // #9370db
  | 'mediumseagreen' // #3cb371
  | 'mediumslateblue' // #7b68ee
  | 'mediumspringgreen' // #00fa9a
  | 'mediumturquoise' // #48d1cc
  | 'mediumvioletred' // #c71585
  | 'midnightblue' // #191970
  | 'mintcream' // #f5fffa
  | 'mistyrose' // #ffe4e1
  | 'moccasin' // #ffe4b5
  | 'navajowhite' // #ffdead
  | 'oldlace' // #fdf5e6
  | 'olivedrab' // #6b8e23
  | 'orangered' // #ff4500
  | 'orchid' // #da70d6
  | 'palegoldenrod' // #eee8aa
  | 'palegreen' // #98fb98
  | 'paleturquoise' // #afeeee
  | 'palevioletred' // #db7093
  | 'papayawhip' // #ffefd5
  | 'peachpuff' // #ffdab9
  | 'peru' // #cd853f
  | 'pink' // #ffc0cb
  | 'plum' // #dda0dd
  | 'powderblue' // #b0e0e6
  | 'rosybrown' // #bc8f8f
  | 'royalblue' // #4169e1
  | 'saddlebrown' // #8b4513
  | 'salmon' // #fa8072
  | 'sandybrown' // #f4a460
  | 'seagreen' // #2e8b57
  | 'seashell' // #fff5ee
  | 'sienna' // #a0522d
  | 'skyblue' // #87ceeb
  | 'slateblue' // #6a5acd
  | 'slategray' // #708090
  | 'slategrey' // #708090
  | 'snow' // #fffafa
  | 'springgreen' // #00ff7f
  | 'steelblue' // #4682b4
  | 'tan' // #d2b48c
  | 'thistle' // #d8bfd8
  | 'tomato' // #ff6347
  | 'transparent'
  | 'turquoise' // #40e0d0
  | 'violet' // #ee82ee
  | 'wheat' // #f5deb3
  | 'whitesmoke' // #f5f5f5
  | 'yellowgreen'; // #9acd32
type CSSLev4 = 'rebeccapurple'; // #663399
type SystemColor =
  | 'ActiveText'
  | 'ButtonBorder'
  | 'ButtonFace'
  | 'ButtonText'
  | 'Canvas'
  | 'CanvasText'
  | 'Field'
  | 'FieldText'
  | 'GrayText'
  | 'Highlight'
  | 'HighlightText'
  | 'LinkText'
  | 'Mark'
  | 'MarkText'
  | 'VisitedText';
