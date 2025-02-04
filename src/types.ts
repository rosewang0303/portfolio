export interface LoadingType {
  name: string;
  title: string;
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
