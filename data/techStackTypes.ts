// Inside /data/techStackTypes.ts

export interface Technology {
  name: string;
  icon: string;
}

export interface Category {
  name: string;
  description: string;
  skills: string[];
}

export interface TechStackData {
  technologies: Technology[];
  categories: Category[];
}