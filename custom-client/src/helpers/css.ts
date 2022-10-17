import {
  AlignItems,
  Auto,
  MarPadTypes,
  BoxSizing,
  Color,
  Cursor,
  Display,
  Distance,
  FlexDirection,
  FlexWrap,
  FontFamily,
  FontSize,
  FontStyle,
  FontWeight,
  GlobalType,
  JustifyContent,
  Keyword,
  Length,
  LineHeight,
  None,
  Opacity,
  Percentage,
  Position,
  Size,
  Str,
  TextDecorationLine,
  Unit,
  NtoS,
  Gap,
} from './cssTypes.js';

export default class CSSStyles {
  public static styles: Map<string, string> = new Map();

  public static start() {
    this.styles.clear();
    return this;
  }

  public static toString(): string {
    let stringStyles: string = '';
    this.styles.forEach((value, key) => {
      stringStyles += `${key}:${value};`;
    });
    return stringStyles;
  }

  private static mapStyles(styles: string): Map<string, string> {
    const mapped = new Map<string, string>();
    styles.split(';').map((item) => {
      const keyVal = item.trim().split(':');
      if (keyVal[0]) mapped.set(keyVal[0], keyVal[1].trim());
    });
    return mapped;
  }

  // Convierte a Map los estilos ingresados como parámetro o retorna el Map de los estilo actuales
  public static insert(str: string | null) {
    if (!str) return this;
    this.styles = this.mapStyles(str);
    return this;
  }

  public static boxShadow(offsetX_None?: Length | None, offsetY?: Length, blurRadius?: Length, color?: Color) {
    if (offsetX_None === 'none') this.styles.set('box-shadow', 'none');
    else this.styles.set('box-shadow', `${offsetX_None} ${offsetY} ${blurRadius} ${color}`);
    return this;
  }

  private static placeSize(key: string) {
    return (value: Length | Percentage | Keyword | GlobalType): typeof CSSStyles => {
      this.styles.set(key, value);
      return this;
    };
  }

  public static top = this.placeSize('top');
  public static right = this.placeSize('right');
  public static bottom = this.placeSize('bottom');
  public static left = this.placeSize('left');
  public static width = this.placeSize('width');
  public static height = this.placeSize('height');
  public static minWidth = this.placeSize('min-width');
  public static minHeight = this.placeSize('min-height');
  public static maxWidth = this.placeSize('max-width');
  public static maxWeight = this.placeSize('max-height');

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  private static mpSide(key: string) {
    return (value: Length | Percentage | Auto | GlobalType): typeof CSSStyles => {
      this.styles.set(key, value);
      return this;
    };
  }

  public static marginTop = this.mpSide('margin-top');
  public static marginRight = this.mpSide('margin-right');
  public static marginBottom = this.mpSide('margin-bottom');
  public static marginLeft = this.mpSide('margin-left');

  public static marginBlockStart = this.mpSide('margin-block-start');
  public static marginBlockEnd = this.mpSide('margin-block-end');

  public static paddingTop = this.mpSide('padding-top');
  public static paddingRight = this.mpSide('padding-right');
  public static paddingBottom = this.mpSide('padding-bottom');
  public static paddingLeft = this.mpSide('padding-left');

  private static mp(key: string) {
    function fn(val1: MarPadTypes): typeof CSSStyles;
    function fn(val1: MarPadTypes, val2?: MarPadTypes): typeof CSSStyles;
    function fn(val1: MarPadTypes, val2?: MarPadTypes, val3?: MarPadTypes): typeof CSSStyles;
    function fn(val1: MarPadTypes, val2?: MarPadTypes, val3?: MarPadTypes, val4?: MarPadTypes): typeof CSSStyles {
      const value = `${val1} ${val2 ? val2 : ''} ${val3 ? val3 : ''} ${val4 ? val4 : ''}`.trim();
      this.styles.set(key, value);
      return this;
    }
    return fn;
  }

  public static margin = this.mp('margin');
  public static padding = this.mp('padding');

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  public static fontFamily(val1: FontFamily, val2?: FontFamily) {
    const value = `${val1}${val2 ? `, ${val2}` : ''}`.trim();
    console.log('font-family', value);
    this.styles.set('font-family', value);
    return this;
  }

  private static closure(key: string) {
    return function <T>(value: T): typeof CSSStyles {
      // console.log(key, value);
      this.styles.set(key, `${value}`);
      return this;
    };
  }

  public static alignItems = this.closure('align-items')<AlignItems>;
  public static backgroundColor = this.closure('background-color')<Color>;
  public static boxSizing = this.closure('box-sizing')<BoxSizing>;
  public static color = this.closure('color')<Color>;
  public static columnGap = this.closure('column-gap')<Gap>;
  public static cursor = this.closure('cursor')<Cursor>;
  public static display = this.closure('display')<Display>;
  public static flexDirection = this.closure('flex-direction')<FlexDirection>;
  public static flexWrap = this.closure('flex-wrap')<FlexWrap>;
  public static fontSize = this.closure('font-size')<FontSize>;
  public static fontStyle = this.closure('font-style')<FontStyle>;
  public static fontWeight = this.closure('font-weight')<FontWeight>;
  public static justifyContent = this.closure('justify-content')<JustifyContent>;
  public static lineHeight = this.closure('line-height')<LineHeight>;
  public static opacity = this.closure('opacity')<Opacity>;
  public static position = this.closure('position')<Position>;
  public static rowGap = this.closure('row-gap')<Gap>;
  public static textDecorationLine = this.closure('text-decoration-line')<TextDecorationLine>;
  public static zIndex = this.closure('z-index')<number>;

  private constructor() {}
}
