import ThemeColor from './colors';

export enum TextTag {
  'brand' = 'h1',
  'infoName' = 'h2',
  'infoDescription' = 'h3',
  'infoLocation' = 'h4',
  'title' = 'h5',
  'subTitle' = 'h6',
  'paragraph' = 'p',
}

export enum FontSize {
  'h1' = '3.2rem',
  'h2' = '2.8rem',
  'h3' = '2.4rem',
  'h4' = '2rem',
  'h5' = '2.2rem',
  'h6' = '1.8rem',
  'p' = '1.6rem',
}

export enum FontWeight {
  'h1' = '600',
  'h2' = '500',
  'h3' = '400',
  'h4' = '300',
  'h5' = '500',
  'h6' = '400',
  'p' = '300',
}
export enum Theme {
  'light' = ThemeColor.colorGreyLighter,
  'dark' = ThemeColor.colorGreyDark,
}
