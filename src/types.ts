export interface LoadingType {
  name: string;
  position: string;
}

export interface NavLeftType {
  links: Array<{ img: string; url: string }>;
}

export interface AboutType {
  name: string;
  position: string;
  introduce: string;
  links: Array<{ text: string; link: string }>;
}

export interface SkillsType {
  title: string;
  description: string;
  items: Array<{ name: string; skill: Array<string> }>;
}

export interface ExperienceItemType {
  position: string;
  company: string;
  time: string;
  project: Array<string>;
  tags: Array<string>;
}
export interface ExperienceType {
  title: string;
  subTitle: string;
  description: string;
  list: Array<ExperienceItemType>;
}

export interface WorksItemType {
  name: string;
  date?: string;
  skills: Array<string>;
  tags: Array<string>;
  img: string;
  link?: string;
  github?: string;
}
export interface WorksType {
  title: string;
  description: string;
  projects: Array<WorksItemType>;
}
