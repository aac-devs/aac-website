import ThemeColor from '../../helpers/colors.js';
import getScreenSize from '../../helpers/sizes.js';

export interface SectionElementsStyles {
  section: {
    own: string;
    header: {
      own: string;
      title: string;
    };
  };
}

export default function sectionsStyles(): SectionElementsStyles {
  const { height, width, orientation, device } = getScreenSize();

  let elems: SectionElementsStyles = {
    section: {
      own: '',
      header: {
        own: '',
        title: '',
      },
    },
  };

  if (device === 'mobile') {
    elems = {
      section: {
        own: ''
          // .css('background-color', '#ccc')
          // .css(
          //   'background-image',
          //   'url(https://res.cloudinary.com/aac-devs-data/image/upload/v1666998062/aac-website/info/cyber-3400789_1920_csolpx.jpg)'
          // )
          .css('background-color', `#fff`)
          .css('margin-bottom', '10vh')
          // .css('background-size', 'cover')
          // .css('background-repeat', 'no-repeat')
          .css('box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)')
          .css('background-position', 'center'),

        // .css('width', '100vw'),
        // .css('min-height', '80vh'), // TODO: cambiar a auto
        header: {
          own: ''
            .css('box-sizing', 'border-box')
            .css('height', '10vw')
            //
            .css('background-color', 'transparent')
            .css('background-color', `${ThemeColor.colorMainDarker}`)
            .css('opacity', '0.9')
            .css('box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)')
            .css('display', 'flex')
            .css('flex-direction', 'row')
            .css('justify-content', 'flex-start')
            .css('align-items', 'center')
            .css('column-gap', '2vw')
            .css('position', 'sticky')
            .css('padding', '0 2vw')
            .css('z-index', '1')
            .css('top', '6vh'),
          title: ''
            //
            .css('font-weight', '500')
            .css('color', `#fff`)
            .css('font-size', '5vw'),
        }, // TODO: poner un ícono junto al título en la section
      },
    };

    if (orientation === 'portrait-primary') {
      elems.section.own += ''
        // .css('height', '94vh')
        // .css('margin-bottom', '10vh')
        .css('scroll-margin-top', '6vh')
        .css('display', 'flex')
        .css('flex-direction', 'column')
        .css('justify-content', 'flex-start')
        .css('align-items', 'stretch');
    } else {
    }
    return elems;
  }
  return elems;
}
