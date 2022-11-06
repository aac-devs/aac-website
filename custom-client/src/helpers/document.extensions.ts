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
