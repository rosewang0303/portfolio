export interface LoadingType {
  name: string;
  position: string;
}

export interface navLeftType {
  links: Array<{ url: string; img: string }>;
}

export interface AboutType {
  name: string;
  title: string;
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
  works: Array<ExperienceItemType>;
}
