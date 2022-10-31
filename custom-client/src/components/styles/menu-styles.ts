import ThemeColor from '../../helpers/colors.js';
import getScreenSize from '../../helpers/sizes.js';

export interface MenuElementStyles {
  header: {
    own: string;
    button: {
      own: string;
      bars: string;
      xmark: string;
    };
    brand: string;
    nav: {
      own: string;
      info: {
        own: string;
        filter: string;
        name: string;
        description: string;
        jsLogo: string;
        linkedin: string;
        github: string;
      };
      ul: {
        own: string;
        li: {
          own: string;
          anchor: {
            own: string;
            icon: string;
          };
        };
      };
    };
  };
}

export default function menuStyles(): MenuElementStyles {
  const { height, width, orientation, device } = getScreenSize();
  let calculatedWidth: number = 0,
    calculatedHeight: number = 0,
    calculatedTop: number = 0,
    calculatedPadding: number = 0;

  let elems: MenuElementStyles = {
    header: {
      own: ''
        .css('width', '100%')
        .css('display', 'flex')
        .css('flex-direction', 'row')
        .css('justify-content', 'flex-start')
        .css('align-items', 'center')
        .css('background-color', `${ThemeColor.colorMainDarker}`)
        .css('box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)'),

      button: {
        own: ''
          .css('aspect-ratio', '1')
          //
          .css('color', '#ccc')
          .css('display', 'flex')
          .css('justify-content', 'flex-start')
          .css('align-items', 'center')
          .css('position', 'relative')
          .css('border', '1px solid #888')
          .css('background-color', `${ThemeColor.colorMainDark}`)
          .css('border-radius', '1rem'),

        bars: 'visible',

        xmark: 'hidden',
      },

      brand: '',

      nav: {
        own: ''
          .css('box-sizing', 'border-box')
          .css('box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)')

          .css('display', 'flex')
          .css('justify-content', 'flex-start')

          .css('position', 'absolute')
          .css('left', '0') // change to hidden,

          .css('background-color', ThemeColor.colorMainDark)

          .css('transition', 'all 0.3s ease-in-out'),

        info: {
          own: ''
            .css('box-sizing', 'border-box')
            .css('position', 'relative')

            .css(
              'background-image',
              'url(https://res.cloudinary.com/aac-devs-data/image/upload/v1666998062/aac-website/info/cyber-3400789_1920_csolpx.jpg)'
            )
            .css('background-size', 'cover')
            .css('background-repeat', 'no-repeat')
            .css('background-position', 'center')

            .css('display', 'flex')
            .css('flex-direction', 'column')
            .css('justify-content', 'flex-start')
            .css('align-items', 'center'),

          filter: ''
            .css('position', 'absolute')
            .css('bottom', '0')
            .css('left', '0')
            .css('height', '100%')
            .css('width', '100%')
            .css('opacity', '0.15')
            .css('background-color', '#000'),

          name: ''
            .css('margin', '0')
            .css('padding', '0')
            .css('font-weight', '500')
            .css('margin-block-start', '0px')
            .css('margin-block-end', '0px')
            .css('z-index', '10')
            .css('color', '#eee')
            .css('text-shadow', '0rem 0rem 2rem rgba(0, 255, 255, 1)'),

          description: ''
            .css('margin', '0')
            .css('padding', '0')
            .css('z-index', '10')
            .css('font-weight', '400')
            .css('color', '#ee0')
            .css('margin-block-start', '0px')
            .css('margin-block-end', '0px')
            .css('text-shadow', '0rem 0rem 2rem rgba(0, 255, 255, 1)'),

          jsLogo: ''
            .css('aspect-ratio', '1')
            .css(
              'background-image',
              'url(https://res.cloudinary.com/aac-devs-data/image/upload/v1663975560/aac-website/info/js_cgxlpb.png)'
            )
            .css('background-size', 'contain')
            .css('position', 'absolute'),
          linkedin: ''.css('color', '#fff').css('position', 'absolute').css('aspect-ratio', '1'),

          github: ''.css('color', '#fff').css('position', 'absolute').css('aspect-ratio', '1'),
        },

        ul: {
          own: ''
            .css('box-sizing', 'border-box')
            .css('display', 'flex')
            .css('flex-direction', 'column')
            .css('margin', '0')
            .css('padding', '0')
            .css('list-style', 'none'),
          li: {
            own: ''.css('background-color', `${ThemeColor.colorMainDarker}`),
            anchor: {
              own: ''
                .css('box-sizing', 'border-box')
                .css('text-decoration', 'none')
                .css('flex-grow', '1')
                .css('display', 'flex')
                .css('flex-direction', 'row')
                .css('justify-content', 'flex-start')
                .css('align-items', 'center')
                .css('color', '#ccc'),
              icon: ''
                .css('display', 'flex')
                .css('justify-content', 'center')
                // .css('padding', '1rem 0'),
                .css('align-items', 'center'),
              //
              //
            },
          },
        },
      },
    },
  };

  if (orientation === 'portrait-primary') {
    calculatedHeight = height * 0.9;
    // if (width < 500) calculatedWidth = width * 0.83;
    // else if (width < 1000) calculatedWidth = width * 0.5;
    // else calculatedWidth = width * 0.4;
    calculatedWidth = width * 0.75;
    calculatedPadding = width * 0.04;

    // |||||||||||||||||||||||||||||||||||||||||||||||||||
    // PORTRAIT

    elems.header.own += ''
      .css('min-height', '6vh')
      //
      .css('padding', '0 3vw');

    elems.header.button.own += ''
      //
      .css('height', `${6 * 0.7}vh`);

    elems.header.nav.own += ''
      .css('flex-direction', 'column')
      .css('align-items', 'stretch')
      .css('row-gap', `3.5vw`)
      .css('padding', `3.5vw`)
      .css('border-bottom-right-radius', '3vw')
      .css('border-top-right-radius', '3vw')
      .css('top', '6vh');

    elems.header.nav.info.own += ''
      .css('width', `80vw`)
      .css('padding-top', '8vw')
      .css('border-radius', '5vw')
      .css('aspect-ratio', '5/4');

    elems.header.nav.info.filter += ''.css('border-radius', '5vw');

    elems.header.nav.ul.own += ''
      //
      .css('row-gap', '2.5vw')
      .css('justify-content', 'flex-start')
      .css('width', 'inherit');

    elems.header.nav.info.name += ''
      //
      .css('font-size', '8vw');

    elems.header.nav.info.description += ''
      //
      .css('font-size', '5.5vw');

    elems.header.nav.info.jsLogo += ''
      .css('height', '13vw')
      .css('border-radius', '1vw')
      .css('bottom', '4vw')
      .css('left', '4vw');

    elems.header.nav.info.linkedin += ''
      // .css('font-size', '8vw')
      .css('height', '10vw')
      .css('bottom', '4vw')
      .css('right', '4vw')
      .css('padding', '0rem 0.2rem');

    elems.header.nav.info.github += ''
      // .css('font-size', '8vw')
      .css('height', '10vw')
      // .css('width', '10vw')
      .css('bottom', '4vw')
      .css('right', '4vw')
      .css('padding', '0rem 0.2rem')
      .css('transform', 'translateY(-140%)');

    elems.header.nav.ul.li.own += ''.css('border-radius', '5vw');

    elems.header.nav.ul.li.anchor.own += ''
      .css('font-size', '5vw')
      .css('border-radius', '5vw')
      .css('padding', '1vw 2.5vw');

    elems.header.nav.ul.li.anchor.icon += ''
      //
      .css('font-size', '5vw')
      .css('margin', '0 3vw 0 1vw')
      .css('width', '7vw');
  } else {
    calculatedTop = height * 0.12;
    calculatedHeight = height * 0.7;
    // if (width < 700) calculatedWidth = width * 0.8;
    // else if (width < 1000) calculatedWidth = width * 0.7;
    // else calculatedWidth = width * 0.5;
    calculatedWidth = width * 0.8;
    calculatedPadding = width * 0.02;

    // ---------------------------------------------------
    // LANDSCAPE

    elems.header.own += ''
      .css('height', `${calculatedTop}px`)
      //
      .css('padding', '0 3vw');

    elems.header.button.own += ''
      //
      .css('height', `${calculatedTop * 0.7}px`);

    elems.header.nav.own += ''
      .css('flex-direction', 'row')
      .css('align-items', 'center')
      .css('border-bottom-right-radius', '3vh')
      .css('border-top-right-radius', '3vh')
      .css('column-gap', `4vh`)
      .css('padding', `4vh`)
      .css('top', `${calculatedTop}px`); // calculado!!!

    elems.header.nav.info.own += ''
      .css('height', `60vh`)
      .css('padding-top', '8vh')
      .css('border-radius', '5vh')
      .css('aspect-ratio', '5/4');

    elems.header.nav.info.filter += ''.css('border-radius', '5vh');

    elems.header.nav.ul.own += ''
      .css('height', `60vh`) // calculated
      .css('row-gap', '2.5vh')
      .css('aspect-ratio', '8/11')
      .css('justify-content', 'center');

    elems.header.nav.info.name += ''
      //
      .css('font-size', '7.5vh');

    elems.header.nav.info.description += ''
      //
      .css('font-size', '5.2vh');

    elems.header.nav.info.jsLogo += ''
      .css('height', '12vh')
      .css('border-radius', '1vh')
      .css('bottom', '4vh')
      .css('left', '4vh');

    elems.header.nav.info.linkedin += ''
      .css('height', '9vh')
      .css('bottom', '4vh')
      .css('right', '4vh')
      .css('padding', '0rem 0.2rem');

    elems.header.nav.info.github += ''
      .css('height', '9vh')
      .css('bottom', '4vh')
      .css('right', '4vh')
      .css('padding', '0rem 0.2rem')
      .css('transform', 'translateY(-140%)');

    elems.header.nav.ul.li.own += ''.css('border-radius', '5vh');

    elems.header.nav.ul.li.anchor.own += ''
      .css('font-size', '4.2vh')
      .css('border-radius', '5vh')
      .css('padding', '1vh 2.5vh');

    elems.header.nav.ul.li.anchor.icon += ''
      //
      .css('font-size', '4.5vh')
      .css('margin', '0 3vh 0 1vh')
      .css('width', '7vh');
  }

  // TODO: Ajustar los tamaños en horizontal con vh

  return elems;
}
