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

type SkillType = {
  skillTitle: string;
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

interface ElementStyles {
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
  'main-header-nav-ul-li-anchor-icon'?: string;

  // SECTIONS:
  sections?: string;
  'sections-header'?: string;
  'sections-header-title'?: string;

  // PROJECTS SECTION:

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
