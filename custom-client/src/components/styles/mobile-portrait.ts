import ThemeColor from '../../helpers/colors.js';

export function mobilePortraitStyles(): ElementStyles {
  let e: ElementStyles = {};

  // MAIN-HEADER:
  e['main-header'] = ''
    .cssProperty('display', 'flex')
    .cssProperty('flex-direction', 'row')
    .cssProperty('justify-content', 'space-between')
    .cssProperty('align-items', 'center')
    .cssProperty('background-color', `${ThemeColor.colorMainDarker}`)
    .cssProperty('box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)')
    .cssProperty('min-height', '6vh')
    .cssProperty('position', 'sticky')
    .cssProperty('top', '0')
    .cssProperty('padding', '0 3vw')
    .cssProperty('z-index', '10');

  e['main-header-button'] = ''
    .cssProperty('aspect-ratio', '1')
    .cssProperty('color', '#ccc')
    .cssProperty('display', 'flex')
    .cssProperty('justify-content', 'flex-start')
    .cssProperty('align-items', 'center')
    .cssProperty('position', 'relative')
    .cssProperty('border', '1px solid #888')
    .cssProperty('background-color', `${ThemeColor.colorMainDark}`)
    .cssProperty('border-radius', '1rem')
    .cssProperty('height', `${6 * 0.7}vh`);

  e['main-header-button-bars'] = 'visible';

  e['main-header-brand'] = ''
    .cssProperty('margin-block-start', '0')
    .cssProperty('margin-block-end', '0')
    .cssProperty('font-weight', '500')
    .cssProperty('display', 'inline')
    .cssProperty('color', `#ccc`)
    .cssProperty('font-size', `${6 * 0.5}vh`);

  e['main-header-nav'] = ''
    .cssProperty('box-sizing', 'border-box')
    .cssProperty('box-shadow', '0 2.4rem 4.8rem rgba(255, 255, 255, 1)')
    .cssProperty('display', 'flex')
    .cssProperty('justify-content', 'flex-start')
    .cssProperty('position', 'absolute')
    .cssProperty('left', '0') // change to hidden,
    .cssProperty('background-color', ThemeColor.colorMainDark)
    .cssProperty('transition', 'all 0.3s ease-in-out')
    .cssProperty('flex-direction', 'column')
    .cssProperty('align-items', 'stretch')
    .cssProperty('row-gap', `3.5vw`)
    .cssProperty('padding', `3.5vw`)
    .cssProperty('border-bottom-right-radius', '3vw')
    .cssProperty('border-top-right-radius', '3vw')
    .cssProperty('top', '6vh');

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
    .cssProperty('padding-top', '8vw')
    .cssProperty('border-radius', '5vw')
    .cssProperty('aspect-ratio', '5/4');

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

  e['main-header-nav-ul'] = ''
    .cssProperty('box-sizing', 'border-box')
    .cssProperty('display', 'flex')
    .cssProperty('flex-direction', 'column')
    .cssProperty('margin', '0')
    .cssProperty('padding', '0')
    .cssProperty('list-style', 'none')
    .cssProperty('row-gap', '2.5vw')
    .cssProperty('justify-content', 'flex-start')
    .cssProperty('width', 'inherit');

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
    .cssProperty('background-position', 'center')
    .cssProperty('scroll-margin-top', '6vh')
    .cssProperty('display', 'flex')
    .cssProperty('flex-direction', 'column')
    .cssProperty('justify-content', 'flex-start')
    .cssProperty('align-items', 'stretch');

  e['sections-header'] = ''
    .cssProperty('box-sizing', 'border-box')
    .cssProperty('height', '10vw')
    .cssProperty('background-color', 'transparent')
    .cssProperty('background-color', `${ThemeColor.colorMainDarker}`)
    .cssProperty('opacity', '0.9')
    .cssProperty('box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)')
    .cssProperty('display', 'flex')
    .cssProperty('flex-direction', 'row')
    .cssProperty('justify-content', 'flex-start')
    .cssProperty('align-items', 'center')
    .cssProperty('column-gap', '2vw')
    .cssProperty('position', 'sticky')
    .cssProperty('padding', '0 2vw')
    .cssProperty('z-index', '1')
    .cssProperty('top', '6vh');

  e['sections-header-title'] = ''
    .cssProperty('font-weight', '500')
    .cssProperty('color', `#fff`)
    .cssProperty('font-size', '5vw');

  // PROJECTS SECTION:

  // HACKERRANK SECTION:

  // SKILLS SECTION:

  // CONTACT SECTION:

  return e;
}
