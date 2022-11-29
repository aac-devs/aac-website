import ThemeColor from '../../helpers/colors.js';
import getScreenSize from '../../helpers/sizes.js';

export function mobileLandscapeStyles(): ElementStyles {
  const CALCULATED_TOP = getScreenSize().height * 0.12;
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
    ['background-color', '#fff'],
    ['min-height', '100%'],
    ['position', 'relative']
  );

  // MAIN-HEADER:
  // HEADER:
  e['main-header'] = ''.cssProperties(
    ['display', 'flex'],
    ['flex-direction', 'row'],
    ['justify-content', 'space-between'],
    ['align-items', 'center'],
    ['background-color', `${ThemeColor.colorMainDarker}`],
    ['box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)'],
    ['height', `${CALCULATED_TOP}px`],
    ['padding', '0 3vw']
  );

  e['main-header-button'] = ''.cssProperties(
    ['aspect-ratio', '1'],
    ['color', '#ccc'],
    ['display', 'flex'],
    ['justify-content', 'flex-start'],
    ['align-items', 'center'],
    ['position', 'relative'],
    ['border', '1px solid #888'],
    ['background-color', `${ThemeColor.colorMainDark}`],
    ['border-radius', '1rem'],
    ['height', `${CALCULATED_TOP * 0.7}px`]
  );

  e['main-header-button-bars'] = 'visible';

  e['main-header-brand'] = ''.cssProperties(
    ['margin-block-start', '0'],
    ['margin-block-end', '0'],
    ['font-weight', '500'],
    ['display', 'inline'],
    ['color', `#ccc`],
    ['font-size', `${CALCULATED_TOP * 0.5}px`]
  );

  e['main-header-nav'] = ''.cssProperties(
    ['box-sizing', 'border-box'],
    ['box-shadow', '0 2.4rem 4.8rem rgba(255, 255, 255, 1)'],
    ['display', 'flex'],
    ['justify-content', 'flex-start'],
    ['position', 'absolute'],
    ['left', '0'], // change to hidden,
    ['background-color', `${ThemeColor.colorMainDark}`],
    ['transition', 'all 0.3s ease-in-out'],
    ['flex-direction', 'row'],
    ['align-items', 'center'],
    ['border-bottom-right-radius', '3vh'],
    ['border-top-right-radius', '3vh'],
    ['column-gap', `4vh`],
    ['padding', `4vh`],
    ['top', `${CALCULATED_TOP}px`]
  );

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
    ['height', `60vh`],
    ['padding-top', '8vh'],
    ['border-radius', '5vh'],
    ['aspect-ratio', '5/4']
  );

  e['main-header-nav-info-filter'] = ''.cssProperties(
    ['position', 'absolute'],
    ['bottom', '0'],
    ['left', '0'],
    ['height', '100%'],
    ['width', '100%'],
    ['opacity', '0.15'],
    ['background-color', '#000'],
    ['border-radius', '5vh']
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
    ['font-size', '7.5vh']
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
    ['font-size', '5.2vh']
  );

  e['main-header-nav-info-jslogo'] = ''.cssProperties(
    ['aspect-ratio', '1'],
    [
      'background-image',
      'url(https://res.cloudinary.com/aac-devs-data/image/upload/v1663975560/aac-website/info/js_cgxlpb.png)',
    ],
    ['background-size', 'contain'],
    ['position', 'absolute'],
    ['height', '12vh'],
    ['border-radius', '1vh'],
    ['bottom', '4vh'],
    ['left', '4vh']
  );

  e['main-header-nav-info-linkedin'] = ''.cssProperties(
    ['color', '#fff'],
    ['position', 'absolute'],
    ['aspect-ratio', '1'],
    ['height', '9vh'],
    ['bottom', '4vh'],
    ['right', '4vh'],
    ['padding', '0rem 0.2rem']
  );

  e['main-header-nav-info-github'] = ''.cssProperties(
    ['color', '#fff'],
    ['position', 'absolute'],
    ['aspect-ratio', '1'],
    ['height', '9vh'],
    ['bottom', '4vh'],
    ['right', '4vh'],
    ['padding', '0rem 0.2rem'],
    ['transform', 'translateY(-140%)']
  );

  e['main-header-nav-ul'] = ''.cssProperties(
    ['box-sizing', 'border-box'],
    ['display', 'flex'],
    ['flex-direction', 'column'],
    ['margin', '0'],
    ['padding', '0'],
    ['list-style', 'none'],
    ['height', `60vh`], // calculated
    ['row-gap', '2.5vh'],
    ['aspect-ratio', '8/11'],
    ['justify-content', 'center']
  );

  e['main-header-nav-ul-li'] = ''.cssProperties(
    ['background-color', `${ThemeColor.colorMainDarker}`],
    ['border-radius', '5vh']
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
    ['font-size', '4.2vh'],
    ['margin', 'auto 0'],
    ['border-radius', '5vh'],
    ['min-height', '10vh'],
    ['max-height', '10vh'],
    ['padding', '1vh 2.5vh']
  );

  e['main-header-nav-ul-li-anchor-icon-container'] = ''.cssProperties(
    ['display', 'flex'],
    ['justify-content', 'center'],
    ['align-items', 'center'],
    ['font-size', '4.5vh'],
    ['margin', '0 3vh 0 1vh'],
    ['width', '7vh']
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
    ['height', '10vw'],
    ['background-color', 'transparent'],
    ['background-color', `${ThemeColor.colorMainDarker}`],
    ['opacity', '0.9'],
    ['box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)'],
    ['display', 'flex'],
    ['flex-direction', 'row'],
    ['justify-content', 'flex-start'],
    ['align-items', 'center'],
    ['column-gap', '2vw'],
    ['position', 'sticky'],
    ['padding', '0 2vw'],
    ['z-index', '1'],
    ['top', '6vh']
  );

  e['sections-header-title'] = ''.cssProperties(['font-weight', '500'], ['color', `#fff`], ['font-size', '5vw']);

  // PROJECTS SECTION:

  // HACKERRANK SECTION:

  // SKILLS SECTION:

  // CONTACT SECTION:

  return e;
}

// TODO: los header de las secciones en modo landscape van a ser verticales al lado derecho (letras en modo vertical), y el scroll de cada sección será horizontal
