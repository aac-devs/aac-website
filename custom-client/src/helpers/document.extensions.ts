// PROJECTS SKELETON TYPES:

type ProjectType = {
  projectId: number;
  projectDate: Date;
  projectTitle: string;
  projectImage: string;
  projectDescription: {
    front?: string;
    back?: string;
    other?: string;
  };
  projectSocialMediaLinks: {
    app: string;
    github: string;
  };
};

// HACKERRANK SKELETON TYPES:

type BadgeType = {
  badgeTitle: string;
  badgeImage: string;
};

type VerifiedSkillType = {
  verTitle: string;
  verImage: string;
};

type HackerrankType = {
  badges: BadgeType[];
  verifiedSkills: VerifiedSkillType[];
  profileLink: string;
};

// SKILLS SKELETON TYPES:

type TechSkillSet =
  | 'Programming Language'
  | 'Framework - Library'
  | 'Runtime Environment'
  | 'Web Technology'
  | 'Database'
  | 'Version Control';

type SkillType = {
  skillTitle: string;
  skillType: TechSkillSet;
  skillImage: string;
};

// STATE SKELETON TYPES:

interface StateType {
  projects: ProjectType[];
  hackerrank: HackerrankType;
  skills: SkillType[];
}

interface Document {
  updateState(newState?: StateType): () => StateType | undefined;
  getState(pass?: string): StateType | undefined;
  setStyles(newStyles?: ElementStyles): () => ElementStyles;
  getStyles(): ElementStyles;
}

function protectedState() {
  let state: StateType;
  return function (newState?: StateType): () => StateType | undefined {
    if (newState) state = newState;
    return function (pass?: string): StateType | undefined {
      if (pass === 'hola') return state;
      return undefined;
    };
  };
}

Document.prototype.updateState = protectedState();
Document.prototype.getState = Document.prototype.updateState();

type VisibilityType = 'visible' | 'hidden';

interface ElementStyles extends Object {
  // HTML, BODY:
  html?: string;
  body?: string;

  HTML?: string;
  BODY?: string;

  NAV?: string;
  NAV_UL?: string;
  NAV_LI?: string;
  NAV_ANCHOR?: string;
  NAV_ICON?: string;
  NAV_ICON_CONTAINER?: string;

  HEADER_CONTAINER?: string;
  HEADER_BUTTON?: string;
  HEADER_BUTTON_ICON_CONTAINER?: string;
  HEADER_BUTTON_ICON?: string;
  HEADER_BRAND?: string;

  INFO_CONTAINER?: string;
  INFO_NAME?: string;
  INFO_DESCRIPTION?: string;

  SOCIAL_CONTAINER?: string;
  SOCIAL_GITHUB_ICON_CONTAINER?: string;
  SOCIAL_ICON?: string;
  SOCIAL_LINKEDIN_ICON_CONTAINER?: string;

  FRAMES_CONTAINER?: string;
  FRAME_SINGLE_CONTAINER?: string;
  FRAME_HEADER_CONTAINER?: string;
  FRAME_HEADER_TEXT?: string;
  FRAME_HEADER_ICON?: string;
  FRAME_HEADER_ICON_CONTAINER?: string;
  FRAME_BODY?: string;

  PROJECTS_UL?: string;
  PROJECT_CARD_CONTAINER?: string;
  PROJECT_CARD_FILTER?: string;
  PROJECT_CARD_TITLE?: string;
  PROJECT_ELEMENTS_CONTAINER?: string;
  PROJECT_CARD_GITHUB_ANCHOR?: string;
  PROJECT_CARD_APP_ANCHOR?: string;
  PROJECT_CARD_ICON_CONTAINER?: string;
  PROJECT_CARD_ICON?: string;
  PROJECT_CARD_DATE?: string;
  PROJECT_CARD_DESCRIPTION_CONTAINER?: string;
  PROJECT_CARD_DESCRIPTION_TEXT?: string;

  HACKERRANK_CONTAINER?: string;
  HACKERRANK_SECTION_CONTAINER?: string;
  HACKERRANK_SECTION_TITLE?: string;
  HACKERRANK_SECTION_UL?: string;
  HACKERRANK_PROFILE_LINK_CONTAINER?: string;

  HACKERRANK_CARD_CONTAINER?: string;
  HACKERRANK_CARD_IMAGE?: string;
  HACKERRANK_CARD_TITLE?: string;

  SKILLS_CONTAINER?: string;
  SKILLS_SECTION_CONTAINER?: string;
  SKILLS_SECTION_TITLE?: string;
  SKILLS_SECTION_UL?: string;
  SKILLS_CARD_CONTAINER?: string;
  SKILLS_CARD_IMAGE?: string;
  SKILLS_CARD_TITLE?: string;

  CONTACT_CONTAINER?: string;
  CONTACT_FORM?: string;
  CONTACT_INPUT_CONTAINER?: string;
  CONTACT_INPUT_LABEL?: string;
  CONTACT_INPUT_TEXT?: string;
  CONTACT_TEXTAREA?: string;
  CONTACT_BUTTON?: string;

  // MAIN-HEADER:
  'main-header'?: string;
  'main-header-button'?: string;
  'main-header-button-bars'?: VisibilityType;
  'main-header-brand'?: string;
  'main-header-nav'?: string;
  'main-header-nav-info'?: string;
  'main-header-nav-info-filter'?: string;
  'main-header-nav-info-name'?: string;
  'main-header-nav-info-description'?: string;
  'main-header-nav-info-jslogo'?: string;
  'main-header-nav-info-linkedin'?: string;
  'main-header-nav-info-github'?: string;
  'main-header-nav-ul'?: string;
  'main-header-nav-ul-li'?: string;
  'main-header-nav-ul-li-anchor'?: string;
  'main-header-nav-ul-li-anchor-icon-container'?: string;
  'main-header-nav-ul-li-anchor-icon'?: string;

  // SECTIONS:
  sections?: string;
  'sections-header'?: string;
  'sections-header-title'?: string;
  'sections-header-icon'?: string;

  // PROJECTS SECTION:
  'project-section-container'?: string;
  'project-section-ul'?: string;
  'project-section-footer'?: string;

  // HACKERRANK SECTION:

  // SKILLS SECTION:

  // CONTACT SECTION:
}

function stylesClosure() {
  let styles: ElementStyles;
  return function (newStyles?: ElementStyles) {
    if (newStyles) styles = newStyles;
    return function (): ElementStyles {
      return styles;
    };
  };
}

Document.prototype.setStyles = stylesClosure();
Document.prototype.getStyles = Document.prototype.setStyles();
