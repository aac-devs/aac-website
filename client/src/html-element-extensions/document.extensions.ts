// PROJECTS SKELETON TYPES:

type ProjectType = {
  id: number;
  date: string;
  title: string;
  image: string;
  description: {
    front?: string;
    back?: string;
    other?: string;
  };
  links: {
    app: string;
    github: string;
  };
};

// HACKERRANK SKELETON TYPES:

type BadgeType = {
  id: number;
  title: string;
  image: string;
};

type VerifiedSkillType = {
  id: number;
  title: string;
  image: string;
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
  id: number;
  skillTitle: string;
  skillType: TechSkillSet;
  image: string;
};

interface SocialItemType {
  name: string;
  href: string;
  iconClassname: string;
  color: string;
}

interface DefaultsType {
  social: SocialItemType[];
}

// STATE SKELETON TYPES:
// TODO: completar la key "defaults", ya que contendrá más que solo los valores de las redes sociales

interface StateType {
  defaults: DefaultsType;
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
  SOCIAL_ICON_CONTAINER?: string;
  SOCIAL_ICON?: string;

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
  CONTACT_FOOTER_CONTAINER?: string;
  CONTACT_FOOTER_APP_DESCRIPTION?: string;
  CONTACT_FOOTER_APP_RESERVED_RIGHTS?: string;
  CONTACT_CODE_ANCHOR?: string;
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
