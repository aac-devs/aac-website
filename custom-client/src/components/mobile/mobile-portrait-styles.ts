import { ComponentStyles } from './mob-nav';

export default function mobilePortraitStyles(width: number, height: number): ComponentStyles {
  let calculatedWidth: number, calculatedHeight: number;
  calculatedHeight = height * 0.9;
  if (width < 500) calculatedWidth = width * 0.83;
  else if (width < 1000) calculatedWidth = width * 0.5;
  else calculatedWidth = width * 0.4;

  // console.log(calculatedWidth);
  const styles: ComponentStyles = {
    header: `
      height:6vh;
      width:100%;
      background-color:black;
      opacity:0.7;
      box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.5);
      `,
    info: `
      width:${calculatedWidth}px;
      aspect-ratio:1;
      background-color:wheat;
      box-sizing:border-box;
      `,
    'nav-shown': `
      box-sizing:border-box;
      display:flex;
      flex-direction:column;
      justify-content:flex-start;
      align-items:center;
      row-gap:1rem;
      position:absolute;
      top:6vh;
      left:${calculatedWidth * -1}px;
      left:0;
      box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.5);
      background-color:white;
      border-bottom-right-radius:1rem;
      border-top-right-radius:1rem;
      padding:1rem;
      `,
    'nav-hidden': `
      `,
    ul: `
      box-sizing:border-box;
      display:flex;
      flex-direction:column;
      justify-content:flex-start;
      row-gap:1rem;
      width:${calculatedWidth}px;
      margin:0;
      padding:0;
      list-style:none;
      `,
    'touch-shown': ``,
    'touch-hidden': ``,
    'button-bars': ``,
    'button-xmark': ``,
  };
  console.log('portrait nav');
  return styles;
}

// background-color:cyan;
