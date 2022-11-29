type CSSPropertyTuple = [key: Prop, value: string];

String.prototype.cssProperties = function (...items: CSSPropertyTuple[]) {
  let styles: string = '';
  items.forEach((item) => {
    const [key, value] = item;
    const regexp = new RegExp(`(?<=${key}:)[^;]+`, 'g');
    if (styles.match(regexp)) styles = `${styles.replace(regexp, value)}`;
    else styles = `${styles}${key}:${value};`;
  });
  return styles;
};

interface String {
  // css(key: Prop, value: string): string;
  cssProperty(key: Prop, value: string): string;
  cssProperties(...items: CSSPropertyTuple[]): string;
  // display(value: Display): string;
  cssProps(x: CSSProperty): string;
}

String.prototype.cssProps = function (properties: CSSProperty) {
  let styles: string = '';
  Object.entries(properties).forEach((entry) => {
    const [k, value] = entry;
    const key = k.replace(/([A-Z])/g, (letter) => `-${letter.toLowerCase()}`);
    const regexp = new RegExp(`(?<=${key}:)[^;]+`, 'g');
    if (styles.match(regexp)) styles = `${styles.replace(regexp, value)}`;
    else styles = `${styles}${key}:${value};`;
  });
  // console.log(styles);
  return styles;
};

// String.prototype.css = function (key: Prop, value: string) {
//   const regexp = new RegExp(`(?<=${key}:)[^;]+`, 'g');
//   if (this.match(regexp)) {
//     // console.log(this.match(regexp));
//     return `${this.replace(regexp, value)}`;
//   }
//   return `${this}${key}:${value};`;
// };

String.prototype.cssProperty = function (key: Prop, value: string) {
  const regexp = new RegExp(`(?<=${key}:)[^;]+`, 'g');
  if (this.match(regexp)) {
    // console.log(this.match(regexp));
    return `${this.replace(regexp, value)}`;
  }
  return `${this}${key}:${value};`;
};

// function propertyFactory(key: Prop) {
//   return function <T>(value: T) {
//     const regexp = new RegExp(`(?<=${key}:)[^;]+`, 'g');
//     if (this.match(regexp)) return `${this.replace(regexp, value)}`;
//     return `${this}${key}:${value};`;
//   };
// }

// String.prototype.display = propertyFactory('display')<Display>;

// interface CSSProperty {
//   display?: Display;
//   // 'align-items';
// }
