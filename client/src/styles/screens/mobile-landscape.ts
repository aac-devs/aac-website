import getScreenSize from '../../helpers/screen-size.js';
import { getInfoStyles } from './sections/info.styles.js';

export function mobileLandscapeStyles(): ElementStyles {
  // const CALCULATED_TOP = getScreenSize().height * 0.12;
  const WIDTH = getScreenSize().width;
  const CONTAINER_TRANSITION = 'all 0.3s ease-in-out';
  let e: ElementStyles = {};

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

  e.HTML = ''.cssProps({
    boxSizing: 'border-box',
    fontFamily: '"Poppins", sans-serif',
    height: '100%',
    margin: '0px',
    padding: '0px',
    position: 'relative',
    scrollBehavior: 'smooth',
    backgroundColor: '#fff',
  });

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
    backgroundColor: 'transparent',
    minHeight: '0vh',
    height: '0vh',
    maxHeight: '0vh',
    width: '100vw',
    position: 'fixed',
    top: '0',
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
  });

  // /nav/molecules/ul.molecule.ts
  e.NAV_UL = ''.cssProps({
    boxSizing: 'border-box',
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
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

  const { infoContainer, infoName, infoDescription } = getInfoStyles('mobile-landscape');

  e.INFO_CONTAINER = infoContainer;
  e.INFO_NAME = infoName;
  e.INFO_DESCRIPTION = infoDescription;

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
  e.SOCIAL_ICON_CONTAINER = ''.cssProps({
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
  // e.SOCIAL_LINKEDIN_ICON_CONTAINER = ''.cssProps({
  //   boxSizing: 'border-box',
  //   color: 'mediumblue',
  //   backgroundColor: '#fff',
  //   boxShadow: '0.5rem 0.5rem 1rem rgba(0, 127, 127, 0.8)',
  //   aspectRatio: '1',
  //   height: '9vh',
  //   borderRadius: '1vh',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // });

  // /info/social.organism.ts
  e.SOCIAL_ICON = ''.cssProps({
    boxSizing: 'border-box',
    height: '90%',
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
    scrollBehavior: 'smooth',
    overflowY: 'scroll',
    transition: CONTAINER_TRANSITION,
  });

  // /sections/section-frame.ts
  e.FRAME_SINGLE_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    width: '100vw',
    height: '100vh',
    flexShrink: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative',
    overflowX: 'scroll',
  });

  // /sections/section-frame.ts
  e.FRAME_HEADER_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    backgroundColor: `rgba(08, 49, 52, 0.8)`,
    minWidth: '16vh',
    maxWidth: '16vh',
    width: '16vh',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    rowGap: '3vh',
    paddingTop: '16vh',
    paddingBottom: '3vh',
    position: 'sticky',
    zIndex: '1',
    left: '0px',
  });

  // /sections/section-frame.ts
  e.FRAME_BODY = ''.cssProps({
    boxSizing: 'border-box',
    flexGrow: 1,
    width: `calc(${WIDTH} - 16vh)`,
  });

  // /sections/section-frame.ts
  e.FRAME_HEADER_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    color: '#ccc',
    width: '50%',
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
    flexGrow: 1,
    textAlign: 'center',
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
    backgroundColor: 'honeydew',
    minHeight: '100%',
    maxHeight: '100%',
    height: '100vh',
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

  const PROJECT_CARD_ANCHOR = ''.cssProps({
    boxSizing: 'border-box',
    height: '12vh',
    minHeight: '12vh',
    maxHeight: '12vh',
    aspectRatio: '2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c92a2a',
    boxShadow: '0px -2.4rem 4.8rem rgba(0, 255, 255, 0.5)',
    borderTop: '1px solid #fff',
    outline: '2px solid #0FF',
    position: 'absolute',
    bottom: '0px',
    outlineOffset: '1.5vh',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_GITHUB_ANCHOR = `${PROJECT_CARD_ANCHOR}${''.cssProps({
    left: '0px',
    borderRight: '1px solid #fff',
    borderBottomLeftRadius: '5vh',
    borderTopRightRadius: '5vh',
  })}`;

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_APP_ANCHOR = `${PROJECT_CARD_ANCHOR}${''.cssProps({
    right: '0px',
    borderLeft: '1px solid #fff',
    borderTopLeftRadius: '5vh',
    borderBottomRightRadius: '5vh',
  })}`;

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    color: '#fff',
    height: '70%',
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    columnGap: '5vh',
    minHeight: '100vh',
    maxHeight: '100vh',
    height: '100vh',
    width: '100%',
    marginBlock: '0px',
    paddingInline: '0px',
    paddingLeft: '3vh',
    overflowX: 'scroll',
  });

  //  /REUSABLE/frame.organims.ts
  e.SKILLS_SECTION_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    columnGap: '2vh',
    paddingLeft: '1vh',
    boxShadow: '0px 0px 4.8rem rgba(0, 0, 0, 0.1)',
  });

  //  /REUSABLE/frame.organims.ts
  e.SKILLS_SECTION_TITLE = ''.cssProps({
    boxSizing: 'border-box',
    color: '#444',
    writingMode: 'vertical-lr',
    textOrientation: 'upright',
    wordSpacing: '0.1',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBlock: '0px',
    fontSize: '3vh',
    fontWeight: '600',
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
