import ThemeColor from '../color-themes.js';

export function mobilePortraitStyles(): ElementStyles {
  let e: ElementStyles = {};
  const CONTAINER_TRANSITION = 'all 0.3s ease-in-out';

  // HTML, BODY:

  // MAIN-HEADER:
  // HEADER:
  // e['main-header'] = ''.cssProperties(
  //   ['box-sizing', 'border-box'],
  //   ['display', 'flex'],
  //   ['flex-direction', 'row'],
  //   ['justify-content', 'space-between'],
  //   ['align-items', 'center'],
  //   // ['backdrop-filter', 'blur(10px],'],
  //   ['background-color', `${ThemeColor.colorMainDarker}`],
  //   ['background-color', 'transparent'],
  //   // ['box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5],'],
  //   ['min-height', '15vw'],
  //   ['width', '100vw'],
  //   ['position', 'fixed'],
  //   ['top', '0'],
  //   ['padding', '0 3vw'],
  //   ['z-index', '10']
  // );

  // // BUTTON HEADER:
  // e['main-header-button'] = ''.cssProperties(
  //   ['aspect-ratio', '1'],
  //   ['color', '#ccc'],
  //   ['display', 'flex'],
  //   ['box-shadow', '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.2)'],
  //   ['justify-content', 'flex-start'],
  //   ['align-items', 'center'],
  //   ['position', 'relative'],
  //   ['border', '2px solid #888'],
  //   ['background-color', `${ThemeColor.colorMainDark}`],
  //   ['background-color', 'transparent'],
  //   ['border-radius', '1rem'],
  //   ['height', `10vw`]
  // );

  // // e.MAIN_HEADER_BUTTON_XMARK_ICON_CONTAINER = ''.cssProps({
  // //   boxSizing: 'border-box',
  // //   aspectRatio: '1',
  // //   height: '8vw',
  // // });

  // // e.MAIN_HEADER_BUTTON_XMARK_ICON = ''.cssProps({
  // //   height: '100%',
  // //   width: '100%',
  // // });

  // // BARS - BUTTON HEADER:
  // e['main-header-button-bars'] = 'visible';

  // // BRAND HEADER:
  // e['main-header-brand'] = ''.cssProperties(
  //   // ['margin-block-start', '0'],
  //   // ['margin-block-end', '0'],
  //   ['font-weight', '500'],
  //   ['display', 'inline'],
  //   ['text-shadow', '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5)'],
  //   ['color', `#ccc`],
  //   ['z-index', '10'],
  //   // ['visibility', 'hidden'],
  //   ['font-size', `6vw`]
  // );

  // // MENU-NAV
  // e['main-header-nav'] = ''.cssProperties(
  //   ['box-sizing', 'border-box'],
  //   // ['box-shadow', '0 2.4rem 4.8rem rgba(255, 255, 255, 1],'],
  //   ['display', 'flex'],
  //   ['position', 'absolute'],
  //   ['left', '0'], // change to hidden,
  //   ['background-color', ThemeColor.colorMainDark],
  //   ['transition', 'all 0.3s ease-in-out'],
  //   ['flex-direction', 'column'],
  //   ['justify-content', 'flex-start'],
  //   ['align-items', 'center'],
  //   ['row-gap', `5vh`],
  //   ['padding', '12vh 0 0 0'],
  //   // ['border-bottom-right-radius', '3vw'],
  //   // ['border-top-right-radius', '3vw'],
  //   ['width', `100vw`],
  //   ['height', '100vh'],
  //   ['top', '0vh']
  //   // ['transform', 'translateX(-140%)']  // TODO: estado inicial
  // );

  // // MENU INFO:
  // e['main-header-nav-info'] = ''.cssProperties(
  //   ['box-sizing', 'border-box'],
  //   ['position', 'relative'],
  //   [
  //     'background-image',
  //     'url(https://res.cloudinary.com/aac-devs-data/image/upload/v1666998062/aac-website/info/cyber-3400789_1920_csolpx.jpg)',
  //   ],

  //   ['background-size', 'cover'],
  //   ['background-repeat', 'no-repeat'],
  //   ['background-position', 'center'],
  //   ['display', 'flex'],
  //   ['flex-direction', 'column'],
  //   ['justify-content', 'flex-start'],
  //   ['align-items', 'center'],
  //   ['width', `80vw`],
  //   ['aspect-ratio', '1.4'],
  //   ['padding-top', '8vw'],
  //   ['border-radius', '5vw']
  // );

  // e['main-header-nav-info-filter'] = ''.cssProperties(
  //   ['position', 'absolute'],
  //   ['bottom', '0'],
  //   ['left', '0'],
  //   ['height', '100%'],
  //   ['width', '100%'],
  //   ['opacity', '0.15'],
  //   ['background-color', '#000'],
  //   ['border-radius', '5vw']
  // );

  // e['main-header-nav-info-name'] = ''.cssProperties(
  //   ['margin', '0'],
  //   ['padding', '0'],
  //   ['font-weight', '500'],
  //   ['margin-block-start', '0px'],
  //   ['margin-block-end', '0px'],
  //   ['z-index', '10'],
  //   ['color', '#eee'],
  //   ['text-shadow', '0rem 0rem 2rem rgba(0, 255, 255, 1)'],
  //   ['font-size', '8vw']
  // );

  // e['main-header-nav-info-description'] = ''.cssProperties(
  //   ['margin', '0'],
  //   ['padding', '0'],
  //   ['z-index', '10'],
  //   ['font-weight', '400'],
  //   ['color', '#ee0'],
  //   ['margin-block-start', '0px'],
  //   ['margin-block-end', '0px'],
  //   ['text-shadow', '0rem 0rem 2rem rgba(0, 255, 255, 1)'],
  //   ['font-size', '5.5vw']
  // );

  // e['main-header-nav-info-jslogo'] = ''.cssProperties(
  //   ['aspect-ratio', '1'],
  //   [
  //     'background-image',
  //     'url(https://res.cloudinary.com/aac-devs-data/image/upload/v1663975560/aac-website/info/js_cgxlpb.png)',
  //   ],
  //   ['background-size', 'contain'],
  //   ['position', 'absolute'],
  //   ['height', '13vw'],
  //   ['border-radius', '1vw'],
  //   ['bottom', '4vw'],
  //   ['left', '4vw']
  // );

  // e['main-header-nav-info-linkedin'] = ''.cssProperties(
  //   ['color', '#fff'],
  //   ['position', 'absolute'],
  //   ['aspect-ratio', '1'],
  //   ['height', '10vw'],
  //   ['bottom', '4vw'],
  //   ['right', '4vw'],
  //   ['padding', '0rem 0.2rem']
  // );

  // e['main-header-nav-info-github'] = ''.cssProperties(
  //   ['color', '#fff'],
  //   ['position', 'absolute'],
  //   ['aspect-ratio', '1'],
  //   ['height', '10vw'],
  //   ['bottom', '4vw'],
  //   ['right', '4vw'],
  //   ['padding', '0rem 0.2rem'],
  //   ['transform', 'translateY(-140%)']
  // );

  // // MENU UL:
  // e['main-header-nav-ul'] = ''.cssProperties(
  //   ['box-sizing', 'border-box'],
  //   ['display', 'flex'],
  //   ['flex-direction', 'column'],
  //   ['width', `80vw`],
  //   ['margin', '0'],
  //   ['padding', '0'],
  //   ['list-style', 'none'],
  //   ['row-gap', '2.5vw'],
  //   ['justify-content', 'flex-start']
  // );
  // // ['width', 'inherit'],

  // e['main-header-nav-ul-li'] = ''.cssProperties(
  //   ['background-color', `${ThemeColor.colorMainDarker}`],
  //   ['border-radius', '5vw'],
  //   ['list-style', 'none']
  // );

  // e['main-header-nav-ul-li-anchor'] = ''.cssProperties(
  //   ['box-sizing', 'border-box'],
  //   ['text-decoration', 'none'],
  //   ['flex-grow', '1'],
  //   ['display', 'flex'],
  //   ['flex-direction', 'row'],
  //   ['justify-content', 'flex-start'],
  //   ['align-items', 'center'],
  //   ['color', '#ccc'],
  //   ['font-size', '5vw'],
  //   ['margin', 'auto 0'],
  //   ['min-height', '10vw'],
  //   ['max-height', '10vw'],
  //   ['border-radius', '5vw'],
  //   ['padding', '1vw 2.5vw']
  // );

  // e['main-header-nav-ul-li-anchor-icon-container'] = ''.cssProperties(
  //   ['display', 'flex'],
  //   ['justify-content', 'center'],
  //   ['align-items', 'center'],
  //   ['font-size', '5vw'],
  //   ['margin', '0 3vw 0 1vw'],
  //   ['width', '7vw']
  // );

  // e['main-header-nav-ul-li-anchor-icon'] = ''.cssProperties(['height', '100%'], ['width', '100%']);

  // // SECTIONS:
  // e.sections = ''.cssProperties(
  //   ['background-color', `#fff`],
  //   ['margin-bottom', '10vh'],
  //   ['box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)'],
  //   ['background-position', 'center']
  // );

  // e['sections-header'] = ''.cssProperties(
  //   ['box-sizing', 'border-box'],
  //   ['height', '15vw'],
  //   ['background-color', 'transparent'],
  //   ['background-color', `${ThemeColor.colorMainDarker}`],
  //   ['opacity', '0.9'],
  //   ['box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)'],
  //   ['display', 'flex'],
  //   ['flex-direction', 'row'],
  //   ['justify-content', 'flex-start'],
  //   ['align-items', 'center'],
  //   ['column-gap', '1vw'],
  //   ['position', 'sticky'],
  //   ['padding', '0 0 0 15vw'],
  //   ['z-index', '1'],
  //   ['top', '0vh']
  // );

  // e['sections-header-title'] = ''.cssProperties(['font-weight', '400'], ['color', `#fff`], ['font-size', '5vw']);

  // e['sections-header-icon'] = ''.cssProperties(
  //   ['display', 'flex'],
  //   ['color', `#fff`],
  //   ['justify-content', 'center'],
  //   ['align-items', 'center'],
  //   ['font-size', '5vw'],
  //   ['margin', '0 3vw 0 1vw'],
  //   ['width', '7vw']
  // );

  // e['project-section-container'] = ''.cssProps({
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'space-between',
  //   height: 'inherit',
  // });

  // e['project-section-ul'] = ''.cssProps({
  //   position: 'relative',
  //   height: '100%',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',
  //   rowGap: '5vw',
  //   padding: '5vw 0',
  //   marginBlockStart: '0',
  //   marginBlockEnd: '0',
  //   overflowX: 'scroll',
  //   listStyle: 'none',
  //   opacity: 1,
  // });

  // e['project-section-footer'] = ''.cssProperties(
  //   ['font-size', '5vw'],
  //   ['color', '#fff'],
  //   ['height', '5vh'],
  //   ['background-color', 'orange']
  // );

  // e['project-section-footer'] = ''.cssProps({
  //   fontSize: '5vw',
  //   color: '#fff',
  //   height: '5vh',
  //   margin: '5vw',
  //   backgroundColor: 'orange',
  // });

  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP                                                                                                          MP MP
  //MP       ##    ##  ########  ####     ###  ##                  #######    ######   #######   ##     #       MP MP
  //MP       ##    ##     ##     ## ##   # ##  ##                  ##    ##  ##    ##  ##    ##   ##   #        MP MP
  //MP       ##    ##     ##     ##  ## #  ##  ##                  ##    ##  ##    ##  ##    ##    ## #         MP MP
  //MP       ########     ##     ##   ##   ##  ##                  ########  ##    ##  ##    ##     ##          MP MP
  //MP       ##    ##     ##     ##        ##  ##                  ##    ##  ##    ##  ##    ##     ##          MP MP
  //MP       ##    ##     ##     ##        ##  ##                  ##    ##  ##    ##  ##    ##     ##          MP MP
  //MP       ##    ##     ##     ##        ##  ########            #######    ######   #######      ##          MP MP
  //MP                                                                                                          MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP
  //MP
  //MP
  //MP

  e.HTML = ''.cssProps({
    boxSizing: 'border-box',
    fontFamily: '"Poppins", sans-serif',
    height: '100%',
    margin: '0px',
    padding: '0px',
    position: 'relative',
    scrollBehavior: 'smooth',
    backgroundColor: '#888',
  });

  // e.body = ''.cssProperties(
  //   ['box-sizing', 'border-box'],
  //   ['padding', '0'],
  //   ['margin', '0'],
  //   // ['background-color', '#aa0'],
  //   ['min-height', '100%'],
  //   ['position', 'relative']
  // );

  e.BODY = ''.cssProps({
    boxSizing: 'border-box',
    padding: '0px',
    margin: '0px',
    minHeight: '100%',
    position: 'relative',
  });

  //MP    END HTML / BODY
  //MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP

  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP                                                                                                          MP MP
  //MP                       ##    ##  ########    ####    #######   ########  #######                          MP MP
  //MP                       ##    ##  ##         ##  ##   ##    ##  ##        ##    ##                         MP MP
  //MP                       ##    ##  ##        ##    ##  ##    ##  ##        ##    ##                         MP MP
  //MP                       ########  ######    ########  ##    ##  ######    #######                          MP MP
  //MP                       ##    ##  ##        ##    ##  ##    ##  ##        ##    ##                         MP MP
  //MP                       ##    ##  ##        ##    ##  ##    ##  ##        ##    ##                         MP MP
  //MP                       ##    ##  ########  ##    ##  #######   ########  ##    ##                         MP MP
  //MP                                                                                                          MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP
  //MP
  //MP
  //MP

  // /header/header.organism.ts
  e.HEADER_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    minHeight: '15vw',
    width: '100vw',
    position: 'fixed',
    top: '0',
    padding: '0 3vw',
    zIndex: '10',
  });

  // /header/header.organism.ts
  e.HEADER_BUTTON = ''.cssProps({
    boxSizing: 'border-box',
    // boxShadow: '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3)',
    boxShadow: '0.8rem 0.8rem 2rem rgba(0, 0, 0, 0.5)',
    aspectRatio: '1',
    color: '#ccc',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    border: '0px solid #888',
    // backgroundColor: `${ThemeColor.colorMainDarker}`,
    backgroundColor: 'transparent',
    borderRadius: '1vw',
    // height: '10vw',
    padding: '0.8vw',
  });

  // /header/header.organism.ts
  e.HEADER_BUTTON_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    aspectRatio: '1',
    height: '8vw',
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
    fontWeight: '500',
    display: 'inline',
    textShadow: '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5)',
    color: '#ccc',
    zIndex: '10',
    fontSize: '6vw',
    marginBlock: '0px',
  });

  //MP    END HEADER
  //MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP

  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP                                                                                                          MP MP
  //MP                                    ###     ##    ####    ##    ##                                        MP MP
  //MP                                    ####    ##   ##  ##   ##    ##                                        MP MP
  //MP                                    ## ##   ##  ##    ##  ##    ##                                        MP MP
  //MP                                    ##  ##  ##  ########  ##    ##                                        MP MP
  //MP                                    ##   ## ##  ##    ##  ##    ##                                        MP MP
  //MP                                    ##    ####  ##    ##   ##  ##                                         MP MP
  //MP                                    ##     ###  ##    ##    ####                                          MP MP
  //MP                                                                                                          MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP
  //MP
  //MP
  //MP

  // /nav/nav.organism.ts
  e.NAV = ''.cssProps({
    boxSizing: 'border-box',
    // border: '1px solid #aaa',
    // padding: '5vw',

    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // rowGap: '5vh',

    position: 'absolute',
    left: '0px',
    top: '15vw',

    backgroundColor: 'transparent',
    // boxShadow: '0px 2.4rem 4.8rem rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(10px)',

    transition: CONTAINER_TRANSITION,
    borderBottomRightRadius: '3vw',
    borderTopRightRadius: '3vw',
    transform: 'translateX(-1400%)',
  });

  // /nav/molecules/ul.molecule.ts
  e.NAV_UL = ''.cssProps({
    boxSizing: 'border-box',
    listStyle: 'none',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    rowGap: '4vw',

    padding: '4vw 4.5vw 4vw 4vw',
    marginBlock: '0px',
  });

  // /nav/nav.organism.data.ts
  e.NAV_LI = ''.cssProps({
    boxSizing: 'border-box',
    borderRadius: '2vw',
    minHeight: '10vw',
    minWidth: '10vw',
    maxHeight: '10vw',
    maxWidth: '10vw',
    backgroundColor: `rgba(08, 49, 52, 1)`,
    // boxShadow: '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3)',
    // boxShadow: '0.5rem 0.5rem 1rem rgba(127, 127, 127, 0.8)',
    boxShadow: '0.5rem 0.5rem 1rem rgba(0, 127, 127, 0.8)',
  });

  // /nav/nav.organism.data.ts
  e.NAV_ANCHOR = ''.cssProps({
    // display: 'block',
    boxSizing: 'border-box',
    textDecoration: 'none',
    color: '#aaa',
    fontSize: '5vw',
    // padding: '1vw 1vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '2vw',
    minHeight: '10vw',
    minWidth: '10vw',
    maxHeight: '10vw',
    maxWidth: '10vw',
    // height: 'inherit',
    // aspectRatio: '1',
  });

  // /nav/nav.organism.data.ts
  e.NAV_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '5vw',
    // width: '7vw',
    height: '70%',
    width: '70%',
  });

  // /nav/nav.organism.data.ts
  e.NAV_ICON = ''.cssProps({
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
    borderRadius: '1vw',
  });

  //MP    END NAV
  //MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP

  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP                                                                                                          MP MP
  //MP                                ####  ###   ##  ########   ######                                         MP MP
  //MP                                 ##   ####  ##  ##        ##    ##                                        MP MP
  //MP                                 ##   ## ## ##  ##        ##    ##                                        MP MP
  //MP                                 ##   ##  ####  ######    ##    ##                                        MP MP
  //MP                                 ##   ##   ###  ##        ##    ##                                        MP MP
  //MP                                 ##   ##    ##  ##        ##    ##                                        MP MP
  //MP                                ####  ##    ##  ##         ######                                         MP MP
  //MP                                                                                                          MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP
  //MP
  //MP
  //MP

  // /info/info.organism.ts
  e.INFO_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    position: 'fixed',
    transition: CONTAINER_TRANSITION,
    bottom: '0px',
    right: '0px',
    transform: 'translateY(1000%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '60vw',
    padding: '2vw 4vw',
    borderTopLeftRadius: '5vw',
    backdropFilter: 'blur(10px)',
  });

  // /info/info.organism.ts
  e.INFO_NAME = ''.cssProps({
    boxSizing: 'border-box',
    margin: '0px',
    padding: '0px',
    marginBlock: '0px',
    fontWeight: '500',
    fontSize: '6.5vw',
    color: 'orangered',
    zIndex: '10',
    textShadow: '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.8)',
    // textShadow: '0.5rem 0.5rem 1rem rgba(125, 127, 127, 0.8)',
  });

  // /info/info.organism.ts
  e.INFO_DESCRIPTION = ''.cssProps({
    boxSizing: 'border-box',
    margin: '0px',
    padding: '0px',
    marginBlock: '0px',
    fontWeight: '400',
    fontSize: '4.5vw',
    color: 'orangered',
    zIndex: '10',
    textShadow: '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.8)',
    // textShadow: '0.5rem 0.5rem 1rem rgba(127, 127, 127, 0.8)',
  });

  //MP    END INFO
  //MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP

  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP                                                                                                          MP MP
  //MP                           ######    ######    ######   ####    ####    ##                                MP MP
  //MP                          ##    ##  ##    ##  ##    ##   ##    ##  ##   ##                                MP MP
  //MP                          ##        ##    ##  ##         ##   ##    ##  ##                                MP MP
  //MP                           ######   ##    ##  ##         ##   ########  ##                                MP MP
  //MP                                ##  ##    ##  ##         ##   ##    ##  ##                                MP MP
  //MP                          ##    ##  ##    ##  ##    ##   ##   ##    ##  ##                                MP MP
  //MP                           ######    ######    ######   ####  ##    ##  ########                          MP MP
  //MP                                                                                                          MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP
  //MP
  //MP
  //MP

  // /info/social.organism.ts
  e.SOCIAL_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',

    position: 'fixed',
    left: '0px',
    bottom: '5vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    rowGap: '3vw',

    // backgroundColor: 'yellow',
    // boxShadow: '0px 2.4rem 4.8rem rgba(0, 0, 0, 0.3)',
    // padding
    padding: '3vw 3.5vw 3vw 3vw',

    transition: CONTAINER_TRANSITION,
    borderBottomRightRadius: '3vw',
    borderTopRightRadius: '3vw',
    transform: 'translateX(-1400%)',
    backdropFilter: 'blur(10px)',
  });

  // /info/social.organism.ts
  e.SOCIAL_GITHUB_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    height: '9vw',
    aspectRatio: '1',
    color: '#000',
    borderRadius: '1vw',
    // padding: '0.2vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // boxShadow: '0.8rem 0.8rem 2rem rgba(0, 0, 0, 0.5)',
    // boxShadow: '0.5rem 0.5rem 1rem rgba(127, 127, 127, 0.8)',
    boxShadow: '0.5rem 0.5rem 1rem rgba(0, 127, 127, 0.8)',
  });

  // /info/social.organism.ts
  e.SOCIAL_LINKEDIN_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    height: '9vw',
    aspectRatio: '1',
    color: 'mediumblue',
    borderRadius: '1vw',
    // padding: '0.2vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // boxShadow: '0.8rem 0.8rem 2rem rgba(0, 0, 0, 0.5)',
    // boxShadow: '0.5rem 0.5rem 1rem rgba(127, 127, 127, 0.8)',
    boxShadow: '0.5rem 0.5rem 1rem rgba(0, 127, 127, 0.8)',
  });

  // /info/social.organism.ts
  e.SOCIAL_ICON = ''.cssProps({
    height: '100%',
    aspectRatio: '1',
    boxSizing: 'border-box',
  });

  //MP    END
  //MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP

  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP                                                                                                          MP MP
  //MP                          ########  #######     ####    ####     ###  ########                            MP MP
  //MP                          ##        ##    ##   ##  ##   ## ##   # ##  ##                                  MP MP
  //MP                          ##        ##    ##  ##    ##  ##  ## #  ##  ##                                  MP MP
  //MP                          ######    #######   ########  ##   ##   ##  ######                              MP MP
  //MP                          ##        ##    ##  ##    ##  ##        ##  ##                                  MP MP
  //MP                          ##        ##    ##  ##    ##  ##        ##  ##                                  MP MP
  //MP                          ##        ##    ##  ##    ##  ##        ##  ########                            MP MP
  //MP                                                                                                          MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP
  //MP
  //MP
  //MP

  // sections/sections.ts
  e.FRAMES_CONTAINER = ''.cssProps({
    // backgroundColor: 'lavender',
    width: '100vw',
    height: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    columnGap: '5vw',
    scrollBehavior: 'smooth',
    overflowX: 'scroll',
    transition: CONTAINER_TRANSITION,
  });

  // /sections/section-frame.ts
  e.FRAME_SINGLE_CONTAINER = ''.cssProps({
    // backgroundColor: `${ThemeColor.colorMainNormal}`,
    backgroundColor: '#fff',
    width: '100vw',
    height: '100vh',
    boxSizing: 'border-box',
    flexShrink: '0',
    fontSize: '5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  });

  // /sections/section-frame.ts
  e.FRAME_HEADER_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    height: '15vw',
    minHeight: '15vw',
    width: '100vw',
    backgroundColor: `rgba(08, 49, 52, 0.8)`,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: '3vw',
    paddingLeft: '16vw',
    position: 'sticky',
    top: '0px',
  });

  // /sections/section-frame.ts
  e.FRAME_HEADER_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    height: '50%',
    aspectRatio: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '5vw',
    color: '#ccc',
  });

  // /sections/section-frame.ts
  e.FRAME_HEADER_ICON = ''.cssProps({
    height: '100%',
    textShadow: '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5)',
    aspectRatio: '1',
    boxSizing: 'border-box',
    borderRadius: '1vw',
  });

  // /sections/section-frame.ts
  e.FRAME_HEADER_TEXT = ''.cssProps({
    boxSizing: 'border-box',
    fontWeight: '500',
    display: 'inline',
    textShadow: '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5)',
    color: '#ccc',
    zIndex: '10',
    fontSize: '5.5vw',
    marginBlock: '0px',
  });

  // /sections/section-frame.ts
  e.FRAME_BODY = ''.cssProps({
    flexGrow: 1,
    minHeight: '85vw', // TODO: revisar esta parte
  });

  //MP    END FRAME
  //MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP

  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP                                                                                                          MP MP
  //MP            #######   #######    ######         ##  ########   ######   ########   ######                 MP MP
  //MP            ##    ##  ##    ##  ##    ##        ##  ##        ##    ##     ##     ##    ##                MP MP
  //MP            ##    ##  ##    ##  ##    ##        ##  ##        ##           ##     ##                      MP MP
  //MP            #######   #######   ##    ##        ##  ######    ##           ##      ######                 MP MP
  //MP            ##        ##    ##  ##    ##        ##  ##        ##           ##           ##                MP MP
  //MP            ##        ##    ##  ##    ##  ##    ##  ##        ##    ##     ##     ##    ##                MP MP
  //MP            ##        ##    ##   ######    ######   ########   ######      ##      ######                 MP MP
  //MP                                                                                                          MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP
  //MP
  //MP
  //MP

  //  /PROJECTS/project.organism.ts
  e.PROJECTS_UL = ''.cssProps({
    boxSizing: 'border-box',
    listStyle: 'none',
    padding: '5vw 0px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    rowGap: '5vw',
    // rowGap: '4vw',
    backgroundColor: 'honeydew',
    minHeight: '100%',
    maxHeight: '100%',
    width: '100vw',
    // padding: '4vw 4.5vw 4vw 4vw',
    marginBlock: '0px',
    paddingInline: '0px',
    overflowY: 'scroll',
    // overflowY: 'scroll',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    backgroundColor: '#000',
    width: '80vw',
    aspectRatio: '1',
    flexShrink: '0',
    borderRadius: '5vw',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: 'top',
    backgroundPositionX: 'center',
    position: 'relative',
    boxShadow: '0px 2.4rem 4.8rem rgba(0, 0, 0, 0.5)',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_FILTER = ''.cssProps({
    backgroundColor: '#000',
    position: 'absolute',
    borderRadius: '5vw',
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
    zIndex: '0',
    borderRadius: '5vw',
    top: '0px',
    left: '0px',
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_TITLE = ''.cssProps({
    boxSizing: 'border-box',
    marginBlock: '0px',
    textShadow: '0 0 1rem rgba(255, 255, 255, 1)',
    letterSpacing: '0.2rem',
    fontWeight: '500',
    fontSize: '6vw',
    color: '#fff',
    padding: '2vw 0px',
    textAlign: 'center',
    zIndex: '10',
    borderBottom: '1px solid #fff',
    borderTopLeftRadius: '5vw',
    borderTopRightRadius: '5vw',
    backdropFilter: 'blur(10px)',
    position: 'relative',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_DATE = ''.cssProps({
    boxSizing: 'border-box',
    position: 'absolute',
    marginBlock: '0px',
    bottom: '0px',
    right: '2vw',
    transform: 'translateY(100%)',
    fontWeight: '400',
    fontSize: '4vw',
    color: '#000',
    padding: '0.2vw 2vw',
    backgroundColor: 'goldenrod',
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
    rowGap: '3vw',
    width: '100%',
    padding: '3vw 1vw',
    backdropFilter: 'blur(10px)',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_DESCRIPTION_TEXT = ''.cssProps({
    boxSizing: 'border-box',
    fontSize: '4vw',
    fontWeight: '400',
    marginBlock: '0px',
    color: '#fff',
    textShadow: '0 0 1rem rgba(255, 255, 255, 1)',
    lineHeight: '1.1',
    textAlign: 'center',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_GITHUB_ANCHOR = ''.cssProps({
    height: '8vw',
    aspectRatio: '1',
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    backgroundColor: '#c92a2a',
    padding: '2vw 6vw',
    borderTopRightRadius: '5vw',
    borderBottomLeftRadius: '5vw',
    boxShadow: '0px -2.4rem 4.8rem rgba(0, 255, 255, 0.5)',
    borderRight: '1px solid #fff',
    borderTop: '1px solid #fff',
    outlineOffset: '1vw',
    outline: '2px solid #0FF',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_APP_ANCHOR = ''.cssProps({
    height: '8vw',
    aspectRatio: '1',
    position: 'absolute',
    bottom: '0px',
    right: '0px',
    backgroundColor: '#c92a2a',
    padding: '2vw 6vw',
    borderTopLeftRadius: '5vw',
    borderBottomRightRadius: '5vw',
    boxShadow: '0px -2.4rem 4.8rem rgba(0, 255, 255, 0.5)',
    borderLeft: '1px solid #fff',
    borderTop: '1px solid #fff',
    outlineOffset: '1vw',
    outline: '2px solid #0FF',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    height: '100%',
    aspectRatio: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_ICON = ''.cssProps({
    height: '100%',
    aspectRatio: '1',
    boxSizing: 'border-box',
    borderRadius: '1vw',
  });

  //MP    END PROJECTS
  //MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP

  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP                                                                                                          MP MP
  //MP    ##    ##    ####     ######   ##    ##  ########  #######   #######     ####    ###   ##  ##    ##    MP MP
  //MP    ##    ##   ##  ##   ##    ##  ##   ##   ##        ##    ##  ##    ##   ##  ##   ####  ##  ##   ##     MP MP
  //MP    ##    ##  ##    ##  ##        ##  ##    ##        ##    ##  ##    ##  ##    ##  ## ## ##  ##  ##      MP MP
  //MP    ########  ########  ##        ######    ######    #######   #######   ########  ##  ####  ######      MP MP
  //MP    ##    ##  ##    ##  ##        ##   ##   ##        ##    ##  ##    ##  ##    ##  ##   ###  ##   ##     MP MP
  //MP    ##    ##  ##    ##  ##    ##  ##    ##  ##        ##    ##  ##    ##  ##    ##  ##    ##  ##    ##    MP MP
  //MP    ##    ##  ##    ##   ######   ##    ##  ########  ##    ##  ##    ##  ##    ##  ##    ##  ##    ##    MP MP
  //MP                                                                                                          MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP
  //MP
  //MP
  //MP

  //  /HACKERRANK/hackerrank.organism.ts
  e.HACKERRANK_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    listStyle: 'none',
    padding: '5vw 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    rowGap: '5vw',
    backgroundColor: 'honeydew',
    minHeight: '100%',
    maxHeight: '100%',
    width: '100vw',
    marginBlock: '0px',
    paddingInline: '0px',
    overflowY: 'scroll',
    // overflowY: 'scroll',
  });

  //  /HACKERRANK/hackerrank.organism.ts
  e.HACKERRANK_PROFILE_LINK_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    textDecoration: 'none',
    fontSize: '5vw',
    color: '#ccc',
    padding: '1vw 4vw',
    borderRadius: '2vw',
    fontWeight: '600',
    backgroundColor: '#c92a2a',
    boxShadow: '2.4rem 2.4rem 4.8rem rgba(0, 0, 0, 0.3)',
    outlineOffset: '1vw',
    outline: '2px solid #0FF',
  });

  //  /REUSABLE/frame.organims.ts
  e.HACKERRANK_SECTION_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    width: '95vw',
  });

  //  /REUSABLE/frame.organims.ts
  e.HACKERRANK_SECTION_TITLE = ''.cssProps({
    boxSizing: 'border-box',
    marginBlock: '0px',
    // backgroundColor: 'lime',
    fontSize: '7vw',
    color: '#444',
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
    flexWrap: 'wrap',
    gap: '2vw',
    padding: '2vw 0',
  });

  //  /REUSABLE/card.molecule.ts
  e.HACKERRANK_CARD_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    width: '30vw',
    boxShadow: '0px 0px 4.8rem rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    rowGap: '1vw',
    padding: '1vw',
    backgroundColor: '#fff',
  });

  //  /REUSABLE/card.molecule.ts
  e.HACKERRANK_CARD_IMAGE = ''.cssProps({
    boxSizing: 'border-box',
    width: '80%',
  });

  //  /REUSABLE/card.molecule.ts
  e.HACKERRANK_CARD_TITLE = ''.cssProps({
    boxSizing: 'border-box',
    marginBlock: '0px',
    fontSize: '4vw',
    fontWeight: '400',
    color: '#555',
    textAlign: 'center',
    lineHeight: '1.2',
  });

  //MP    END HACKERRANK
  //MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP

  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP                                                                                                          MP MP
  //MP                        ######   ##    ##  ####  ##        ##         ######                              MP MP
  //MP                       ##    ##  ##   ##    ##   ##        ##        ##    ##                             MP MP
  //MP                       ##        ##  ##     ##   ##        ##        ##                                   MP MP
  //MP                        ######   ######     ##   ##        ##         ######                              MP MP
  //MP                             ##  ##   ##    ##   ##        ##              ##                             MP MP
  //MP                       ##    ##  ##    ##   ##   ##        ##        ##    ##                             MP MP
  //MP                        ######   ##    ##  ####  ########  ########   ######                              MP MP
  //MP                                                                                                          MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP
  //MP
  //MP
  //MP

  e.SKILLS_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    listStyle: 'none',
    padding: '5vw 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    rowGap: '5vw',
    backgroundColor: 'honeydew',
    minHeight: '100%',
    maxHeight: '100%',
    width: '100vw',
    marginBlock: '0px',
    paddingInline: '0px',
    overflowY: 'scroll',
  });

  //  /REUSABLE/frame.organims.ts
  e.SKILLS_SECTION_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    width: '95vw',
  });

  //  /REUSABLE/frame.organims.ts
  e.SKILLS_SECTION_TITLE = ''.cssProps({
    boxSizing: 'border-box',
    marginBlock: '0px',
    fontSize: '7vw',
    color: '#444',
    fontWeight: '500',
  });

  //  /REUSABLE/frame.organims.ts
  e.SKILLS_SECTION_UL = ''.cssProps({
    boxSizing: 'border-box',
    listStyle: 'none',
    marginBlock: '0px',
    paddingInline: '0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: '2vw',
    padding: '2vw 0',
  });

  //  /REUSABLE/card.molecule.ts
  e.SKILLS_CARD_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    width: '30vw',
    aspectRatio: '0.8',
    boxShadow: '0px 0px 4.8rem rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: '1vw',
    padding: '1vw',
    position: 'relative',
    backgroundColor: '#fff',
  });

  //  /REUSABLE/card.molecule.ts
  e.SKILLS_CARD_IMAGE = ''.cssProps({
    boxSizing: 'border-box',
    width: '80%',
  });

  //  /REUSABLE/card.molecule.ts
  e.SKILLS_CARD_TITLE = ''.cssProps({
    boxSizing: 'border-box',
    marginBlock: '0px',
    fontSize: '4vw',
    fontWeight: '400',
    color: '#555',
    textAlign: 'center',
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    width: '100%',
    backgroundColor: 'transparent',
    backdropFilter: 'blur(10px)',
    lineHeight: '1',
  });

  //MP    END SKILLS
  //MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP

  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP                                                                                                          MP MP
  //MP                 ######    ######   ###   ##  ########    ####     ######   ########                      MP MP
  //MP                ##    ##  ##    ##  ####  ##     ##      ##  ##   ##    ##     ##                         MP MP
  //MP                ##        ##    ##  ## ## ##     ##     ##    ##  ##           ##                         MP MP
  //MP                ##        ##    ##  ##  ####     ##     ########  ##           ##                         MP MP
  //MP                ##        ##    ##  ##   ###     ##     ##    ##  ##           ##                         MP MP
  //MP                ##    ##  ##    ##  ##    ##     ##     ##    ##  ##    ##     ##                         MP MP
  //MP                 ######    ######   ##    ##     ##     ##    ##   ######      ##                         MP MP
  //MP                                                                                                          MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP
  //MP
  //MP
  //MP

  // CONTACT/contact.organism.ts
  e.CONTACT_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    listStyle: 'none',
    paddingTop: '5vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    rowGap: '5vw',
    backgroundColor: 'honeydew',
    minHeight: '100%',
    maxHeight: '100%',
    width: '100vw',
    marginBlock: '0px',
    paddingInline: '0px',
    overflowY: 'scroll',
  });

  // CONTACT/contact.organism.ts
  e.CONTACT_FORM = ''.cssProps({
    boxSizing: 'border-box',
    width: '90vw',
    // margin: 'auto',
    // marginTop: '5vw',
    // marginBottom: '0px',
    backgroundColor: '#fff',
    // boxShadow: '0px 0px 4.8rem rgba(0, 0, 0, 0.1)',
    border: '1px solid #ccc',
    padding: '4vw',
    display: 'flex',
    borderRadius: '4vw',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    rowGap: '4vw',
  });

  // CONTACT/input-textarea.molecule.ts
  e.CONTACT_INPUT_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    rowGap: '1vw',
  });

  // CONTACT/input-textarea.molecule.ts
  e.CONTACT_INPUT_LABEL = ''.cssProps({
    boxSizing: 'border-box',
    display: 'block',
    fontSize: '3vw',
    margin: '0px',
    marginBlock: '0px',
    marginInline: '0px',
    color: '#555',
  });

  // CONTACT/contact.organism.data.ts
  e.CONTACT_INPUT_TEXT = ''.cssProps({
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
    // height: '4vw',
    padding: '1vw 2vw',
    fontSize: '4vw',
    borderRadius: '1vw',
    // border: '1px solid rgb(225, 228, 232)',
    fontWeight: '300',
    color: '#111',
    // backgroundColor: 'lavender',
    transition: 'all 0.2s ease-in',
    // outlineColor: 'navy',
    outline: '1px solid #ccc',
    border: '1px solid #ccc',
    width: '100%',
    margin: '0px',
    marginBlock: '0px',
    marginInline: '0px',
    backgroundColor: 'lavender',
  });

  // CONTACT/contact.organism.data.ts
  e.CONTACT_TEXTAREA = ''.cssProps({
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
    // height: '4vw',
    padding: '1vw 2vw',
    fontSize: '4vw',
    borderRadius: '1vw',
    // border: '1px solid rgb(225, 228, 232)',
    fontWeight: '300',
    color: '#111',
    // backgroundColor: 'lavender',
    transition: 'all 0.2s ease-in',
    // outlineColor: 'navy',
    outline: '1px solid #ccc',
    border: '1px solid #ccc',
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
    // height: '4vw',
    padding: '1vw 2vw',
    fontSize: '4vw',
    borderRadius: '1vw',
    outline: '1px solid #ccc',
    border: 'transparent',
    fontWeight: '600',
    color: 'rgba(240, 246, 252, 0.5)',
    backgroundColor: 'rgba(35, 134, 54, 0.6)',
  });

  e.CONTACT_FOOTER_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    backgroundColor: '#000',
    alignSelf: 'stretch',
    padding: '3vw 2vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    rowGap: '3vw',
  });

  e.CONTACT_FOOTER_APP_RESERVED_RIGHTS = ''.cssProps({
    boxSizing: 'border-box',
    color: '#fff',
    fontSize: '3vw',
    fontWeight: '400',
    textAlign: 'center',
    marginBlock: '0px',
    marginInline: '0px',
  });

  e.CONTACT_FOOTER_APP_DESCRIPTION = ''.cssProps({
    boxSizing: 'border-box',
    color: '#fff',
    fontSize: '2vw',
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

  //MP    END CONTACT
  //MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP

  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP
  //MP            ##
  //MP            ##
  //MP            ##
  //MP            ##
  //MP            ##
  //MP            ##
  //MP            ##
  //MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP
  //MP
  //MP
  //MP

  //MP    END
  //MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP
  //MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP MP

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
