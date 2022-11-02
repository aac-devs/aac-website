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
          .css('background-color', '#ccc')
          //
          .css('width', '100vw')
          .css('height', '80vh'), // TODO: cambiar a auto
        header: {
          own: ''
            .css('height', '5vh')
            //
            .css('position', 'sticky')
            .css('top', '6vh'),
          title: '',
        }, // TODO: poner un ícono junto al título en la section
      },
    };

    if (orientation === 'portrait-primary') {
    } else {
    }
    return elems;
  }
  return elems;
}
