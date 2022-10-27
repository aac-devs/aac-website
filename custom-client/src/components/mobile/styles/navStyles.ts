import CSSStyles from '../../../helpers/css.js';
import getScreenSize from '../../../helpers/sizes.js';

export function navStyles(status: 'visible' | 'hidden'): string {
  const { height, width, orientation } = getScreenSize();
  let calculatedWidth: number, calculatedHeight: number, calculatedTop: number;

  let styles: string = '';
  if (orientation === 'portrait-primary') {
    calculatedHeight = height * 0.9;
    if (width < 500) calculatedWidth = width * 0.83;
    else if (width < 1000) calculatedWidth = width * 0.5;
    else calculatedWidth = width * 0.4;

    styles = CSSStyles.start()
      .boxSizing('border-box')
      .display('flex')
      .flexDirection('column')
      .justifyContent('flex-start')
      .alignItems('center')
      .rowGap('1rem')
      .position('absolute')
      .top('6vh')
      .left('0px')
      .borderRadius('1rem') // Modificar sólo lados derecho
      .padding('1rem')
      .backgroundColor('#fff')
      .toString();

    if (status === 'visible') {
      styles = CSSStyles.insert(`${styles}transition:all 0.3s ease-in-out;`)
        .boxShadow('0rem', '2.4rem', '4.8rem', `rgba(0, 0, 0, 0.5)`)
        .toString();
    } else {
      styles = CSSStyles.insert(`${styles}transform:translateX(-100%);transition:all 0.3s ease-in-out;`)
        .boxShadow('none')
        .toString();
    }
  } else {
    calculatedTop = height * 0.1;
    calculatedHeight = height * 0.6;
    if (width < 700) calculatedWidth = width * 0.8;
    else if (width < 1000) calculatedWidth = width * 0.7;
    else calculatedWidth = width * 0.5;

    if (status === 'visible') {
      styles = CSSStyles.start()
        .boxSizing('border-box')
        .boxShadow('0rem', '2.4rem', '4.8rem', `rgba(0, 0, 0, 0.5)`)
        .position('absolute')
        .left(`${calculatedWidth * -1}px`)
        .left('0px')
        .top(`${calculatedTop}px`)
        .padding('1rem')
        .display('flex')
        .backgroundColor('#f0f')
        .flexDirection('row')
        .justifyContent('flex-start')
        .alignItems('center')
        .columnGap('1rem')
        .borderRadius('1rem') // Modificar sólo lados derecho
        .toString();
    } else {
      styles = CSSStyles.start()
        .boxSizing('border-box')
        .boxShadow('none')
        .position('absolute')
        .left('0px')
        .top(`${calculatedTop}px`)
        .padding('1rem')
        .display('flex')
        .backgroundColor('pink')
        .flexDirection('row')
        .justifyContent('flex-start')
        .alignItems('center')
        .columnGap('1rem')
        .borderRadius('1rem') // Modificar sólo lados derecho
        .toString();
      styles = `${styles}transform: translateX(-100%);`;
    }
  }
  // console.clear();
  // console.log(styles);
  return styles;
}
