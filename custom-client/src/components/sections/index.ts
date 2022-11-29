import { MobileSectionTypeReturn, SectionStyles } from '../../helpers/interfaces.js';
import projectContainer from './projects/projects-container.js';

function mobileSection(titleIcon: string, sectionTitle: string): MobileSectionTypeReturn {
  const sectionElement: HTMLElement = globalThis.document.createElement('section');
  const headerElement: HTMLElement = globalThis.document.createElement('header');
  const titleElement: HTMLElement = globalThis.document.createElement('h1');
  const iconContainerElement = <HTMLElement>globalThis.document.createElement('span');

  const ICON_STATIC_STYLES = ''.cssProperties(['height', '100%'], ['width', '100%']);

  if (titleIcon.startsWith('Hacker')) {
    const imgElement = <HTMLImageElement>globalThis.document.createElement('img');
    imgElement.src =
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1667017201/aac-website/info/HackerRank_Icon-1000px_qrcxjg.png';

    HTMLElement.prototype.resetElementsStyles({ element: imgElement, style: ICON_STATIC_STYLES });
    iconContainerElement.appendChild(imgElement);
  } else {
    const iconElement: HTMLElement = globalThis.document.createElement('i');
    iconElement.className = titleIcon;
    HTMLElement.prototype.resetElementsStyles({ element: iconElement, style: ICON_STATIC_STYLES });
    iconContainerElement.appendChild(iconElement);
  }

  titleElement.textContent = sectionTitle;
  sectionElement.id = sectionTitle.toLowerCase();

  headerElement.append(iconContainerElement, titleElement);
  sectionElement.appendChild(headerElement);

  function updateStyles({ SECTION_STYLES, HEADER_STYLES, TITLE_STYLES, ICON_STYLES }: SectionStyles) {
    // TODO: Adoptar esta forma de poner los estilos en todos los elementos
    HTMLElement.prototype.resetElementsStyles(
      { element: sectionElement, style: SECTION_STYLES },
      { element: headerElement, style: HEADER_STYLES },
      { element: titleElement, style: TITLE_STYLES },
      { element: iconContainerElement, style: ICON_STYLES }
    );
  }
  return { element: sectionElement, updateStyles };
}

export function mobileSections(): HTMLElement[] {
  const { element: projectsFrame, updateStyles: projectsFrameStyles } = mobileSection('fa-solid fa-gears', 'Projects');
  const { element: hackerrankFrame, updateStyles: hackerrankFrameStyles } = mobileSection('Hackerrank', 'HackerRank');
  const { element: skillsFrame, updateStyles: skillsFrameStyles } = mobileSection(
    'fa-solid fa-screwdriver-wrench',
    'Skills'
  );
  const { element: contactFrame, updateStyles: contactFrameStyles } = mobileSection('fa-regular fa-message', 'Contact');

  projectsFrame.appendChild(projectContainer());

  function setElementsStyles() {
    const STYLES: ElementStyles = Document.prototype.getStyles();
    const SECTION_STYLES: SectionStyles = {
      SECTION_STYLES: STYLES.sections!,
      HEADER_STYLES: STYLES['sections-header']!,
      TITLE_STYLES: STYLES['sections-header-title']!,
      ICON_STYLES: STYLES['sections-header-icon']!,
    };

    projectsFrameStyles(SECTION_STYLES);
    hackerrankFrameStyles(SECTION_STYLES);
    skillsFrameStyles(SECTION_STYLES);
    contactFrameStyles(SECTION_STYLES);
  }

  globalThis.document.addEventListener('styles', setElementsStyles);

  setElementsStyles();

  return [projectsFrame, hackerrankFrame, skillsFrame, contactFrame];
}

// TODO: quitar carpeta 'client' o modificar la actual y volver a pushear
