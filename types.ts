import type { ParsedContent, MarkdownParsedContent } from '@nuxt/content/dist/runtime/types';
export type Section = "journal" | "work" | "themes" | "tutorials" | "photos";
export type WorkType = "WordPress" | "Jamstack" | "Website" | "Webapp" | "Web/UX Design";

export interface Page extends MarkdownParsedContent {
  title: string;
  description: string;
  excerpt: string;
  draft: boolean;
  image?: string;
}

export interface Post extends MarkdownParsedContent {
  title: string;
  excerpt: string;
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
  excerpt: string;
  url: string;
  image?: string;
  thumb?: string;
  gallery: string[];
  video?: string;
}

export interface Theme extends MarkdownParsedContent {
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  tags: string[];
}

export interface Tutorial extends MarkdownParsedContent {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  tags: string[];
}

export interface Album extends ParsedContent {
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  category: string;
  tags: string[];
  gallery: string[];
}

export interface Video extends ParsedContent {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  image?: string;
  video_id?: string;
  video_url?: string;
  duration?: string;
  start?: string;
  custom_class?: string;
}

export type PostPreview = Omit<Post, 'body'>;
export type TutorialPreview = Omit<Tutorial, 'body'>;
export type VideoPreview = Omit<Video, 'body'>;
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