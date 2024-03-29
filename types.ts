import type { ParsedContent, MarkdownParsedContent } from '@nuxt/content/dist/runtime/types';
export type Section = "journal" | "work" | "themes" | "tutorials" | "photos";
export type WorkType = "WordPress" | "Jamstack" | "Gridsome" | "Nuxt" | "Design" | "Joomla";

export interface Page extends MarkdownParsedContent {
  title: string;
  description: string;
  draft: boolean;
  image?: string;
}

export interface Post extends MarkdownParsedContent {
  title: string;
  description: string;
  date: string;
  image?: string;
  tags: string[];
}

export interface Portfolio extends MarkdownParsedContent {
  id?: string;
  title: string;
  slug: string;
  status: string;
  date: string;
  draft: boolean;
  type: WorkType;
  tags: string[];
  services: string[];
  company?: string;
  contact?: string;
  description: string;
  url: string;
  image?: string;
  thumb?: string;
  gallery: string[];
  video?: string;
}

export interface Theme extends MarkdownParsedContent {
  id?: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string[];
  platform: string;
  demo_url: string;
  repo_url: string;
  download_theme: string;
  download_source: string;
  requirements?: string;
  release_date?: string;
  image?: string;
  gallery?: string[];
}

export interface Tutorial extends MarkdownParsedContent {
  id?: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  image?: string;
  thumb?: string;
  tags: string[];
  topics: string[];
  topic: string;
  category: string;
  type: string;
  published: boolean;
  difficulty: string;
}

export interface Album extends MarkdownParsedContent {
  id?: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  category: string;
  tags: string[];
  gallery: string[];
}

export interface Video extends ParsedContent {
  id?: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  image?: string;
  video_id?: string;
  video_url?: string;
  duration?: string;
  start?: string;
}

export type PostPreview = Omit<Post, 'body'>;
export type TutorialPreview = Omit<Tutorial, 'body'>;
export type PortfolioPreview = Omit<Portfolio, 'body'>;
export type AlbumPreview = Omit<Album, 'body'>;
export type ThemePreview = Omit<Theme, 'body'>;

export interface Subnav {
  url: string,
  text: string,
  title?: string,
}

export interface Navigation {
  url: string,
  text: string,
  title?: string,
  icon?: string,
  subnav?: Array<String>,
}