import ThemeColor from '../../helpers/colors.js';

export function mobilePortraitStyles(): ElementStyles {
  let e: ElementStyles = {};

  // HTML, BODY:
  e.html = ''.cssProperties(
    ['box-sizing', 'border-box'],
    ['font-family', '"Poppins", sans-serif'],
    ['height', '100%'],
    ['margin', '0'],
    ['padding', '0'],
    ['position', 'relative'],
    ['scroll-behavior', 'smooth'],
    ['background-color', '#fff']
  );

  e.body = ''.cssProperties(
    ['box-sizing', 'border-box'],
    ['padding', '0'],
    ['margin', '0'],
    ['background-color', '#aa0'],
    ['min-height', '100%'],
    ['position', 'relative']
  );

  // MAIN-HEADER:
  // HEADER:
  e['main-header'] = ''.cssProperties(
    ['box-sizing', 'border-box'],
    ['display', 'flex'],
    ['flex-direction', 'row'],
    ['justify-content', 'space-between'],
    ['align-items', 'center'],
    // ['backdrop-filter', 'blur(10px],'],
    ['background-color', `${ThemeColor.colorMainDarker}`],
    ['background-color', 'transparent'],
    // ['box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5],'],
    ['min-height', '15vw'],
    ['width', '100vw'],
    ['position', 'fixed'],
    ['top', '0'],
    ['padding', '0 3vw'],
    ['z-index', '10']
  );

  // BUTTON HEADER:
  e['main-header-button'] = ''.cssProperties(
    ['aspect-ratio', '1'],
    ['color', '#ccc'],
    ['display', 'flex'],
    ['box-shadow', '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.2)'],
    ['justify-content', 'flex-start'],
    ['align-items', 'center'],
    ['position', 'relative'],
    ['border', '2px solid #888'],
    ['background-color', `${ThemeColor.colorMainDark}`],
    ['background-color', 'transparent'],
    ['border-radius', '1rem'],
    ['height', `10vw`]
  );

  // BARS - BUTTON HEADER:
  e['main-header-button-bars'] = 'visible';

  // BRAND HEADER:
  e['main-header-brand'] = ''.cssProperties(
    ['margin-block-start', '0'],
    ['margin-block-end', '0'],
    ['font-weight', '500'],
    ['display', 'inline'],
    ['text-shadow', '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5)'],
    ['color', `#ccc`],
    ['z-index', '10'],
    // ['visibility', 'hidden'],
    ['font-size', `6vw`]
  );

  // MENU-NAV
  e['main-header-nav'] = ''.cssProperties(
    ['box-sizing', 'border-box'],
    // ['box-shadow', '0 2.4rem 4.8rem rgba(255, 255, 255, 1],'],
    ['display', 'flex'],
    ['position', 'absolute'],
    ['left', '0'], // change to hidden,
    ['background-color', ThemeColor.colorMainDark],
    ['transition', 'all 0.3s ease-in-out'],
    ['flex-direction', 'column'],
    ['justify-content', 'flex-start'],
    ['align-items', 'center'],
    ['row-gap', `5vh`],
    ['padding', '12vh 0 0 0'],
    // ['border-bottom-right-radius', '3vw'],
    // ['border-top-right-radius', '3vw'],
    ['width', `100vw`],
    ['height', '100vh'],
    ['top', '0vh']
  );

  // MENU INFO:
  e['main-header-nav-info'] = ''.cssProperties(
    ['box-sizing', 'border-box'],
    ['position', 'relative'],
    [
      'background-image',
      'url(https://res.cloudinary.com/aac-devs-data/image/upload/v1666998062/aac-website/info/cyber-3400789_1920_csolpx.jpg)',
    ],

    ['background-size', 'cover'],
    ['background-repeat', 'no-repeat'],
    ['background-position', 'center'],
    ['display', 'flex'],
    ['flex-direction', 'column'],
    ['justify-content', 'flex-start'],
    ['align-items', 'center'],
    ['width', `80vw`],
    ['aspect-ratio', '1.4'],
    ['padding-top', '8vw'],
    ['border-radius', '5vw']
  );

  e['main-header-nav-info-filter'] = ''.cssProperties(
    ['position', 'absolute'],
    ['bottom', '0'],
    ['left', '0'],
    ['height', '100%'],
    ['width', '100%'],
    ['opacity', '0.15'],
    ['background-color', '#000'],
    ['border-radius', '5vw']
  );

  e['main-header-nav-info-name'] = ''.cssProperties(
    ['margin', '0'],
    ['padding', '0'],
    ['font-weight', '500'],
    ['margin-block-start', '0px'],
    ['margin-block-end', '0px'],
    ['z-index', '10'],
    ['color', '#eee'],
    ['text-shadow', '0rem 0rem 2rem rgba(0, 255, 255, 1)'],
    ['font-size', '8vw']
  );

  e['main-header-nav-info-description'] = ''.cssProperties(
    ['margin', '0'],
    ['padding', '0'],
    ['z-index', '10'],
    ['font-weight', '400'],
    ['color', '#ee0'],
    ['margin-block-start', '0px'],
    ['margin-block-end', '0px'],
    ['text-shadow', '0rem 0rem 2rem rgba(0, 255, 255, 1)'],
    ['font-size', '5.5vw']
  );

  e['main-header-nav-info-jslogo'] = ''.cssProperties(
    ['aspect-ratio', '1'],
    [
      'background-image',
      'url(https://res.cloudinary.com/aac-devs-data/image/upload/v1663975560/aac-website/info/js_cgxlpb.png)',
    ],
    ['background-size', 'contain'],
    ['position', 'absolute'],
    ['height', '13vw'],
    ['border-radius', '1vw'],
    ['bottom', '4vw'],
    ['left', '4vw']
  );

  e['main-header-nav-info-linkedin'] = ''.cssProperties(
    ['color', '#fff'],
    ['position', 'absolute'],
    ['aspect-ratio', '1'],
    ['height', '10vw'],
    ['bottom', '4vw'],
    ['right', '4vw'],
    ['padding', '0rem 0.2rem']
  );

  e['main-header-nav-info-github'] = ''.cssProperties(
    ['color', '#fff'],
    ['position', 'absolute'],
    ['aspect-ratio', '1'],
    ['height', '10vw'],
    ['bottom', '4vw'],
    ['right', '4vw'],
    ['padding', '0rem 0.2rem'],
    ['transform', 'translateY(-140%)']
  );

  // MENU UL:
  e['main-header-nav-ul'] = ''.cssProperties(
    ['box-sizing', 'border-box'],
    ['display', 'flex'],
    ['flex-direction', 'column'],
    ['width', `80vw`],
    ['margin', '0'],
    ['padding', '0'],
    ['list-style', 'none'],
    ['row-gap', '2.5vw'],
    ['justify-content', 'flex-start']
  );
  // ['width', 'inherit'],

  e['main-header-nav-ul-li'] = ''.cssProperties(
    ['background-color', `${ThemeColor.colorMainDarker}`],
    ['border-radius', '5vw'],
    ['list-style', 'none']
  );

  e['main-header-nav-ul-li-anchor'] = ''.cssProperties(
    ['box-sizing', 'border-box'],
    ['text-decoration', 'none'],
    ['flex-grow', '1'],
    ['display', 'flex'],
    ['flex-direction', 'row'],
    ['justify-content', 'flex-start'],
    ['align-items', 'center'],
    ['color', '#ccc'],
    ['font-size', '5vw'],
    ['margin', 'auto 0'],
    ['min-height', '10vw'],
    ['max-height', '10vw'],
    ['border-radius', '5vw'],
    ['padding', '1vw 2.5vw']
  );

  e['main-header-nav-ul-li-anchor-icon-container'] = ''.cssProperties(
    ['display', 'flex'],
    ['justify-content', 'center'],
    ['align-items', 'center'],
    ['font-size', '5vw'],
    ['margin', '0 3vw 0 1vw'],
    ['width', '7vw']
  );

  e['main-header-nav-ul-li-anchor-icon'] = ''.cssProperties(['height', '100%'], ['width', '100%']);

  // SECTIONS:
  e.sections = ''.cssProperties(
    ['background-color', `#fff`],
    ['margin-bottom', '10vh'],
    ['box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)'],
    ['background-position', 'center']
  );

  e['sections-header'] = ''.cssProperties(
    ['box-sizing', 'border-box'],
    ['height', '15vw'],
    ['background-color', 'transparent'],
    ['background-color', `${ThemeColor.colorMainDarker}`],
    ['opacity', '0.9'],
    ['box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)'],
    ['display', 'flex'],
    ['flex-direction', 'row'],
    ['justify-content', 'flex-start'],
    ['align-items', 'center'],
    ['column-gap', '1vw'],
    ['position', 'sticky'],
    ['padding', '0 0 0 15vw'],
    ['z-index', '1'],
    ['top', '0vh']
  );

  e['sections-header-title'] = ''.cssProperties(['font-weight', '400'], ['color', `#fff`], ['font-size', '5vw']);

  e['sections-header-icon'] = ''.cssProperties(
    ['display', 'flex'],
    ['color', `#fff`],
    ['justify-content', 'center'],
    ['align-items', 'center'],
    ['font-size', '5vw'],
    ['margin', '0 3vw 0 1vw'],
    ['width', '7vw']
  );

  // PROJECTS SECTION:
  // e['project-section-container'] = ''.cssProperties(
  //   ['display', 'flex'],
  //   ['flex-direction', 'column'],
  //   ['justify-content', 'space-between'],
  //   ['height', 'inherit']
  // );

  e['project-section-container'] = ''.cssProps({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 'inherit',
  });

  e['project-section-ul'] = ''.cssProps({
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    rowGap: '5vw',
    padding: '5vw 0',
    marginBlockStart: '0',
    marginBlockEnd: '0',
    overflowX: 'scroll',
    listStyle: 'none',
    opacity: 1,
  });

  e['project-section-footer'] = ''.cssProperties(
    ['font-size', '5vw'],
    ['color', '#fff'],
    ['height', '5vh'],
    ['background-color', 'orange']
  );

  e['project-section-footer'] = ''.cssProps({
    fontSize: '5vw',
    color: '#fff',
    height: '5vh',
    margin: '5vw',
    backgroundColor: 'orange',
  });

  // HACKERRANK SECTION:

  // SKILLS SECTION:

  // CONTACT SECTION:

  return e;
}

/*
export function mobilePortraitStyles(): ElementStyles {
  let e: ElementStyles = {};

  // HTML, BODY:
  e.html = ''
    .cssProperty('box-sizing', 'border-box')
    .cssProperty('font-family', '"Poppins", sans-serif')
    .cssProperty('height', '100%')
    .cssProperty('margin', '0')
    .cssProperty('padding', '0')
    .cssProperty('position', 'relative')
    .cssProperty('scroll-behavior', 'smooth')
    .cssProperty('background-color', '#fff');

  e.body = ''
    .cssProperty('box-sizing', 'border-box')
    .cssProperty('padding', '0')
    .cssProperty('margin', '0')
    .cssProperty('background-color', '#fff')
    .cssProperty('min-height', '100%')
    .cssProperty('position', 'relative');

  e.test = ''.cssProperties(
    ['box-sizing', 'border-box'],
    ['padding', '0'],
    ['margin', '0'],
    ['background-color', '#fff'],
    ['min-height', '100%'],
    ['position', 'relative']
  );

  // MAIN-HEADER:
  // HEADER:
  e['main-header'] = ''
    .cssProperty('box-sizing', 'border-box')
    .cssProperty('display', 'flex')
    .cssProperty('flex-direction', 'row')
    .cssProperty('justify-content', 'space-between')
    .cssProperty('align-items', 'center')
    // .cssProperty('backdrop-filter', 'blur(10px)')
    .cssProperty('background-color', `${ThemeColor.colorMainDarker}`)
    .cssProperty('background-color', 'transparent')
    // .cssProperty('box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)')
    .cssProperty('min-height', '15vw')
    .cssProperty('width', '100vw')
    .cssProperty('position', 'fixed')
    .cssProperty('top', '0')
    .cssProperty('padding', '0 3vw')
    .cssProperty('z-index', '10');

  // BUTTON HEADER:
  e['main-header-button'] = ''
    .cssProperty('aspect-ratio', '1')
    .cssProperty('color', '#ccc')
    .cssProperty('display', 'flex')
    .cssProperty('box-shadow', '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.2)')
    .cssProperty('justify-content', 'flex-start')
    .cssProperty('align-items', 'center')
    .cssProperty('position', 'relative')
    .cssProperty('border', '2px solid #888')
    .cssProperty('background-color', `${ThemeColor.colorMainDark}`)
    .cssProperty('background-color', 'transparent')
    .cssProperty('border-radius', '1rem')
    .cssProperty('height', `10vw`);

  // BARS - BUTTON HEADER:
  e['main-header-button-bars'] = 'visible';

  // BRAND HEADER:
  e['main-header-brand'] = ''
    .cssProperty('margin-block-start', '0')
    .cssProperty('margin-block-end', '0')
    .cssProperty('font-weight', '500')
    .cssProperty('display', 'inline')
    .cssProperty('text-shadow', '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5)')
    .cssProperty('color', `#ccc`)
    .cssProperty('z-index', '10')
    // .cssProperty('visibility', 'hidden')
    .cssProperty('font-size', `6vw`);

  // MENU-NAV
  e['main-header-nav'] = ''
    .cssProperty('box-sizing', 'border-box')
    // .cssProperty('box-shadow', '0 2.4rem 4.8rem rgba(255, 255, 255, 1)')
    .cssProperty('display', 'flex')
    .cssProperty('position', 'absolute')
    .cssProperty('left', '0') // change to hidden,
    .cssProperty('background-color', ThemeColor.colorMainDark)
    .cssProperty('transition', 'all 0.3s ease-in-out')
    .cssProperty('flex-direction', 'column')
    .cssProperty('justify-content', 'flex-start')
    .cssProperty('align-items', 'center')
    .cssProperty('row-gap', `5vh`)
    .cssProperty('padding', '12vh 0 0 0')
    // .cssProperty('border-bottom-right-radius', '3vw')
    // .cssProperty('border-top-right-radius', '3vw')
    .cssProperty('width', `100vw`)
    .cssProperty('height', '100vh')
    .cssProperty('top', '0vh');

  // MENU INFO:
  e['main-header-nav-info'] = ''
    .cssProperty('box-sizing', 'border-box')
    .cssProperty('position', 'relative')
    .cssProperty(
      'background-image',
      'url(https://res.cloudinary.com/aac-devs-data/image/upload/v1666998062/aac-website/info/cyber-3400789_1920_csolpx.jpg)'
    )

    .cssProperty('background-size', 'cover')
    .cssProperty('background-repeat', 'no-repeat')
    .cssProperty('background-position', 'center')
    .cssProperty('display', 'flex')
    .cssProperty('flex-direction', 'column')
    .cssProperty('justify-content', 'flex-start')
    .cssProperty('align-items', 'center')
    .cssProperty('width', `80vw`)
    .cssProperty('aspect-ratio', '1.4')
    .cssProperty('padding-top', '8vw')
    .cssProperty('border-radius', '5vw');

  e['main-header-nav-info-filter'] = ''
    .cssProperty('position', 'absolute')
    .cssProperty('bottom', '0')
    .cssProperty('left', '0')
    .cssProperty('height', '100%')
    .cssProperty('width', '100%')
    .cssProperty('opacity', '0.15')
    .cssProperty('background-color', '#000')
    .cssProperty('border-radius', '5vw');

  e['main-header-nav-info-name'] = ''
    .cssProperty('margin', '0')
    .cssProperty('padding', '0')
    .cssProperty('font-weight', '500')
    .cssProperty('margin-block-start', '0px')
    .cssProperty('margin-block-end', '0px')
    .cssProperty('z-index', '10')
    .cssProperty('color', '#eee')
    .cssProperty('text-shadow', '0rem 0rem 2rem rgba(0, 255, 255, 1)')
    .cssProperty('font-size', '8vw');

  e['main-header-nav-info-description'] = ''
    .cssProperty('margin', '0')
    .cssProperty('padding', '0')
    .cssProperty('z-index', '10')
    .cssProperty('font-weight', '400')
    .cssProperty('color', '#ee0')
    .cssProperty('margin-block-start', '0px')
    .cssProperty('margin-block-end', '0px')
    .cssProperty('text-shadow', '0rem 0rem 2rem rgba(0, 255, 255, 1)')
    .cssProperty('font-size', '5.5vw');

  e['main-header-nav-info-jslogo'] = ''
    .cssProperty('aspect-ratio', '1')
    .cssProperty(
      'background-image',
      'url(https://res.cloudinary.com/aac-devs-data/image/upload/v1663975560/aac-website/info/js_cgxlpb.png)'
    )
    .cssProperty('background-size', 'contain')
    .cssProperty('position', 'absolute')
    .cssProperty('height', '13vw')
    .cssProperty('border-radius', '1vw')
    .cssProperty('bottom', '4vw')
    .cssProperty('left', '4vw');

  e['main-header-nav-info-linkedin'] = ''
    .cssProperty('color', '#fff')
    .cssProperty('position', 'absolute')
    .cssProperty('aspect-ratio', '1')
    .cssProperty('height', '10vw')
    .cssProperty('bottom', '4vw')
    .cssProperty('right', '4vw')
    .cssProperty('padding', '0rem 0.2rem');

  e['main-header-nav-info-github'] = ''
    .cssProperty('color', '#fff')
    .cssProperty('position', 'absolute')
    .cssProperty('aspect-ratio', '1')
    .cssProperty('height', '10vw')
    .cssProperty('bottom', '4vw')
    .cssProperty('right', '4vw')
    .cssProperty('padding', '0rem 0.2rem')
    .cssProperty('transform', 'translateY(-140%)');

  // MENU UL:
  e['main-header-nav-ul'] = ''
    .cssProperty('box-sizing', 'border-box')
    .cssProperty('display', 'flex')
    .cssProperty('flex-direction', 'column')
    .cssProperty('width', `80vw`)
    .cssProperty('margin', '0')
    .cssProperty('padding', '0')
    .cssProperty('list-style', 'none')
    .cssProperty('row-gap', '2.5vw')
    .cssProperty('justify-content', 'flex-start');
  // .cssProperty('width', 'inherit')

  e['main-header-nav-ul-li'] = ''
    .cssProperty('background-color', `${ThemeColor.colorMainDarker}`)
    .cssProperty('border-radius', '5vw');

  e['main-header-nav-ul-li-anchor'] = ''
    .cssProperty('box-sizing', 'border-box')
    .cssProperty('text-decoration', 'none')
    .cssProperty('flex-grow', '1')
    .cssProperty('display', 'flex')
    .cssProperty('flex-direction', 'row')
    .cssProperty('justify-content', 'flex-start')
    .cssProperty('align-items', 'center')
    .cssProperty('color', '#ccc')
    .cssProperty('font-size', '5vw')
    .cssProperty('margin', 'auto 0')
    .cssProperty('min-height', '10vw')
    .cssProperty('max-height', '10vw')
    .cssProperty('border-radius', '5vw')
    .cssProperty('padding', '1vw 2.5vw');

  e['main-header-nav-ul-li-anchor-icon'] = ''
    .cssProperty('display', 'flex')
    .cssProperty('justify-content', 'center')
    .cssProperty('align-items', 'center')
    .cssProperty('font-size', '5vw')
    .cssProperty('margin', '0 3vw 0 1vw')
    .cssProperty('width', '7vw');

  // SECTIONS:
  e.sections = ''
    .cssProperty('background-color', `#fff`)
    .cssProperty('margin-bottom', '10vh')
    .cssProperty('box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)')
    .cssProperty('background-position', 'center');

  e['sections-header'] = ''
    .cssProperty('box-sizing', 'border-box')
    .cssProperty('height', '15vw')
    .cssProperty('background-color', 'transparent')
    .cssProperty('background-color', `${ThemeColor.colorMainDarker}`)
    .cssProperty('opacity', '0.9')
    .cssProperty('box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)')
    .cssProperty('display', 'flex')
    .cssProperty('flex-direction', 'row')
    .cssProperty('justify-content', 'flex-start')
    .cssProperty('align-items', 'center')
    .cssProperty('column-gap', '1vw')
    .cssProperty('position', 'sticky')
    .cssProperty('padding', '0 0 0 15vw')
    .cssProperty('z-index', '1')
    .cssProperty('top', '0vh');

  e['sections-header-title'] = ''
    .cssProperty('font-weight', '400')
    .cssProperty('color', `#fff`)
    .cssProperty('font-size', '5vw');

  e['sections-header-icon'] = ''
    .cssProperty('display', 'flex')
    .cssProperty('color', `#fff`)
    .cssProperty('justify-content', 'center')
    .cssProperty('align-items', 'center')
    .cssProperty('font-size', '5vw')
    .cssProperty('margin', '0 3vw 0 1vw')
    .cssProperty('width', '7vw');

  // PROJECTS SECTION:

  // HACKERRANK SECTION:

  // SKILLS SECTION:

  // CONTACT SECTION:

  return e;
}

*/
