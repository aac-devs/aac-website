import ThemeColor from '../../../helpers/colors.js';
import sectionsStyles, { SectionElementsStyles } from '../../styles/sections-styles.js';
import projectContainer from './projects/container.js';

interface SectionStyles {
  sectionStyle: string;
  headerStyle: string;
  titleStyle: string;
}

interface MobileSectionTypeReturn {
  element: HTMLElement;
  updateStyles: (styles: SectionStyles) => void;
}

function mobileSection(titleIcon: string, sectionTitle: string): MobileSectionTypeReturn {
  const section: HTMLElement = globalThis.document.createElement('section');
  const header: HTMLElement = globalThis.document.createElement('header');
  const title: HTMLElement = globalThis.document.createElement('h1');
  const iconContainer = <HTMLElement>globalThis.document.createElement('span');

  if (titleIcon.startsWith('Hacker')) {
    const img = <HTMLImageElement>globalThis.document.createElement('img');
    img.src =
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1667017201/aac-website/info/HackerRank_Icon-1000px_qrcxjg.png';

    img.setAllStyles(''.css('height', '100%').css('width', '100%'));
    iconContainer.appendChild(img);
  } else {
    const i: HTMLElement = globalThis.document.createElement('i');
    i.className = titleIcon;
    i.setAllStyles(''.css('height', '100%').css('width', '100%'));
    iconContainer.appendChild(i);
  }

  iconContainer.setAllStyles(
    ''
      .css('display', 'flex')
      .css('color', `#fff`)
      .css('justify-content', 'center')
      // .css('padding', '1rem 0'),
      .css('align-items', 'center')
      .css('font-size', '5vw')
      .css('margin', '0 3vw 0 1vw')
      .css('width', '7vw')
  );

  title.innerHTML = sectionTitle;
  section.id = sectionTitle.toLowerCase();

  header.append(iconContainer, title);
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

// export type StateData = {
//   project: string;
//   hackerrank: string;
//   skills: string;
//   contact: string;
// };

export function mobileSections(): HTMLElement[] {
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

  const { element: projectsContainer, updateStyles: projectsContainerStyles } = mobileSection(
    'fa-solid fa-gears',
    'Projects'
  );
  const { element: hackerrankContainer, updateStyles: hackerrankStyles } = mobileSection('Hackerrank', 'HackerRank');
  const { element: skillsContainer, updateStyles: skillsStyles } = mobileSection(
    'fa-solid fa-screwdriver-wrench',
    'Skills'
  );
  const { element: contactContainer, updateStyles: contactStyles } = mobileSection('fa-regular fa-message', 'Contact');

  projectsContainer.appendChild(projectContainer());

  // function setState(state: StateData) {
  //   console.log(state);
  // }

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

    console.log(SECTION_STYLES);

    projectsContainerStyles(sectionStyles);
    hackerrankStyles(sectionStyles);
    skillsStyles(sectionStyles);
    contactStyles(sectionStyles);
  }

  // globalThis.document.addEventListener('state', () => {
  //   console.log('----------------------');
  //   const state: StateType | undefined = Document.prototype.getState('hola');

  //   if (state) console.log(state);
  // });

  // TODO: agregar el listener de resize y actualizar los estilos

  updateElements();

  return [projectsContainer, hackerrankContainer, skillsContainer, contactContainer];
}

// TODO: quitar carpeta 'client' o modificar la actual y volver a pushear
