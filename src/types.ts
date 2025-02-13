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
  works: Array<ExperienceItemType>;
}
