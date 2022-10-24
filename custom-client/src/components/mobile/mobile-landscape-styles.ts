import { ComponentStyles } from './mob-nav';

export default function mobileLandscapeStyles(width: number, height: number): ComponentStyles {
  let calculatedWidth: number, calculatedHeight: number, calculatedTop: number;
  calculatedTop = height * 0.1;
  calculatedHeight = height * 0.6;
  if (width < 700) calculatedWidth = width * 0.8;
  else if (width < 1000) calculatedWidth = width * 0.7;
  else calculatedWidth = width * 0.5;

  const styles: ComponentStyles = {
    header: `
      height:${calculatedTop}px;
      width:100%;
      background-color:black;
      opacity:0.7;
      box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.5);
      `,
    info: `
      height:${calculatedHeight}px;
      aspect-ratio:1;
      background-color:wheat;
      box-sizing:border-box;
      `,
    'nav-shown': `
      box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.5);
      position:absolute;
      top:${calculatedTop}px;
      left:${calculatedWidth * -1}px;
      left:0;
      background-color:yellow;
      box-sizing:border-box;
      border-bottom-right-radius:1rem;
      border-top-right-radius:1rem;
      display:flex;
      flex-direction:row;
      justify-content:flex-start;
      align-items:center;
      column-gap:1rem;
      padding:1rem;
      `,
    'nav-hidden': `
      `,
    ul: `
      height:${calculatedHeight}px;
      aspect-ratio:3/5;
      background-color:cyan;
      margin:0;
      padding:0;
      box-sizing:border-box;
      `,
    'touch-shown': ``,
    'touch-hidden': ``,
    'button-bars': ``,
    'button-xmark': ``,
  };
  console.log('landscape nav');
  return styles;
}
