import { getInfoStyles } from './sections/info.styles.js';

export function mobilePortraitStyles(): ElementStyles {
  let e: ElementStyles = {};
  const CONTAINER_TRANSITION = 'all 0.3s ease-in-out';

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
    boxShadow: '0.8rem 0.8rem 2rem rgba(0, 0, 0, 0.5)',
    aspectRatio: '1',
    color: '#ccc',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    border: '0px solid #888',
    backgroundColor: 'transparent',
    borderRadius: '1vw',
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
    position: 'absolute',
    left: '0px',
    top: '15vw',
    backgroundColor: 'transparent',
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
    boxShadow: '0.5rem 0.5rem 1rem rgba(0, 127, 127, 0.8)',
  });

  // /nav/nav.organism.data.ts
  e.NAV_ANCHOR = ''.cssProps({
    boxSizing: 'border-box',
    textDecoration: 'none',
    color: '#aaa',
    fontSize: '5vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '2vw',
    minHeight: '10vw',
    minWidth: '10vw',
    maxHeight: '10vw',
    maxWidth: '10vw',
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

  const { infoContainer, infoName, infoDescription } = getInfoStyles('mobile-portrait');

  e.INFO_CONTAINER = infoContainer;
  e.INFO_NAME = infoName;
  e.INFO_DESCRIPTION = infoDescription;

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
    padding: '3vw 3.5vw 3vw 3vw',
    transition: CONTAINER_TRANSITION,
    borderBottomRightRadius: '3vw',
    borderTopRightRadius: '3vw',
    transform: 'translateX(-1400%)',
    backdropFilter: 'blur(10px)',
  });

  // /info/social.organism.ts
  e.SOCIAL_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    height: '9vw',
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
  // e.SOCIAL_LINKEDIN_ICON_CONTAINER = ''.cssProps({
  //   boxSizing: 'border-box',
  //   height: '9vw',
  //   aspectRatio: '1',
  //   color: 'mediumblue',
  //   borderRadius: '1vw',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#fff',
  //   boxShadow: '0.5rem 0.5rem 1rem rgba(0, 127, 127, 0.8)',
  // });

  // /info/social.organism.ts
  e.SOCIAL_ICON = ''.cssProps({
    height: '90%',
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
    backgroundColor: 'honeydew',
    minHeight: '100%',
    maxHeight: '100%',
    width: '100vw',
    marginBlock: '0px',
    paddingInline: '0px',
    overflowY: 'scroll',
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
    height: '12vw',
    aspectRatio: '2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    backgroundColor: '#c92a2a',
    borderTopRightRadius: '5vw',
    borderBottomLeftRadius: '5vw',
    boxShadow: '0px -2.4rem 4.8rem rgba(0, 255, 255, 0.5)',
    borderRight: '1px solid #fff',
    borderTop: '1px solid #fff',
    outlineOffset: '1.5vw',
    outline: '2px solid #0FF',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_APP_ANCHOR = ''.cssProps({
    height: '12vw',
    aspectRatio: '2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '0px',
    right: '0px',
    backgroundColor: '#c92a2a',
    borderTopLeftRadius: '5vw',
    borderBottomRightRadius: '5vw',
    boxShadow: '0px -2.4rem 4.8rem rgba(0, 255, 255, 0.5)',
    borderLeft: '1px solid #fff',
    borderTop: '1px solid #fff',
    outlineOffset: '1.5vw',
    outline: '2px solid #0FF',
  });

  //  /PROJECTS/project.card.molecule.ts
  e.PROJECT_CARD_ICON_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    height: '70%',
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
    backgroundColor: '#fff',
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
    padding: '1vw 2vw',
    fontSize: '4vw',
    borderRadius: '1vw',
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
    padding: '1vw 2vw',
    fontSize: '4vw',
    borderRadius: '1vw',
    fontWeight: '300',
    color: '#111',
    transition: 'all 0.2s ease-in',
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

  return e;
}
