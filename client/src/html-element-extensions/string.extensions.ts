type CSSPropertyTuple = [key: Prop, value: string];

interface String {
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
  return styles;
};
