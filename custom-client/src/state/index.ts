const stateEvent = new Event('state', { bubbles: true });

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  PROJECTS

const PROJECTS: ProjectType[] = [
  {
    projectId: 1,
    projectDate: new Date('9/1/21'),
    projectTitle: 'Wizetube App',
    projectImage:
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1663975746/aac-website/projects/youtubeclone_ypszxw.png',
    projectDescription: {
      front: 'React, Context API, StyledComponents',
      back: 'Youtube Data API v3, Firebase',
    },
    projectSocialMediaLinks: {
      github: '#',
      app: '#',
    },
  },
  {
    projectId: 2,
    projectDate: new Date('5/1/21'),
    projectTitle: 'Diary App',
    projectImage:
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1621513713/aac-website/projects/DiaryApp_upj8bb.png',
    projectDescription: {
      front: 'React, Redux, Material UI',
      back: 'Node.js, Express, PosgreSQL - Sequelize',
    },
    projectSocialMediaLinks: {
      github: '#',
      app: '#',
    },
  },
  {
    projectId: 3,
    projectDate: new Date('4/1/21'),
    projectTitle: 'Videogames App',
    projectImage:
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1663975746/aac-website/projects/videogames_lzvq9a.png',
    projectDescription: {
      front: 'React, Redux, StyledComponents',
      back: 'Node.js, Express, PosgreSQL - Sequelize',
      other: 'RAWG API',
    },
    projectSocialMediaLinks: {
      github: '#',
      app: '#',
    },
  },
];

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  BADGES

const BADGES: BadgeType[] = [
  {
    badgeTitle: 'Problem Solving',
    badgeImage:
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1663976076/aac-website/hackerrank/badges/prob_xskaux.png',
  },
  {
    badgeTitle: 'Days of Code',
    badgeImage:
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1663976163/aac-website/hackerrank/badges/days_gkyvzu.png',
  },
  {
    badgeTitle: 'C Language',
    badgeImage:
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1663976219/aac-website/hackerrank/badges/clan_l5vxmj.png',
  },
  {
    badgeTitle: 'C++',
    badgeImage:
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1663976163/aac-website/hackerrank/badges/cpp_udyfbk.png',
  },
];

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  VERIFIED SKILLS

const VERIFIED_SKILLS: VerifiedSkillType[] = [
  {
    verTitle: 'JavaScript - Basic',
    verImage:
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1663976280/aac-website/hackerrank/verified%20skills/javascript_clbbea.png',
  },
  {
    verTitle: 'React - Basic',
    verImage:
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1663976280/aac-website/hackerrank/verified%20skills/react_roravl.png',
  },
];

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  SKILLS

const SKILLS: SkillType[] = [
  {
    skillTitle: 'JavaScript',
    skillImage: 'https://res.cloudinary.com/aac-devs-data/image/upload/v1619759284/aac-website/skills/js2_uzcztc.png',
  },
  {
    skillTitle: 'TypeScript',
    skillImage: 'https://res.cloudinary.com/aac-devs-data/image/upload/v1664068659/aac-website/skills/ts_faazhn.png',
  },
  {
    skillTitle: 'Node JS',
    skillImage:
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1664070510/aac-website/skills/Node.js_logo_iwypdj.svg',
  },
  {
    skillTitle: 'C',
    skillImage:
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1664070613/aac-website/skills/unnamed_ymuoby.png',
  },
  {
    skillTitle: 'C++',
    skillImage: 'https://res.cloudinary.com/aac-devs-data/image/upload/v1664068717/aac-website/skills/c_mk8mem.png',
  },
  {
    skillTitle: 'HTML',
    skillImage: 'https://res.cloudinary.com/aac-devs-data/image/upload/v1619358674/aac-website/skills/html2_reyk9y.png',
  },
  {
    skillTitle: 'CSS',
    skillImage: 'https://res.cloudinary.com/aac-devs-data/image/upload/v1619358722/aac-website/skills/css_dykwnz.png',
  },
  {
    skillTitle: 'Git',
    skillImage: 'https://res.cloudinary.com/aac-devs-data/image/upload/v1619358661/aac-website/skills/git_e4nxfn.png',
  },
  {
    skillTitle: 'Github',
    skillImage:
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1619358707/aac-website/skills/github_rbfbqy.png',
  },
  {
    skillTitle: 'React',
    skillImage:
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1619358686/aac-website/skills/react2_kq8ndv.png',
  },
  {
    skillTitle: 'Redux',
    skillImage: 'https://res.cloudinary.com/aac-devs-data/image/upload/v1619358681/aac-website/skills/redux_bnekhs.png',
  },
  {
    skillTitle: 'PostgreSQL',
    skillImage:
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1619359910/aac-website/skills/postgres_2_htrqyd.png',
  },
  {
    skillTitle: 'Styled Components',
    skillImage:
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1619358665/aac-website/skills/1_7jRD5QhgARucFKvRHFxpOg_velwnn.png',
  },
  {
    skillTitle: 'Express',
    skillImage:
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1619358647/aac-website/skills/express_dj1u8e.png',
  },
  {
    skillTitle: 'React Testing Library',
    skillImage:
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1631025986/aac-website/skills/testing_r43rm3.png',
  },
  {
    skillTitle: 'Sequelize ORM',
    skillImage:
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1619358654/aac-website/skills/sequelize_jei6yf.png',
  },
];

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function createFakeData(): StateType {
  console.log('fake date created!!');
  return {
    projects: PROJECTS,
    hackerrank: {
      badges: BADGES,
      verifiedSkills: VERIFIED_SKILLS,
      profileLink: '',
    },
    skills: SKILLS,
  };
}

// TODO: Leer los datos desde el backend y lanzar un evento para actualizar cada sección.

// TODO: La siguiente porción imita la petición de datos desde la API
setTimeout(() => {
  Document.prototype.updateState(createFakeData());
  globalThis.document.dispatchEvent(stateEvent);
  // console.log('event launched!!');
}, 2000);

//   setTimeout(() => {
//     Document.prototype.updateState(createFakeData());
//     globalThis.document.dispatchEvent(stateEvent);
//   }, 3000);
