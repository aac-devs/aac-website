import sectionsStyles, { SectionElementsStyles } from '../../styles/sections-styles.js';

interface SectionStyles {
  sectionStyle: string;
  headerStyle: string;
  titleStyle: string;
}

interface MobileSectionTypeReturn {
  element: HTMLElement;
  updateStyles: (styles: SectionStyles) => void;
}

function mobileSection(sectionTitle: string): MobileSectionTypeReturn {
  const section: HTMLElement = globalThis.document.createElement('section');
  const header: HTMLElement = globalThis.document.createElement('header');
  const title: HTMLElement = globalThis.document.createElement('h1');

  title.innerHTML = sectionTitle;
  section.id = sectionTitle.toLowerCase();

  header.appendChild(title);
  section.appendChild(header);

  function updateStyles({ sectionStyle, headerStyle, titleStyle }: SectionStyles) {
    HTMLElement.prototype.setElementsStyles(
      { element: section, style: sectionStyle },
      { element: header, style: headerStyle },
      { element: title, style: titleStyle }
    );
  }
  return { element: section, updateStyles };
}

export type StateData = {
  project: string;
  hackerrank: string;
  skills: string;
  contact: string;
};

interface MobileSectionsTypeReturn {
  elements: HTMLElement[];
  setState: (state: StateData) => void;
}

export function mobileSections(): MobileSectionsTypeReturn {
  // const section = <HTMLElement>globalThis.document.createElement('section');
  // const header = <HTMLElement>globalThis.document.createElement('header');
  // const h1 = <HTMLElement>globalThis.document.createElement('h1');
  // h1.innerHTML = sectionName;
  // section.id = `${sectionName.toLowerCase()}`;
  // h1.setAllStyles(
  //   ''
  //     .css('margin', '0')
  //     //
  //     .css('font-size', '3vh')
  // );
  // header.appendChild(h1);
  // header.setAllStyles(
  //   ''
  //     //
  //     .css('height', '6vh')
  //     .css('background-color', `${ThemeColor.colorMainNormal}`)
  //     .css('position', 'sticky')
  //     .css('top', '6vh')
  // );
  // section.setAllStyles(
  //   ''
  //     .css('height', '100vh')
  //     .css('background-color', 'yellow')
  //     .css('margin-bottom', '8vh')
  //     .css('border-bottom', '10px solid #000')
  // );
  // section.appendChild(header);
  // return section;

  const { element: projectContainer, updateStyles: projectStyles } = mobileSection('Projects');
  const { element: hackerrankContainer, updateStyles: hackerrankStyles } = mobileSection('HackerRank');
  const { element: skillsContainer, updateStyles: skillsStyles } = mobileSection('Skills');
  const { element: contactContainer, updateStyles: contactStyles } = mobileSection('Contact');

  function setState(state: StateData) {
    console.log(state);
  }

  function updateElements() {
    const styles: SectionElementsStyles = sectionsStyles();

    const {
      own: SECTION_STYLES,
      header: { own: HEADER_STYLES, title: TITLE_STYLES },
    } = styles.section;

    const sectionStyles: SectionStyles = {
      sectionStyle: SECTION_STYLES,
      headerStyle: HEADER_STYLES,
      titleStyle: TITLE_STYLES,
    };

    projectStyles(sectionStyles);
    hackerrankStyles(sectionStyles);
    skillsStyles(sectionStyles);
    contactStyles(sectionStyles);
  }

  // TODO: agregar el listener de resize y actualizar los estilos

  updateElements();
  return {
    elements: [projectContainer, hackerrankContainer, skillsContainer, contactContainer],
    setState,
  };
}
