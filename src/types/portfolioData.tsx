export interface WorkItem {
  id: string;
  title: string;
  headingDescription: string;
  description: string;
  url: string;
  image: string;
  category: string;
  language: string[];
  repository: string;
  role: string;
  members: memberItem[];
}

export interface memberItem {
  name: string;
  url: string;
}

export interface TechItem {
  name: string;
}

export interface ArtItem {
  title: string;
  image: string;
  category: string;
}
