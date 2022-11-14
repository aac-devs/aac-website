import { InfoStyles, ListItemFn } from './types';

/**
  menu-button.ts
createMainHeaderButton(clickFunction: (ev: Event) => void): ButtonWithFunctionReturn

  info-section.ts
createInfoSection(fn: (ev?: Event) => void): InfoReturn

  menu-li.ts
createLiUlElements(listName: string, fn: (ev?: Event) => void): ElementWithStyleFunctionReturn | null

  menu-ul.ts
createUlNavElement(fn: (ev?: Event) => void): ElementWithStyleFunctionArrayReturn

  nav.ts ==> index.ts (nav)
mobileHeader(): HTMLElement

  project-card.ts
projectCard(item: ProjectType): HTMLElement

  project-container.ts
projectContainer(): HTMLElement

  index.ts (sections)
mobileSection(titleIcon: string, sectionTitle: string): MobileSectionTypeReturn
mobileSections(): HTMLElement[]

 */

// INTERFACES
export interface MobileSectionTypeReturn {
  element: HTMLElement;
  updateStyles: (styles: SectionStyles) => void;
}

export interface SectionStyles {
  SECTION_STYLES: string;
  HEADER_STYLES: string;
  TITLE_STYLES: string;
  ICON_STYLES: string;
}

export interface ElementWithStyleFunctionReturn {
  element: HTMLElement;
  styleFunction: ListItemFn;
}

export interface ButtonWithFunctionReturn {
  buttonElement: HTMLButtonElement;
  stylesFunction: (STYLES: MenuButtonStyles) => void;
}

export interface ElementWithStyleFunctionArrayReturn {
  element: HTMLElement;
  styleFunctions: ListItemFn[];
}

export interface InfoReturn {
  infoElement: HTMLElement;
  stylesFunction: (STYLES: InfoStyles) => void;
}

// TYPES:
export type MenuButtonStyles = {
  button?: string;
  showBars: VisibilityType;
};
