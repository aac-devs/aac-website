import {
  AlignItems,
  BoxSizing,
  Cursor,
  Display,
  Distance,
  FlexDirection,
  FlexGap,
  FlexWrap,
  FontFamily,
  FontSize,
  FontStyle,
  FontWeight,
  JustifyContent,
  LineHeight,
  Opacity,
  Position,
  Size,
  Str,
  TextDecorationLine,
  Unit,
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

  static mapStyles(styles: string): Map<string, string> {
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

  public static display(dp: Display) {
    this.styles.set('display', dp);
    return this;
  }

  // public static box(bz?: BoxSizing, bs?: BoxShadow) {
  //   if (bz) this.styles.set('box-sizing', bz);
  //   if (!bs) return this;
  //   if (bs === 'none') this.styles.set('box-shadow', bs);
  //   else this.styles.set('box-shadow', `${bs['h-offset']} ${bs['h-offset']} ${bs.blur} ${bs.color}`);
  //   return this;
  // }

  public static boxSizing(bz: BoxSizing) {
    this.styles.set('box-sizing', bz);
    return this;
  }

  public static position(ps: Position) {
    this.styles.set('position', ps);
    return this;
  }

  private static place(pl: string) {
    return function (d: Distance, u?: Unit): typeof CSSStyles {
      if (typeof d === 'string' && !u) this.styles.set(pl, d);
      else this.styles.set(pl, `${d}${u}`);
      return this;
    };
  }

  public static top = this.place('top');
  public static right = this.place('right');
  public static bottom = this.place('bottom');
  public static left = this.place('left');

  private static size(sz: string) {
    return function (v: Size, u?: Unit): typeof CSSStyles {
      if (typeof v === 'string' && !u) this.styles.set(sz, v);
      else this.styles.set(sz, `${v}${u}`);
      return this;
    };
  }

  public static width = this.size('width');
  public static height = this.size('height');
  public static minWidth = this.size('min-width');
  public static minHeight = this.size('min-height');
  public static maxWidth = this.size('max-width');
  public static maxWeight = this.size('max-height');

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  private static mpSide(type: string) {
    return (val: Distance, unit?: Unit): typeof CSSStyles => {
      if (typeof val === 'string') this.styles.set(type, val);
      else this.styles.set(type, `${val}${unit}`);
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

  private static mp(type: string) {
    return (topVertical: Str, rightHorizontal?: Str, bottom?: Str, left?: Str): typeof CSSStyles => {
      let str = '';

      if (rightHorizontal && bottom && left) str = `${topVertical} ${rightHorizontal} ${bottom} ${left}`;
      else if (rightHorizontal && bottom) str = `${topVertical} ${rightHorizontal} ${bottom}`;
      else if (rightHorizontal) str = `${topVertical} ${rightHorizontal}`;
      else str = `${topVertical}`;

      this.styles.set(type, str);
      return this;
    };
  }

  public static margin = this.mp('margin');
  public static padding = this.mp('padding');

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  public static backgroundColor(color: string) {
    this.styles.set('background-color', color);
    return this;
  }

  public static color(col: string) {
    this.styles.set('color', col);
    return this;
  }

  public static zIndex(index: number) {
    this.styles.set('z-index', index.toString());
    return this;
  }

  public static fontFamily(ff: FontFamily) {
    this.styles.set('font-family', ff);
    return this;
  }

  public static fontSize(fz: FontSize) {
    this.styles.set('font-size', fz);
    return this;
  }

  public static fontWeight(fw: FontWeight) {
    this.styles.set('font-weight', fw);
    return this;
  }

  public static fontStyle(fs: FontStyle) {
    this.styles.set('font-style', fs);
    return this;
  }

  public static lineHeight(lh: LineHeight) {
    this.styles.set('line-height', lh);
    return this;
  }

  public static textDecorationLine(td: TextDecorationLine) {
    this.styles.set('text-decoration-line', td);
    return this;
  }

  public static parentFlex(fd: FlexDirection, jc: JustifyContent, ai: AlignItems, fg?: FlexGap, fw?: FlexWrap) {
    this.styles.set('display', 'flex');
    this.styles.set('flex-direction', fd);
    this.styles.set('justify-content', jc);
    this.styles.set('align-items', ai);
    if (fw) this.styles.set('flex-wrap', fw);
    if (fg) fd.startsWith('column') ? this.styles.set('row-gap', fg) : this.styles.set('column-gap', fg);
    return this;
  }

  public static opacity(op: Opacity, perc?: '%') {
    if (typeof op === 'string') this.styles.set('opacity', op);
    else if (typeof op === 'number') {
      if (perc) this.styles.set('opacity', `${op}${perc}`);
      else this.styles.set('opacity', op.toString());
    }
    return this;
  }

  public static cursor(cr: Cursor) {
    this.styles.set('cursor', cr);
    return this;
  }

  private constructor() {}
}
