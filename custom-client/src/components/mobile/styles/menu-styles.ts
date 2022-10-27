import getScreenSize from '../../../helpers/sizes.js';

export function menuStyles(): string[] {
  const { height, width, orientation, device } = getScreenSize();
  let calculatedWidth: number = 0,
    calculatedHeight: number = 0,
    calculatedTop: number = 0;

  let header: string, nav: string, info: string, ul: string;

  if (orientation === 'portrait-primary') {
    calculatedHeight = height * 0.9;
    if (width < 500) calculatedWidth = width * 0.83;
    else if (width < 1000) calculatedWidth = width * 0.5;
    else calculatedWidth = width * 0.4;

    header = ''
      .css('height', '6vh')
      .css('width', '100%')
      .css('background-color', 'black')
      .css('opacity', '0.7')
      .css('box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)');

    nav = ''
      .css('box-sizing', 'border-box')
      .css('display', 'flex')
      .css('flex-direction', 'column')
      .css('justify-content', 'flex-start')
      .css('align-items', 'center')
      .css('row-gap', '1rem')
      .css('position', 'absolute')
      .css('top', '6vh')
      .css('left', '0') // change to hidden
      .css('transition', 'all 0.3s ease-in-out')
      .css('border-bottom-right-radius', '1rem')
      .css('border-top-right-radius', '1rem')
      .css('padding', '1rem')
      .css('background-color', '#fff')
      .css('box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)');

    info = ''
      .css('width', `${calculatedWidth}px`)
      .css('box-sizing', 'border-box')
      .css('aspect-ratio', '1')
      .css('background-color', 'wheat');

    ul = ''
      .css('box-sizing', 'border-box')
      .css('width', `${calculatedWidth}px`) // calculated
      .css('display', 'flex')
      .css('flex-direction', 'column')
      .css('justify-content', 'flex-start')
      .css('row-gap', '1rem')
      .css('margin', '0')
      .css('padding', '0')
      .css('list-style', 'none');
  } else {
    calculatedTop = height * 0.1;
    calculatedHeight = height * 0.6;
    if (width < 700) calculatedWidth = width * 0.8;
    else if (width < 1000) calculatedWidth = width * 0.7;
    else calculatedWidth = width * 0.5;

    header = ''
      .css('height', `${calculatedTop}px`)
      .css('width', '100%')
      .css('background-color', 'black')
      .css('opacity', '0.7')
      .css('box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)');

    nav = ''
      .css('box-sizing', 'border-box')
      .css('display', 'flex')
      .css('flex-direction', 'row')
      .css('justify-content', 'flex-start')
      .css('align-items', 'center')
      .css('column-gap', '1rem')
      .css('position', 'absolute')
      .css('top', `${calculatedTop}px`) // calculado!!!
      .css('left', '0') // change to hidden
      .css('transition', 'all 0.3s ease-in-out')
      .css('border-bottom-right-radius', '1rem')
      .css('border-top-right-radius', '1rem')
      .css('padding', '1rem')
      .css('background-color', '#fff')
      .css('box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)');

    info = ''
      .css('box-sizing', 'border-box')
      .css('height', `${calculatedHeight}px`)
      .css('aspect-ratio', '1')
      .css('background-color', 'wheat');

    ul = ''
      .css('box-sizing', 'border-box')
      .css('height', `${calculatedHeight}px`) // calculated
      .css('aspect-ratio', '3/5')
      .css('display', 'flex')
      .css('flex-direction', 'column')
      .css('justify-content', 'center')
      .css('row-gap', '1rem')
      .css('background-color', 'cyan')
      .css('margin', '0')
      .css('padding', '0')
      .css('list-style', 'none');
  }

  return [header, nav, info, ul];
}
