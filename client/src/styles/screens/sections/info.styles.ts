type ScreenType = 'mobile-portrait' | 'mobile-landscape' | 'desktop';

export function getInfoStyles(screenType: ScreenType) {
  //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

  const INFO_CONTAINER = ''.cssProps({
    boxSizing: 'border-box',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    bottom: '0px',
    right: '0px',
  });

  const INFO_CONTAINER_MOBILE = `${INFO_CONTAINER}${''.cssProps({
    transition: 'all 0.3s ease-in-out',
    transform: 'translateY(1000%)',
    backgroundColor: 'transparent',
    borderTopLeftRadius: '5vw',
    backdropFilter: 'blur(10px)',
  })}`;

  const INFO_CONTAINER_DESKTOP = `${INFO_CONTAINER}${''.cssProps({
    padding: '2vw 3vw',
  })}`;

  const INFO_CONTAINER_MOBILE_PORTRAIT = `${INFO_CONTAINER_MOBILE}${''.cssProps({
    width: '60vw',
    padding: '2vw 4vw',
  })}`;

  const INFO_CONTAINER_MOBILE_LANDSCAPE = `${INFO_CONTAINER_MOBILE}${''.cssProps({
    width: '60vh',
    padding: '2vh 4vh',
  })}`;

  //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

  const INFO_NAME = ''.cssProps({
    boxSizing: 'border-box',
    margin: '0px',
    padding: '0px',
    marginBlock: '0px',
    fontWeight: '500',
    zIndex: '10',
    textShadow: '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.8)',
  });

  const INFO_NAME_MOBILE = `${INFO_NAME}${''.cssProps({
    color: 'orangered',
  })}`;

  const INFO_NAME_DESKTOP = `${INFO_NAME}${''.cssProps({
    fontSize: '2vw',
    color: '#333',
  })}`;

  const INFO_NAME_MOBILE_PORTRAIT = `${INFO_NAME_MOBILE}${''.cssProps({
    fontSize: '6.5vw',
  })}`;

  const INFO_NAME_MOBILE_LANDSCAPE = `${INFO_NAME_MOBILE}${''.cssProps({
    fontSize: '6.5vh',
  })}`;

  //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

  const INFO_DESCRIPTION = ''.cssProps({
    boxSizing: 'border-box',
    margin: '0px',
    padding: '0px',
    marginBlock: '0px',
    fontWeight: '400',
    zIndex: '10',
    textShadow: '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.8)',
  });

  const INFO_DESCRIPTION_MOBILE = `${INFO_DESCRIPTION}${''.cssProps({
    color: 'orangered',
  })}`;

  const INFO_DESCRIPTION_MOBILE_PORTRAIT = `${INFO_DESCRIPTION_MOBILE}${''.cssProps({
    fontSize: '4.5vw',
  })}`;

  const INFO_DESCRIPTION_MOBILE_LANDSCAPE = `${INFO_DESCRIPTION_MOBILE}${''.cssProps({
    fontSize: '4.5vh',
  })}`;

  const INFO_DESCRIPTION_DESKTOP = `${INFO_DESCRIPTION}${''.cssProps({
    fontSize: '1.5vw',
    color: '#333',
  })}`;

  if (screenType === 'desktop')
    return {
      infoContainer: INFO_CONTAINER_DESKTOP,
      infoName: INFO_NAME_DESKTOP,
      infoDescription: INFO_DESCRIPTION_DESKTOP,
    };
  if (screenType === 'mobile-portrait')
    return {
      infoContainer: INFO_CONTAINER_MOBILE_PORTRAIT,
      infoName: INFO_NAME_MOBILE_PORTRAIT,
      infoDescription: INFO_DESCRIPTION_MOBILE_PORTRAIT,
    };
  return {
    infoContainer: INFO_CONTAINER_MOBILE_LANDSCAPE,
    infoName: INFO_NAME_MOBILE_LANDSCAPE,
    infoDescription: INFO_DESCRIPTION_MOBILE_LANDSCAPE,
  };
}
