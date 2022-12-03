import ThemeColor from '../../helpers/colors.js';
import getScreenSize from '../../helpers/sizes.js';

export function mobileLandscapeStyles(): ElementStyles {
  const CALCULATED_TOP = getScreenSize().height * 0.12;
  const WIDTH = getScreenSize().width;
  const CONTAINER_TRANSITION = 'all 0.3s ease-in-out';
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

  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML                                                                                                          ML ML
  //ML       ##    ##  ########  ####     ###  ##                  #######    ######   #######   ##     #       ML ML
  //ML       ##    ##     ##     ## ##   # ##  ##                  ##    ##  ##    ##  ##    ##   ##   #        ML ML
  //ML       ##    ##     ##     ##  ## #  ##  ##                  ##    ##  ##    ##  ##    ##    ## #         ML ML
  //ML       ########     ##     ##   ##   ##  ##                  ########  ##    ##  ##    ##     ##          ML ML
  //ML       ##    ##     ##     ##        ##  ##                  ##    ##  ##    ##  ##    ##     ##          ML ML
  //ML       ##    ##     ##     ##        ##  ##                  ##    ##  ##    ##  ##    ##     ##          ML ML
  //ML       ##    ##     ##     ##        ##  ########            #######    ######   #######      ##          ML ML
  //ML                                                                                                          ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML
  //ML
  //ML
  //ML

  e.html = ''.cssProps({
    boxSizing: 'border-box',
    fontFamily: '"Poppins", sans-serif',
    height: '100%',
    margin: '0px',
    padding: '0px',
    position: 'relative',
    scrollBehavior: 'smooth',
    backgroundColor: '#fff',
  });

  e.body = ''.cssProperties(
    ['box-sizing', 'border-box'],
    ['padding', '0'],
    ['margin', '0'],
    // ['background-color', '#aa0'],
    ['min-height', '100%'],
    ['position', 'relative']
  );

  e.BODY = ''.cssProps({
    boxSizing: 'border-box',
    padding: '0px',
    margin: '0px',
    minHeight: '100%',
    position: 'relative',
  });

  //ML    END HTML / BODY
  //ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML

  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML                                                                                                          ML ML
  //ML                       ##    ##  ########    ####    #######   ########  #######                          ML ML
  //ML                       ##    ##  ##         ##  ##   ##    ##  ##        ##    ##                         ML ML
  //ML                       ##    ##  ##        ##    ##  ##    ##  ##        ##    ##                         ML ML
  //ML                       ########  ######    ########  ##    ##  ######    #######                          ML ML
  //ML                       ##    ##  ##        ##    ##  ##    ##  ##        ##    ##                         ML ML
  //ML                       ##    ##  ##        ##    ##  ##    ##  ##        ##    ##                         ML ML
  //ML                       ##    ##  ########  ##    ##  #######   ########  ##    ##                         ML ML
  //ML                                                                                                          ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML
  //ML
  //ML
  //ML

  // /header/header.organism.ts
  e.HEADER_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: 'transparent',
    // backgroundColor: 'lime',
    minHeight: '0vh',
    height: '0vh',
    maxHeight: '0vh',
    width: '100vw',
    position: 'fixed',
    top: '0',
    // padding: '0 3vh',
    zIndex: '10',
  });

  // /header/header.organism.ts
  e.HEADER_BUTTON = ''.cssProps({
    boxSizing: 'border-box',
    color: '#ccc',
    border: '0px solid #888',
    boxShadow: '0.8rem 0.8rem 2rem rgba(0, 0, 0, 0.5)',
    backgroundColor: 'transparent',
    aspectRatio: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: '1vh',
    padding: '0.8vh',
    position: 'absolute',
    bottom: '-13vh',
    left: '3vh',
  });

  // /header/header.organism.ts
  e.HEADER_BUTTON_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    aspectRatio: '1',
    height: '8vh',
  });

  // /header/header.organism.ts
  e.HEADER_BUTTON_ICON = ''.cssProps({
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
    borderRadius: '1vw',
  });

  // /header/header.organism.ts
  e.HEADER_BRAND = ''.cssProps({
    boxSizing: 'border-box',
    textShadow: '0.5rem 0.5rem 1rem rgba(255, 255, 255, 1)',
    color: '#555',
    fontWeight: '500',
    display: 'inline',
    zIndex: '10',
    fontSize: '6vh',
    marginBlock: '0px',
    marginTop: '1vh',
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: '-10vh',
    right: '3vh',
    // position: 'fixed',
    // top: '0px',
    // right: '0px',
  });

  //ML    END HEADER
  //ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML

  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML                                                                                                          ML ML
  //ML                                    ###     ##    ####    ##    ##                                        ML ML
  //ML                                    ####    ##   ##  ##   ##    ##                                        ML ML
  //ML                                    ## ##   ##  ##    ##  ##    ##                                        ML ML
  //ML                                    ##  ##  ##  ########  ##    ##                                        ML ML
  //ML                                    ##   ## ##  ##    ##  ##    ##                                        ML ML
  //ML                                    ##    ####  ##    ##   ##  ##                                         ML ML
  //ML                                    ##     ###  ##    ##    ####                                          ML ML
  //ML                                                                                                          ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML
  //ML
  //ML
  //ML

  // /nav/nav.organism.ts
  e.NAV = ''.cssProps({
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    position: 'absolute',
    left: '20vh',
    top: '0px',
    backdropFilter: 'blur(10px)',
    transition: CONTAINER_TRANSITION,
    borderBottomRightRadius: '3vh',
    borderBottomLeftRadius: '3vh',
    transform: 'translateX(-1400%)',
    // display: 'block',
  });

  // /nav/molecules/ul.molecule.ts
  e.NAV_UL = ''.cssProps({
    boxSizing: 'border-box',
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // rowGap: '4vw',
    columnGap: '4vh',
    padding: '4vh 4vh 4.5vh 4vh',
    marginBlock: '0px',
  });

  // /nav/nav.organism.data.ts
  e.NAV_LI = ''.cssProps({
    boxSizing: 'border-box',
    backgroundColor: `rgba(08, 49, 52, 1)`,
    boxShadow: '0.5rem 0.5rem 1rem rgba(0, 127, 127, 0.8)',
    borderRadius: '2vh',
    minHeight: '10vh',
    minWidth: '10vh',
    maxHeight: '10vh',
    maxWidth: '10vh',
  });

  // /nav/nav.organism.data.ts
  e.NAV_ANCHOR = ''.cssProps({
    boxSizing: 'border-box',
    color: '#aaa',
    textDecoration: 'none',
    fontSize: '5vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '2vh',
    minHeight: '10vh',
    minWidth: '10vh',
    maxHeight: '10vh',
    maxWidth: '10vh',
  });

  // /nav/nav.organism.data.ts
  e.NAV_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '5vw',
    height: '70%',
    width: '70%',
  });

  // /nav/nav.organism.data.ts
  e.NAV_ICON = ''.cssProps({
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
    borderRadius: '1vh',
  });

  //ML    END NAV
  //ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML

  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML                                                                                                          ML ML
  //ML                                ####  ###   ##  ########   ######                                         ML ML
  //ML                                 ##   ####  ##  ##        ##    ##                                        ML ML
  //ML                                 ##   ## ## ##  ##        ##    ##                                        ML ML
  //ML                                 ##   ##  ####  ######    ##    ##                                        ML ML
  //ML                                 ##   ##   ###  ##        ##    ##                                        ML ML
  //ML                                 ##   ##    ##  ##        ##    ##                                        ML ML
  //ML                                ####  ##    ##  ##         ######                                         ML ML
  //ML                                                                                                          ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML
  //ML
  //ML
  //ML

  // /info/info.organism.ts
  e.INFO_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    position: 'fixed',
    transition: CONTAINER_TRANSITION,
    bottom: '0px',
    right: '0px',
    backgroundColor: 'transparent',
    transform: 'translateY(1000%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '60vh',
    padding: '2vh 4vh',
    borderTopLeftRadius: '5vh',
    backdropFilter: 'blur(10px)',
  });

  // /info/info.organism.ts
  e.INFO_NAME = ''.cssProps({
    boxSizing: 'border-box',
    textShadow: '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.8)',
    margin: '0px',
    padding: '0px',
    marginBlock: '0px',
    fontWeight: '500',
    fontSize: '6.5vh',
    color: 'orangered',
    zIndex: '10',
  });

  // /info/info.organism.ts
  e.INFO_DESCRIPTION = ''.cssProps({
    boxSizing: 'border-box',
    color: 'orangered',
    textShadow: '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.8)',
    margin: '0px',
    padding: '0px',
    marginBlock: '0px',
    fontWeight: '400',
    fontSize: '4.5vh',
    zIndex: '10',
  });

  //ML    END INFO
  //ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML

  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML                                                                                                          ML ML
  //ML                           ######    ######    ######   ####    ####    ##                                ML ML
  //ML                          ##    ##  ##    ##  ##    ##   ##    ##  ##   ##                                ML ML
  //ML                          ##        ##    ##  ##         ##   ##    ##  ##                                ML ML
  //ML                           ######   ##    ##  ##         ##   ########  ##                                ML ML
  //ML                                ##  ##    ##  ##         ##   ##    ##  ##                                ML ML
  //ML                          ##    ##  ##    ##  ##    ##   ##   ##    ##  ##                                ML ML
  //ML                           ######    ######    ######   ####  ##    ##  ########                          ML ML
  //ML                                                                                                          ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML
  //ML
  //ML
  //ML

  // /info/social.organism.ts
  e.SOCIAL_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    position: 'fixed',
    left: '20vh',
    bottom: '0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    columnGap: '3vh',
    padding: '3vw 3.5vw 3vw 3vw',
    transition: CONTAINER_TRANSITION,
    borderTopLeftRadius: '3vh',
    borderTopRightRadius: '3vh',
    transform: 'translateY(1000%)',
    backdropFilter: 'blur(10px)',
  });

  // /info/social.organism.ts
  e.SOCIAL_GITHUB_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    color: '#000',
    backgroundColor: '#fff',
    boxShadow: '0.5rem 0.5rem 1rem rgba(0, 127, 127, 0.8)',
    height: '9vh',
    aspectRatio: '1',
    borderRadius: '1vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  // /info/social.organism.ts
  e.SOCIAL_LINKEDIN_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    color: 'mediumblue',
    backgroundColor: '#fff',
    boxShadow: '0.5rem 0.5rem 1rem rgba(0, 127, 127, 0.8)',
    aspectRatio: '1',
    height: '9vh',
    borderRadius: '1vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  // /info/social.organism.ts
  e.SOCIAL_ICON = ''.cssProps({
    boxSizing: 'border-box',
    height: '100%',
    aspectRatio: '1',
  });

  //ML    END
  //ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML

  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML                                                                                                          ML ML
  //ML                          ########  #######     ####    ####     ###  ########                            ML ML
  //ML                          ##        ##    ##   ##  ##   ## ##   # ##  ##                                  ML ML
  //ML                          ##        ##    ##  ##    ##  ##  ## #  ##  ##                                  ML ML
  //ML                          ######    #######   ########  ##   ##   ##  ######                              ML ML
  //ML                          ##        ##    ##  ##    ##  ##        ##  ##                                  ML ML
  //ML                          ##        ##    ##  ##    ##  ##        ##  ##                                  ML ML
  //ML                          ##        ##    ##  ##    ##  ##        ##  ########                            ML ML
  //ML                                                                                                          ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML
  //ML
  //ML
  //ML

  // sections/sections.ts
  e.FRAMES_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    rowGap: '5vh',
    // backgroundColor: 'lime',
    // columnGap: '5vw',
    scrollBehavior: 'smooth',
    overflowY: 'scroll',
    transition: CONTAINER_TRANSITION,
  });

  // /sections/section-frame.ts
  e.FRAME_SINGLE_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    // backgroundColor: 'palegoldenrod',
    width: '100vw',
    height: '100vh',
    flexShrink: '0',
    // fontSize: '5rem',
    display: 'flex',
    // backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative',
    overflowX: 'scroll',
  });

  // /sections/section-frame.ts
  e.FRAME_HEADER_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    backgroundColor: `rgba(08, 49, 52, 0.8)`,
    // backgroundColor: 'transparent',
    minWidth: '16vh',
    maxWidth: '16vh',
    width: '16vh',
    height: '100vh',
    // height: '15vh',
    // minHeight: '15vw',
    // width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    rowGap: '3vh',
    // columnGap: '3vw',
    paddingTop: '16vh',
    paddingBottom: '3vh',
    position: 'sticky',
    // top: '0px',
    zIndex: '1',
    left: '0px',
  });

  // /sections/section-frame.ts
  e.FRAME_BODY = ''.cssProps({
    boxSizing: 'border-box',
    flexGrow: 1,
    // backgroundColor: 'olive',
    width: `calc(${WIDTH} - 16vh)`,
    // minHeight: '85vw', // TODO: revisar esta parte
  });

  // /sections/section-frame.ts
  e.FRAME_HEADER_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    color: '#ccc',
    width: '50%',
    // height: '50%',
    aspectRatio: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '8vh',
  });

  // /sections/section-frame.ts
  e.FRAME_HEADER_ICON = ''.cssProps({
    boxSizing: 'border-box',
    textShadow: '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5)',
    width: '100%',
    aspectRatio: '1',
    borderRadius: '1vh',
  });

  // /sections/section-frame.ts
  e.FRAME_HEADER_TEXT = ''.cssProps({
    boxSizing: 'border-box',
    textShadow: '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5)',
    color: '#ccc',
    fontWeight: '500',
    display: 'inline',
    zIndex: '10',
    fontSize: '5vh',
    marginBlock: '0px',
    writingMode: 'vertical-lr',
    textOrientation: 'upright',
    wordSpacing: '0.1',
    textTransform: 'uppercase',
    // backgroundColor: 'wheat',
    flexGrow: 1,
    textAlign: 'center',
    // lineHeight: '0.5',
    // lineBreak: '0.5',
    // letterSpacing: '0.1',
  });

  //ML    END FRAME
  //ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML

  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML                                                                                                          ML ML
  //ML            #######   #######    ######         ##  ########   ######   ########   ######                 ML ML
  //ML            ##    ##  ##    ##  ##    ##        ##  ##        ##    ##     ##     ##    ##                ML ML
  //ML            ##    ##  ##    ##  ##    ##        ##  ##        ##           ##     ##                      ML ML
  //ML            #######   #######   ##    ##        ##  ######    ##           ##      ######                 ML ML
  //ML            ##        ##    ##  ##    ##        ##  ##        ##           ##           ##                ML ML
  //ML            ##        ##    ##  ##    ##  ##    ##  ##        ##    ##     ##     ##    ##                ML ML
  //ML            ##        ##    ##   ######    ######   ########   ######      ##      ######                 ML ML
  //ML                                                                                                          ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML
  //ML
  //ML
  //ML

  //  /PROJECTS/project.organism.ts
  e.PROJECTS_UL = ''.cssProps({
    boxSizing: 'border-box',
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: '5vh',
    // backgroundColor: 'wheat',
    backgroundColor: 'honeydew',
    // backgroundColor: 'gold',
    minHeight: '100%',
    maxHeight: '100%',
    height: '100vh',
    // width: '100vw',
    marginBlock: '0px',
    paddingInline: '0px',
    padding: '0px 5vh',
    overflowX: 'scroll',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    backgroundColor: '#000',
    boxShadow: '0px 2.4rem 4.8rem rgba(0, 0, 0, 0.5)',
    width: '80vh',
    aspectRatio: '1',
    flexShrink: '0',
    borderRadius: '5vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: 'top',
    backgroundPositionX: 'center',
    position: 'relative',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_FILTER = ''.cssProps({
    backgroundColor: '#000',
    position: 'absolute',
    borderRadius: '5vh',
    height: '100%',
    width: '100%',
    top: '0px',
    left: '0px',
    opacity: '60%',
    zIndex: '0',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_ELEMENTS_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: '0',
    borderRadius: '5vh',
    top: '0px',
    left: '0px',
    height: '100%',
    width: '100%',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_TITLE = ''.cssProps({
    boxSizing: 'border-box',
    textShadow: '0 0 1rem rgba(255, 255, 255, 1)',
    borderBottom: '1px solid #fff',
    color: '#fff',
    marginBlock: '0px',
    letterSpacing: '0.2rem',
    fontWeight: '500',
    fontSize: '6vh',
    padding: '2vh 0px',
    textAlign: 'center',
    zIndex: '10',
    borderTopLeftRadius: '5vh',
    borderTopRightRadius: '5vh',
    backdropFilter: 'blur(10px)',
    position: 'relative',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_DATE = ''.cssProps({
    boxSizing: 'border-box',
    color: '#000',
    backgroundColor: 'goldenrod',
    position: 'absolute',
    marginBlock: '0px',
    bottom: '0px',
    right: '2vh',
    transform: 'translateY(100%)',
    fontWeight: '400',
    fontSize: '4vh',
    padding: '0.2vh 2vh',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_DESCRIPTION_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: '40%',
    left: '0px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '3vh',
    width: '100%',
    padding: '3vh 1vh',
    backdropFilter: 'blur(10px)',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_DESCRIPTION_TEXT = ''.cssProps({
    boxSizing: 'border-box',
    textShadow: '0 0 1rem rgba(255, 255, 255, 1)',
    color: '#fff',
    fontSize: '4vh',
    fontWeight: '400',
    marginBlock: '0px',
    lineHeight: '1.1',
    textAlign: 'center',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_GITHUB_ANCHOR = ''.cssProps({
    boxSizing: 'border-box',
    backgroundColor: '#c92a2a',
    boxShadow: '0px -2.4rem 4.8rem rgba(0, 255, 255, 0.5)',
    borderRight: '1px solid #fff',
    borderTop: '1px solid #fff',
    outline: '2px solid #0FF',
    height: '8vh',
    aspectRatio: '1',
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    padding: '2vh 6vh',
    borderTopRightRadius: '5vh',
    borderBottomLeftRadius: '5vh',
    outlineOffset: '1vh',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_APP_ANCHOR = ''.cssProps({
    boxSizing: 'border-box',
    backgroundColor: '#c92a2a',
    boxShadow: '0px -2.4rem 4.8rem rgba(0, 255, 255, 0.5)',
    borderLeft: '1px solid #fff',
    borderTop: '1px solid #fff',
    outline: '2px solid #0FF',
    height: '8vh',
    aspectRatio: '1',
    position: 'absolute',
    bottom: '0px',
    right: '0px',
    padding: '2vh 6vh',
    borderTopLeftRadius: '5vh',
    borderBottomRightRadius: '5vh',
    outlineOffset: '1vh',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    color: '#fff',
    height: '100%',
    aspectRatio: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_ICON = ''.cssProps({
    boxSizing: 'border-box',
    height: '100%',
    aspectRatio: '1',
    borderRadius: '1vh',
  });

  //ML    END PROJECTS
  //ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML

  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML                                                                                                          ML ML
  //ML    ##    ##    ####     ######   ##    ##  ########  #######   #######     ####    ###   ##  ##    ##    ML ML
  //ML    ##    ##   ##  ##   ##    ##  ##   ##   ##        ##    ##  ##    ##   ##  ##   ####  ##  ##   ##     ML ML
  //ML    ##    ##  ##    ##  ##        ##  ##    ##        ##    ##  ##    ##  ##    ##  ## ## ##  ##  ##      ML ML
  //ML    ########  ########  ##        ######    ######    #######   #######   ########  ##  ####  ######      ML ML
  //ML    ##    ##  ##    ##  ##        ##   ##   ##        ##    ##  ##    ##  ##    ##  ##   ###  ##   ##     ML ML
  //ML    ##    ##  ##    ##  ##    ##  ##    ##  ##        ##    ##  ##    ##  ##    ##  ##    ##  ##    ##    ML ML
  //ML    ##    ##  ##    ##   ######   ##    ##  ########  ##    ##  ##    ##  ##    ##  ##    ##  ##    ##    ML ML
  //ML                                                                                                          ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML
  //ML
  //ML
  //ML

  //  /HACKERRANK/hackerrank.organism.ts
  e.HACKERRANK_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    listStyle: 'none',
    // padding: '5vw 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'honeydew',
    minHeight: '100vh',
    maxHeight: '100vh',
    height: '100vh',
    width: '100%',
    marginBlock: '0px',
    paddingInline: '0px',
    overflowX: 'scroll',
    position: 'relative',
  });

  //  /HACKERRANK/hackerrank.organism.ts
  e.HACKERRANK_PROFILE_LINK_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    color: '#ccc',
    backgroundColor: '#c92a2a',
    boxShadow: '2.4rem 2.4rem 4.8rem rgba(0, 0, 0, 0.3)',
    outline: '2px solid #0FF',
    position: 'absolute',
    right: '4vh',
    bottom: '3vh',
    textDecoration: 'none',
    fontSize: '3vh',
    padding: '1vh 4vh',
    borderRadius: '2vh',
    fontWeight: '600',
    outlineOffset: '1vh',
  });

  //  /REUSABLE/frame.organims.ts
  e.HACKERRANK_SECTION_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    // backgroundColor: 'aquamarine',
    width: '100%',
    height: '50vh',
    minHeight: '50vh',
    maxHeight: '50vh',
    padding: '3vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  });

  //  /REUSABLE/frame.organims.ts
  e.HACKERRANK_SECTION_TITLE = ''.cssProps({
    boxSizing: 'border-box',
    color: '#444',
    marginBlock: '0px',
    fontSize: '5vh',
    fontWeight: '500',
  });

  //  /REUSABLE/frame.organims.ts
  e.HACKERRANK_SECTION_UL = ''.cssProps({
    boxSizing: 'border-box',
    listStyle: 'none',
    marginBlock: '0px',
    paddingInline: '0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    columnGap: '3vh',
    // alignSelf: 'flex-end',
    padding: '2vh 0',
  });

  //  /REUSABLE/card.molecule.ts
  e.HACKERRANK_CARD_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    boxShadow: '0px 0px 4.8rem rgba(0, 0, 0, 0.1)',
    height: '35vh',
    aspectRatio: '0.7',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    rowGap: '2vh',
    padding: '2vh 1vh',
    backgroundColor: '#fff',
  });

  //  /REUSABLE/card.molecule.ts
  e.HACKERRANK_CARD_IMAGE = ''.cssProps({
    boxSizing: 'border-box',
    height: '70%',
  });

  //  /REUSABLE/card.molecule.ts
  e.HACKERRANK_CARD_TITLE = ''.cssProps({
    boxSizing: 'border-box',
    color: '#555',
    marginBlock: '0px',
    fontSize: '3vh',
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: '1.2',
  });

  //ML    END HACKERRANK
  //ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML

  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML                                                                                                          ML ML
  //ML                        ######   ##    ##  ####  ##        ##         ######                              ML ML
  //ML                       ##    ##  ##   ##    ##   ##        ##        ##    ##                             ML ML
  //ML                       ##        ##  ##     ##   ##        ##        ##                                   ML ML
  //ML                        ######   ######     ##   ##        ##         ######                              ML ML
  //ML                             ##  ##   ##    ##   ##        ##              ##                             ML ML
  //ML                       ##    ##  ##    ##   ##   ##        ##        ##    ##                             ML ML
  //ML                        ######   ##    ##  ####  ########  ########   ######                              ML ML
  //ML                                                                                                          ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML
  //ML
  //ML
  //ML

  e.SKILLS_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    backgroundColor: 'honeydew',
    // listStyle: 'none',
    // padding: '5vw 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    columnGap: '5vh',
    minHeight: '100vh',
    maxHeight: '100vh',
    height: '100vh',
    width: '100%',
    marginBlock: '0px',
    paddingInline: '0px',
    paddingLeft: '3vh',
    overflowX: 'scroll',
    // rowGap: '5vw',
    // minHeight: '100%',
    // maxHeight: '100%',
    // width: '100vw',
    // marginBlock: '0px',
    // paddingInline: '0px',
    // overflowY: 'scroll',
  });

  //  /REUSABLE/frame.organims.ts
  e.SKILLS_SECTION_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    // width: 'inherit',
    // width: '20vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    columnGap: '2vh',
    paddingLeft: '1vh',
    boxShadow: '0px 0px 4.8rem rgba(0, 0, 0, 0.1)',
    // backgroundColor: '#eee',
    // flexWrap: 'wrap',
    // alignItems: 'center',
  });

  //  /REUSABLE/frame.organims.ts
  e.SKILLS_SECTION_TITLE = ''.cssProps({
    boxSizing: 'border-box',
    color: '#444',
    writingMode: 'vertical-lr',
    textOrientation: 'upright',
    wordSpacing: '0.1',
    textTransform: 'uppercase',
    // backgroundColor: 'wheat',
    // flexGrow: 1,
    textAlign: 'center',
    marginBlock: '0px',
    fontSize: '3vh',
    fontWeight: '600',
    // backgroundColor: '#ddd',
  });

  //  /REUSABLE/frame.organims.ts
  e.SKILLS_SECTION_UL = ''.cssProps({
    boxSizing: 'border-box',
    listStyle: 'none',
    marginBlock: '0px',
    paddingInline: '0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flexGrow: 1,
    gap: '2vh',
    padding: '2vh',
    width: '40vh',
    overflowX: 'scroll',
  });

  //  /REUSABLE/card.molecule.ts
  e.SKILLS_CARD_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    boxShadow: '0px 0px 4.8rem rgba(0, 0, 0, 0.1)',
    height: '30vh',
    aspectRatio: '0.7',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: '1vh',
    padding: '1vh',
    position: 'relative',
    backgroundColor: '#fff',
  });

  //  /REUSABLE/card.molecule.ts
  e.SKILLS_CARD_IMAGE = ''.cssProps({
    boxSizing: 'border-box',
    width: '90%',
  });

  //  /REUSABLE/card.molecule.ts
  e.SKILLS_CARD_TITLE = ''.cssProps({
    boxSizing: 'border-box',
    color: '#555',
    marginBlock: '0px',
    fontSize: '3vh',
    fontWeight: '400',
    textAlign: 'center',
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    width: '100%',
    backgroundColor: 'transparent',
    backdropFilter: 'blur(10px)',
    lineHeight: '1',
  });

  //ML    END SKILLS
  //ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML

  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML                                                                                                          ML ML
  //ML                 ######    ######   ###   ##  ########    ####     ######   ########                      ML ML
  //ML                ##    ##  ##    ##  ####  ##     ##      ##  ##   ##    ##     ##                         ML ML
  //ML                ##        ##    ##  ## ## ##     ##     ##    ##  ##           ##                         ML ML
  //ML                ##        ##    ##  ##  ####     ##     ########  ##           ##                         ML ML
  //ML                ##        ##    ##  ##   ###     ##     ##    ##  ##           ##                         ML ML
  //ML                ##    ##  ##    ##  ##    ##     ##     ##    ##  ##    ##     ##                         ML ML
  //ML                 ######    ######   ##    ##     ##     ##    ##   ######      ##                         ML ML
  //ML                                                                                                          ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML
  //ML
  //ML
  //ML

  // CONTACT/contact.organism.ts
  e.CONTACT_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: '3vh',
    backgroundColor: 'honeydew',
    minHeight: '100%',
    maxHeight: '100%',
    width: '100%',
    marginBlock: '0px',
    paddingInline: '0px',
    overflowX: 'scroll',
    padding: '5vh 3vh',
  });

  // CONTACT/contact.organism.ts
  e.CONTACT_FORM = ''.cssProps({
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    width: '60vh',
    minWidth: '60vh',
    maxWidth: '60vh',
    padding: '3.5vh',
    display: 'flex',
    borderRadius: '3.5vh',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    rowGap: '3vh',
  });

  // CONTACT/input-textarea.molecule.ts
  e.CONTACT_INPUT_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    rowGap: '1vh',
  });

  // CONTACT/input-textarea.molecule.ts
  e.CONTACT_INPUT_LABEL = ''.cssProps({
    boxSizing: 'border-box',
    color: '#555',
    display: 'block',
    fontSize: '3vh',
    margin: '0px',
    marginBlock: '0px',
    marginInline: '0px',
  });

  // CONTACT/contact.organism.data.ts
  e.CONTACT_INPUT_TEXT = ''.cssProps({
    boxSizing: 'border-box',
    color: '#111',
    outline: '1px solid #ccc',
    border: '1px solid #ccc',
    backgroundColor: 'lavender',
    fontFamily: 'sans-serif',
    padding: '1vh 2vh',
    fontSize: '3.5vh',
    borderRadius: '1vh',
    fontWeight: '300',
    transition: 'all 0.2s ease-in',
    width: '100%',
    margin: '0px',
    marginBlock: '0px',
    marginInline: '0px',
  });

  // CONTACT/contact.organism.data.ts
  e.CONTACT_TEXTAREA = ''.cssProps({
    boxSizing: 'border-box',
    outline: '1px solid #ccc',
    border: '1px solid #ccc',
    color: '#111',
    fontFamily: 'sans-serif',
    padding: '1vh 2vh',
    fontSize: '3.5vh',
    borderRadius: '1vh',
    fontWeight: '300',
    transition: 'all 0.2s ease-in',
    width: '100%',
    margin: '0px',
    marginBlock: '0px',
    marginInline: '0px',
    resize: 'none',
    backgroundColor: 'lavender',
  });

  // CONTACT/contact.organism.ts
  e.CONTACT_BUTTON = ''.cssProps({
    boxSizing: 'border-box',
    padding: '1vh 2vh',
    fontSize: '4vh',
    borderRadius: '1vh',
    outline: '1px solid #ccc',
    border: 'transparent',
    fontWeight: '600',
    color: 'rgba(240, 246, 252, 0.5)',
    backgroundColor: 'rgba(35, 134, 54, 0.6)',
  });

  e.CONTACT_FOOTER_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    backgroundColor: '#000',
    // width: '50%',
    // minWidth: '50%',
    // maxWidth: '50%',
    alignSelf: 'flex-end',
    padding: '3vh 2vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    rowGap: '3vh',
  });

  e.CONTACT_FOOTER_APP_RESERVED_RIGHTS = ''.cssProps({
    boxSizing: 'border-box',
    color: '#fff',
    fontSize: '3vh',
    fontWeight: '400',
    textAlign: 'center',
    marginBlock: '0px',
    marginInline: '0px',
  });

  e.CONTACT_FOOTER_APP_DESCRIPTION = ''.cssProps({
    boxSizing: 'border-box',
    color: '#fff',
    fontSize: '2vh',
    fontWeight: '300',
    marginBlock: '0px',
    marginInline: '0px',
    lineHeight: '1.2',
    textAlign: 'justify',
  });

  e.CONTACT_CODE_ANCHOR = ''.cssProps({
    boxSizing: 'border-box',
    color: 'deepskyblue',
  });

  //ML    END CONTACT
  //ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML
  //ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML ML

  return e;
}

// TODO: los header de las secciones en modo landscape van a ser verticales al lado derecho (letras en modo vertical), y el scroll de cada sección será horizontal
