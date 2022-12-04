import ThemeColor from '../color-themes.js';

export function desktopStyles(): ElementStyles {
  let e: ElementStyles = {};
  const CONTAINER_TRANSITION = 'all 0.3s ease-in-out';

  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D                                                                                                         D D D
  //D D      ##    ##  ########  ####     ###  ##                  #######    ######   #######   ##     #       D D D
  //D D      ##    ##     ##     ## ##   # ##  ##                  ##    ##  ##    ##  ##    ##   ##   #        D D D
  //D D      ##    ##     ##     ##  ## #  ##  ##                  ##    ##  ##    ##  ##    ##    ## #         D D D
  //D D      ########     ##     ##   ##   ##  ##                  ########  ##    ##  ##    ##     ##          D D D
  //D D      ##    ##     ##     ##        ##  ##                  ##    ##  ##    ##  ##    ##     ##          D D D
  //D D      ##    ##     ##     ##        ##  ##                  ##    ##  ##    ##  ##    ##     ##          D D D
  //D D      ##    ##     ##     ##        ##  ########            #######    ######   #######      ##          D D D
  //D D                                                                                                         D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D
  //D D
  //D D
  //D D

  e.HTML = ''.cssProps({
    boxSizing: 'border-box',
    fontFamily: '"Poppins", sans-serif',
    height: '100%',
    margin: '0px',
    padding: '0px',
    position: 'relative',
    scrollBehavior: 'smooth',
    scrollPaddingTop: '8vw',
    backgroundColor: '#ccc',
  });

  e.BODY = ''.cssProps({
    boxSizing: 'border-box',
    padding: '0px',
    margin: '0px',
    minHeight: '100%',
    position: 'relative',
  });

  //D D    END HTML / BODY
  //D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D

  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D                                                                                                         D D D
  //D D                       ##    ##  ########    ####    #######   ########  #######                         D D D
  //D D                       ##    ##  ##         ##  ##   ##    ##  ##        ##    ##                        D D D
  //D D                       ##    ##  ##        ##    ##  ##    ##  ##        ##    ##                        D D D
  //D D                       ########  ######    ########  ##    ##  ######    #######                         D D D
  //D D                       ##    ##  ##        ##    ##  ##    ##  ##        ##    ##                        D D D
  //D D                       ##    ##  ##        ##    ##  ##    ##  ##        ##    ##                        D D D
  //D D                       ##    ##  ########  ##    ##  #######   ########  ##    ##                        D D D
  //D D                                                                                                         D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D
  //D D
  //D D
  //D D

  // /header/header.organism.ts
  e.HEADER_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'transparent',
    // backgroundColor: 'lime',
    backgroundColor: `rgba(08, 49, 52, 0.8)`,
    minHeight: '6vw',
    maxHeight: '6vw',
    height: '6vw',
    width: '100%',
    position: 'sticky',
    top: '0',
    padding: '0 3vw',
    zIndex: '10',
  });

  // /header/header.organism.ts
  e.HEADER_BUTTON = ''.cssProps({
    boxSizing: 'border-box',
    display: 'none',
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
    // display: 'inline',
    textShadow: '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5)',
    color: '#ccc',
    zIndex: '10',
    fontSize: '3vw',
    marginBlock: '0px',
  });

  //D D    END HEADER
  //D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D

  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D                                                                                                         D D D
  //D D                                    ###     ##    ####    ##    ##                                       D D D
  //D D                                    ####    ##   ##  ##   ##    ##                                       D D D
  //D D                                    ## ##   ##  ##    ##  ##    ##                                       D D D
  //D D                                    ##  ##  ##  ########  ##    ##                                       D D D
  //D D                                    ##   ## ##  ##    ##  ##    ##                                       D D D
  //D D                                    ##    ####  ##    ##   ##  ##                                        D D D
  //D D                                    ##     ###  ##    ##    ####                                         D D D
  //D D                                                                                                         D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D
  //D D
  //D D
  //D D

  // /nav/nav.organism.ts
  e.NAV = ''.cssProps({
    boxSizing: 'border-box',
    // position: 'absolute',
    // left: '0px',
    // top: '15vw',
    // backgroundColor: 'indigo',
    // backgroundColor: 'transparent',
    // backdropFilter: 'blur(10px)',
    // transition: CONTAINER_TRANSITION,
    // borderBottomRightRadius: '3vw',
    // borderTopRightRadius: '3vw',
    // transform: 'translateX(-1400%)',
  });

  // /nav/molecules/ul.molecule.ts
  e.NAV_UL = ''.cssProps({
    boxSizing: 'border-box',
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // rowGap: '4vw',
    columnGap: '2vw',
    // padding: '4vw 4.5vw 4vw 4vw',
    // marginBlock: '0px',
  });

  // /nav/nav.organism.data.ts
  e.NAV_LI = ''.cssProps({
    boxSizing: 'border-box',
    // borderRadius: '2vw',
    // minHeight: '10vw',
    // minWidth: '10vw',
    // maxHeight: '10vw',
    // maxWidth: '10vw',
    // backgroundColor: `rgba(08, 49, 52, 1)`,
    // boxShadow: '0.5rem 0.5rem 1rem rgba(0, 127, 127, 0.8)',
  });

  // /nav/nav.organism.data.ts
  e.NAV_ANCHOR = ''.cssProps({
    boxSizing: 'border-box',
    textDecoration: 'none',
    color: '#aaa',
    fontSize: '1.6vw',
    // backgroundColor: 'wheat',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '1vw',
    // borderRadius: '2vw',
    // minHeight: '10vw',
    // minWidth: '10vw',
    // maxHeight: '10vw',
    // maxWidth: '10vw',
  });

  // /nav/nav.organism.data.ts
  e.NAV_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // fontSize: '5vw',
    height: '2.2vw',
    width: '2.2vw',
  });

  // /nav/nav.organism.data.ts
  e.NAV_ICON = ''.cssProps({
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
    borderRadius: '0.3vw',
  });

  //D D   END NAV
  //D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D

  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D                                                                                                         D D D
  //D D                                ####  ###   ##  ########   ######                                        D D D
  //D D                                 ##   ####  ##  ##        ##    ##                                       D D D
  //D D                                 ##   ## ## ##  ##        ##    ##                                       D D D
  //D D                                 ##   ##  ####  ######    ##    ##                                       D D D
  //D D                                 ##   ##   ###  ##        ##    ##                                       D D D
  //D D                                 ##   ##    ##  ##        ##    ##                                       D D D
  //D D                                ####  ##    ##  ##         ######                                        D D D
  //D D                                                                                                         D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D
  //D D
  //D D
  //D D

  // /info/info.organism.ts
  e.INFO_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    position: 'fixed',
    // transition: CONTAINER_TRANSITION,
    bottom: '0px',
    right: '0px',
    // backgroundColor: 'rebeccapurple',
    // transform: 'translateY(1000%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    // width: '60vw',
    padding: '2vw 3vw',
    // borderTopLeftRadius: '5vw',
    // backdropFilter: 'blur(10px)',
  });

  // /info/info.organism.ts
  e.INFO_NAME = ''.cssProps({
    boxSizing: 'border-box',
    margin: '0px',
    padding: '0px',
    marginBlock: '0px',
    fontWeight: '500',
    fontSize: '2vw',
    color: '#333',
    zIndex: '10',
    textShadow: '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.8)',
  });

  // /info/info.organism.ts
  e.INFO_DESCRIPTION = ''.cssProps({
    boxSizing: 'border-box',
    margin: '0px',
    padding: '0px',
    marginBlock: '0px',
    fontWeight: '400',
    fontSize: '1.5vw',
    color: '#333',
    zIndex: '10',
    textShadow: '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.8)',
  });

  //D D    END INFO
  //D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D

  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D                                                                                                         D D D
  //D D                           ######    ######    ######   ####    ####    ##                               D D D
  //D D                          ##    ##  ##    ##  ##    ##   ##    ##  ##   ##                               D D D
  //D D                          ##        ##    ##  ##         ##   ##    ##  ##                               D D D
  //D D                           ######   ##    ##  ##         ##   ########  ##                               D D D
  //D D                                ##  ##    ##  ##         ##   ##    ##  ##                               D D D
  //D D                          ##    ##  ##    ##  ##    ##   ##   ##    ##  ##                               D D D
  //D D                           ######    ######    ######   ####  ##    ##  ########                         D D D
  //D D                                                                                                         D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D
  //D D
  //D D
  //D D

  // /info/social.organism.ts
  e.SOCIAL_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    position: 'fixed',
    left: '0px',
    bottom: '3vw',
    display: 'flex',
    // backgroundColor: 'lime',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    rowGap: '2vw',
    paddingLeft: '1vw',
    // padding: '3vw 3.5vw 3vw 3vw',
    // transition: CONTAINER_TRANSITION,
    // borderBottomRightRadius: '3vw',
    // borderTopRightRadius: '3vw',
    // transform: 'translateX(-1400%)',
    // backdropFilter: 'blur(10px)',
  });

  // /info/social.organism.ts
  e.SOCIAL_GITHUB_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    height: '4vw',
    aspectRatio: '1',
    color: '#000',
    borderRadius: '1vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxShadow: '0.5rem 0.5rem 1rem rgba(0, 127, 127, 0.8)',
  });

  // /info/social.organism.ts
  e.SOCIAL_LINKEDIN_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    height: '4vw',
    aspectRatio: '1',
    color: 'mediumblue',
    borderRadius: '1vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxShadow: '0.5rem 0.5rem 1rem rgba(0, 127, 127, 0.8)',
  });

  // /info/social.organism.ts
  e.SOCIAL_ICON = ''.cssProps({
    boxSizing: 'border-box',
    height: '100%',
    aspectRatio: '1',
  });

  //D D    END
  //D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D

  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D                                                                                                         D D D
  //D D                          ########  #######     ####    ####     ###  ########                           D D D
  //D D                          ##        ##    ##   ##  ##   ## ##   # ##  ##                                 D D D
  //D D                          ##        ##    ##  ##    ##  ##  ## #  ##  ##                                 D D D
  //D D                          ######    #######   ########  ##   ##   ##  ######                             D D D
  //D D                          ##        ##    ##  ##    ##  ##        ##  ##                                 D D D
  //D D                          ##        ##    ##  ##    ##  ##        ##  ##                                 D D D
  //D D                          ##        ##    ##  ##    ##  ##        ##  ########                           D D D
  //D D                                                                                                         D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D
  //D D
  //D D
  //D D

  // sections/sections.ts
  e.FRAMES_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    // backgroundColor: 'wheat',
    width: '85%',
    margin: 'auto',
    marginTop: '0px',
    marginBottom: '0px',
    // height: '100vh',
    display: 'flex',
    padding: '2vw 0',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    rowGap: '20vw',
    // columnGap: '5vw',
    // scrollMarginTop: '12vw',
    // scrollMargin: '12vw',

    // scrollBehavior: 'smooth',
    // overflowY: 'scroll',
    // transition: CONTAINER_TRANSITION,
  });

  // /sections/section-frame.ts
  e.FRAME_SINGLE_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    // backgroundColor: 'pink',
    padding: '1vw 2vw',
    backgroundColor: 'honeydew',
    borderRadius: '1.5vw',
    boxShadow: '0px 2.4rem 4.8rem rgba(0, 0, 0, 0.2)',
    // width: '100vw',
    // height: '100vh',
    // flexShrink: '0',
    // fontSize: '5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    rowGap: '1vw',
    position: 'relative',
  });

  // /sections/section-frame.ts
  e.FRAME_HEADER_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    // height: '15vw',
    // backgroundColor: 'palegreen',
    // minHeight: '15vw',
    // width: '100vw',
    // backgroundColor: `rgba(08, 49, 52, 0.8)`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: '2vw',
    // paddingLeft: '16vw',
    // position: 'sticky',
    // top: '0px',
  });

  // /sections/section-frame.ts
  e.FRAME_HEADER_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    height: '4vw',
    aspectRatio: '1',
    // height: '50%',
    // aspectRatio: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // fontSize: '5vw',
    color: '#555',
  });

  // /sections/section-frame.ts
  e.FRAME_HEADER_ICON = ''.cssProps({
    boxSizing: 'border-box',
    height: '100%',
    aspectRatio: '1',
    borderRadius: '0.5vw',
  });

  // /sections/section-frame.ts
  e.FRAME_HEADER_TEXT = ''.cssProps({
    boxSizing: 'border-box',
    fontWeight: '500',
    // display: 'inline',
    textShadow: '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3)',
    color: '#555',
    // zIndex: '10',
    fontSize: '3vw',
    marginBlock: '0px',
  });

  // /sections/section-frame.ts
  e.FRAME_BODY = ''.cssProps({
    boxSizing: 'border-box',
    // flexGrow: 1,
    // minHeight: '85vw', // TODO: revisar esta parte
  });

  //D D    END FRAME
  //D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D

  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D                                                                                                         D D D
  //D D            #######   #######    ######         ##  ########   ######   ########   ######                D D D
  //D D            ##    ##  ##    ##  ##    ##        ##  ##        ##    ##     ##     ##    ##               D D D
  //D D            ##    ##  ##    ##  ##    ##        ##  ##        ##           ##     ##                     D D D
  //D D            #######   #######   ##    ##        ##  ######    ##           ##      ######                D D D
  //D D            ##        ##    ##  ##    ##        ##  ##        ##           ##           ##               D D D
  //D D            ##        ##    ##  ##    ##  ##    ##  ##        ##    ##     ##     ##    ##               D D D
  //D D            ##        ##    ##   ######    ######   ########   ######      ##      ######                D D D
  //D D                                                                                                         D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D
  //D D
  //D D
  //D D

  //  /PROJECTS/project.organism.ts
  e.PROJECTS_UL = ''.cssProps({
    boxSizing: 'border-box',
    listStyle: 'none',
    padding: '3vw 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    // alignItems: 'center',
    gap: '2vw',
    // backgroundColor: 'orchid',
    // minHeight: '100%',
    // maxHeight: '100%',
    // width: '100vw',
    marginBlock: '0px',
    paddingInline: '0px',
    // overflowY: 'scroll',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    // backgroundColor: '#000',
    width: '25vw',
    minWidth: '25vw',
    maxWidth: '25vw',
    height: '25vw',
    minHeight: '25vw',
    maxHeight: '25vw',
    flexShrink: '0',
    borderRadius: '2vw',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: 'top',
    backgroundPositionX: 'center',
    position: 'relative',
    boxShadow: '0px 2.4rem 4.8rem rgba(0, 0, 0, 0.5)',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_FILTER = ''.cssProps({
    boxSizing: 'border-box',
    backgroundColor: '#000',
    position: 'absolute',
    borderRadius: '2vw',
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
    borderRadius: '2vw',
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
    fontSize: '1.9vw',
    color: '#fff',
    padding: '1vw 0px',
    textAlign: 'center',
    zIndex: '10',
    borderBottom: '1px solid #fff',
    borderTopLeftRadius: '2vw',
    borderTopRightRadius: '2vw',
    backdropFilter: 'blur(10px)',
    position: 'relative',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_DATE = ''.cssProps({
    boxSizing: 'border-box',
    position: 'absolute',
    marginBlock: '0px',
    bottom: '0px',
    right: '1vw',
    transform: 'translateY(100%)',
    fontWeight: '400',
    fontSize: '1vw',
    color: '#000',
    padding: '0.3vw 0.8vw',
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
    rowGap: '1vw',
    width: '100%',
    padding: '1vw 0.3vw',
    backdropFilter: 'blur(10px)',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_DESCRIPTION_TEXT = ''.cssProps({
    boxSizing: 'border-box',
    fontSize: '1.2vw',
    fontWeight: '400',
    marginBlock: '0px',
    color: '#fff',
    textShadow: '0 0 1rem rgba(255, 255, 255, 1)',
    lineHeight: '1.1',
    textAlign: 'center',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_GITHUB_ANCHOR = ''.cssProps({
    boxSizing: 'border-box',
    height: '5vw',
    minHeight: '5vw',
    maxHeight: '5vw',
    width: '7vw',
    minWidth: '7vw',
    maxWidth: '7vw',
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    backgroundColor: '#c92a2a',
    padding: '1vw 3vw',
    borderTopRightRadius: '2vw',
    borderBottomLeftRadius: '2vw',
    boxShadow: '0px -2.4rem 4.8rem rgba(0, 255, 255, 0.5)',
    borderRight: '1px solid #fff',
    borderTop: '1px solid #fff',
    outlineOffset: '0.5vw',
    outline: '2px solid #0FF',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_APP_ANCHOR = ''.cssProps({
    boxSizing: 'border-box',
    height: '5vw',
    minHeight: '5vw',
    maxHeight: '5vw',
    width: '7vw',
    minWidth: '7vw',
    maxWidth: '7vw',
    position: 'absolute',
    bottom: '0px',
    right: '0px',
    backgroundColor: '#c92a2a',
    padding: '1vw 2vw',
    borderTopLeftRadius: '2vw',
    borderBottomRightRadius: '2vw',
    boxShadow: '0px -2.4rem 4.8rem rgba(0, 255, 255, 0.5)',
    borderLeft: '1px solid #fff',
    borderTop: '1px solid #fff',
    outlineOffset: '0.5vw',
    outline: '2px solid #0FF',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
    aspectRatio: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_ICON = ''.cssProps({
    boxSizing: 'border-box',
    height: '100%',
    aspectRatio: '1',
    borderRadius: '1vw',
  });

  //D D    END PROJECTS
  //D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D

  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D                                                                                                         D D D
  //D D    ##    ##    ####     ######   ##    ##  ########  #######   #######     ####    ###   ##  ##    ##   D D D
  //D D    ##    ##   ##  ##   ##    ##  ##   ##   ##        ##    ##  ##    ##   ##  ##   ####  ##  ##   ##    D D D
  //D D    ##    ##  ##    ##  ##        ##  ##    ##        ##    ##  ##    ##  ##    ##  ## ## ##  ##  ##     D D D
  //D D    ########  ########  ##        ######    ######    #######   #######   ########  ##  ####  ######     D D D
  //D D    ##    ##  ##    ##  ##        ##   ##   ##        ##    ##  ##    ##  ##    ##  ##   ###  ##   ##    D D D
  //D D    ##    ##  ##    ##  ##    ##  ##    ##  ##        ##    ##  ##    ##  ##    ##  ##    ##  ##    ##   D D D
  //D D    ##    ##  ##    ##   ######   ##    ##  ########  ##    ##  ##    ##  ##    ##  ##    ##  ##    ##   D D D
  //D D                                                                                                         D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D
  //D D
  //D D
  //D D

  //  /HACKERRANK/hackerrank.organism.ts
  e.HACKERRANK_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    listStyle: 'none',
    padding: '2vw 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    rowGap: '2vw',
    // backgroundColor: 'orchid',
    // minHeight: '100%',
    // maxHeight: '100%',
    // width: '100vw',
    marginBlock: '0px',
    paddingInline: '0px',
    // overflowY: 'scroll',
  });

  //  /HACKERRANK/hackerrank.organism.ts
  e.HACKERRANK_PROFILE_LINK_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    textDecoration: 'none',
    fontSize: '1.8vw',
    color: '#ccc',
    padding: '0.5vw 2vw',
    borderRadius: '1vw',
    fontWeight: '600',
    backgroundColor: '#c92a2a',
    boxShadow: '2.4rem 2.4rem 4.8rem rgba(0, 0, 0, 0.3)',
    outlineOffset: '0.5vw',
    outline: '2px solid #0FF',
  });

  //  /REUSABLE/frame.organims.ts
  e.HACKERRANK_SECTION_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    // backgroundColor: 'ivory',
    width: '100%',
  });

  //  /REUSABLE/frame.organims.ts
  e.HACKERRANK_SECTION_TITLE = ''.cssProps({
    boxSizing: 'border-box',
    marginBlock: '0px',
    fontSize: '2.4vw',
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
    width: '10vw',
    boxShadow: '0px 0px 4.8rem rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    rowGap: '1vw',
    padding: '0.2vw',
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
    fontSize: '1.2vw',
    fontWeight: '400',
    color: '#555',
    textAlign: 'center',
    lineHeight: '1.2',
  });

  //D D   END HACKERRANK
  //D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D

  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D                                                                                                         D D D
  //D D                        ######   ##    ##  ####  ##        ##         ######                             D D D
  //D D                       ##    ##  ##   ##    ##   ##        ##        ##    ##                            D D D
  //D D                       ##        ##  ##     ##   ##        ##        ##                                  D D D
  //D D                        ######   ######     ##   ##        ##         ######                             D D D
  //D D                             ##  ##   ##    ##   ##        ##              ##                            D D D
  //D D                       ##    ##  ##    ##   ##   ##        ##        ##    ##                            D D D
  //D D                        ######   ##    ##  ####  ########  ########   ######                             D D D
  //D D                                                                                                         D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D
  //D D
  //D D
  //D D

  e.SKILLS_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    listStyle: 'none',
    padding: '1vw 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    rowGap: '2vw',
    // minHeight: '100%',
    // maxHeight: '100%',
    // width: '100vw',
    marginBlock: '0px',
    paddingInline: '0px',
    // overflowY: 'scroll',
  });

  //  /REUSABLE/frame.organims.ts
  e.SKILLS_SECTION_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    // backgroundColor: 'ivory',
    width: '100%',
  });

  //  /REUSABLE/frame.organims.ts
  e.SKILLS_SECTION_TITLE = ''.cssProps({
    boxSizing: 'border-box',
    marginBlock: '0px',
    fontSize: '2.4vw',
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
    // backgroundColor: 'orchid',
    flexWrap: 'wrap',
    gap: '2vw',
    padding: '2vw 0',
  });

  //  /REUSABLE/card.molecule.ts
  e.SKILLS_CARD_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    width: '10vw',
    boxShadow: '0px 0px 4.8rem rgba(0, 0, 0, 0.2)',
    // display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: '1vw',
    padding: '1vw 0.2vw',
    backgroundColor: '#fff',

    // boxSizing: 'border-box',
    // width: '10vw',
    aspectRatio: '0.8',
    // boxShadow: '0px 0px 4.8rem rgba(0, 0, 0, 0.1)',
    display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // rowGap: '1vw',
    position: 'relative',
    // backgroundColor: '#fff',
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
    fontSize: '1.2vw',
    fontWeight: '400',
    color: '#555',
    textAlign: 'center',
    lineHeight: '1.2',

    // textAlign: 'center',
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    width: '100%',
    backgroundColor: 'transparent',
    backdropFilter: 'blur(10px)',
    // lineHeight: '1',
  });

  //D D   END SKILLS
  //D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D

  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D                                                                                                         D D D
  //D D                 ######    ######   ###   ##  ########    ####     ######   ########                     D D D
  //D D                ##    ##  ##    ##  ####  ##     ##      ##  ##   ##    ##     ##                        D D D
  //D D                ##        ##    ##  ## ## ##     ##     ##    ##  ##           ##                        D D D
  //D D                ##        ##    ##  ##  ####     ##     ########  ##           ##                        D D D
  //D D                ##        ##    ##  ##   ###     ##     ##    ##  ##           ##                        D D D
  //D D                ##    ##  ##    ##  ##    ##     ##     ##    ##  ##    ##     ##                        D D D
  //D D                 ######    ######   ##    ##     ##     ##    ##   ######      ##                        D D D
  //D D                                                                                                         D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D
  //D D
  //D D
  //D D

  // CONTACT/contact.organism.ts
  e.CONTACT_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    listStyle: 'none',
    padding: '1vw 0px 11vw 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    rowGap: '2vw',
    // minHeight: '100%',
    // maxHeight: '100%',
    // width: '100vw',
    marginBlock: '0px',
    paddingInline: '0px',
    // overflowY: 'scroll',

    // backgroundColor: 'saddlebrown',
  });

  // CONTACT/contact.organism.ts
  e.CONTACT_FORM = ''.cssProps({
    boxSizing: 'border-box',
    width: '40vw',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '1.5vw',
    display: 'flex',
    borderRadius: '1vw',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    rowGap: '1.5vw',
  });

  // CONTACT/input-textarea.molecule.ts
  e.CONTACT_INPUT_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    rowGap: '0.5vw',
  });

  // CONTACT/input-textarea.molecule.ts
  e.CONTACT_INPUT_LABEL = ''.cssProps({
    boxSizing: 'border-box',
    display: 'block',
    fontSize: '1.4vw',
    margin: '0px',
    marginBlock: '0px',
    marginInline: '0px',
    color: '#555',
  });

  // CONTACT/contact.organism.data.ts
  e.CONTACT_INPUT_TEXT = ''.cssProps({
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
    padding: '0.3vw 0.6vw',
    fontSize: '1.6vw',
    borderRadius: '0.3vw',
    fontWeight: '300',
    color: '#111',
    transition: 'all 0.2s ease-in',
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
    padding: '0.3vw 0.6vw',
    fontSize: '1.6vw',
    borderRadius: '0.3vw',
    fontWeight: '300',
    color: '#111',
    transition: 'all 0.2s ease-in',
    outline: '1px solid #ccc',
    border: '1px solid #ccc',
    width: '100%',
    margin: '0px',
    marginBlock: '0px',
    marginInline: '0px',
    backgroundColor: 'lavender',
    resize: 'none',
  });

  // CONTACT/contact.organism.ts
  e.CONTACT_BUTTON = ''.cssProps({
    boxSizing: 'border-box',
    padding: '0.3vw 0.6vw',
    fontSize: '1.6vw',
    borderRadius: '0.3vw',
    outline: '1px solid #ccc',
    border: 'transparent',
    fontWeight: '600',
    color: 'rgba(240, 246, 252, 0.5)',
    backgroundColor: 'rgba(35, 134, 54, 0.6)',
  });

  e.CONTACT_FOOTER_CONTAINER = ''.cssProps({
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    boxSizing: 'border-box',
    backgroundColor: '#000',
    borderBottomLeftRadius: '1.5vw',
    borderBottomRightRadius: '1.5vw',
    alignSelf: 'stretch',
    padding: '0.8vw',
    // padding: '3vw 2vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    rowGap: '1vw',
  });

  e.CONTACT_FOOTER_APP_RESERVED_RIGHTS = ''.cssProps({
    boxSizing: 'border-box',
    color: '#fff',
    fontSize: '1.6vw',
    fontWeight: '400',
    textAlign: 'center',
    marginBlock: '0px',
    marginInline: '0px',
  });

  e.CONTACT_FOOTER_APP_DESCRIPTION = ''.cssProps({
    boxSizing: 'border-box',
    color: '#fff',
    fontSize: '1.2vw',
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

  //D D   END CONTACT
  //D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D
  //D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D D

  return e;
}
