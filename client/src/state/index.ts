const stateEvent = new Event('state', { bubbles: true });

const INITIAL_STATE: StateType = {
  defaults: {
    social: [],
    thisAppRepoLink: '',
  },
  projects: [],
  hackerrank: {
    badges: [],
    verifiedSkills: [],
    profileLink: '',
  },
  skills: [],
};

type AllFetchDataType = Partial<DefaultsType> & Partial<ProjectType[]> & Partial<HackerrankType> & Partial<SkillType[]>;

async function fetchData(route: string): Promise<AllFetchDataType | Error> {
  const url = 'http://localhost:4000/';
  try {
    const resp = await fetch(`${url}${route}`);
    if (resp.ok) {
      const data: AllFetchDataType = await resp.json();
      return data;
    }
    throw new Error();
  } catch (error) {
    throw new Error("There's something wrong fetching data!!");
  }
}

(async function () {
  let state: StateType = INITIAL_STATE;
  try {
    state.defaults = (await fetchData('defaults')) as DefaultsType;
    state.projects = (await fetchData('projects')) as ProjectType[];
    state.hackerrank = (await fetchData('hackerrank')) as HackerrankType;
    state.skills = (await fetchData('skills')) as SkillType[];
    Document.prototype.updateState(state);
    globalThis.document.dispatchEvent(stateEvent);
  } catch (error) {
    globalThis.alert(error);
  }
})();

// (async function fetchData() {
//   let state: StateType = INITIAL_STATE;
//   let data = {};
//   let response = await fetch('http://localhost:3001/defaults');
//   if (response.ok) {
//     data = await response.json();
//     state.defaults = <DefaultsType>data;
//   }
//   response = await fetch('http://localhost:3001/projects');
//   if (response.ok) {
//     data = await response.json();
//     state.projects = <ProjectType[]>data;
//   }
//   response = await fetch('http://localhost:3001/hackerrank');
//   if (response.ok) {
//     data = await response.json();
//     state.hackerrank = <HackerrankType>data;
//   }
//   response = await fetch('http://localhost:3001/skills');
//   if (response.ok) {
//     data = await response.json();
//     state.skills = <SkillType[]>data;
//   }

//   console.log(state);
//   Document.prototype.updateState(state);
//   globalThis.document.dispatchEvent(stateEvent);
// });
