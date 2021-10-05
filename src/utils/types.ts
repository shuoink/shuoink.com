import type {Entry} from 'contentful';

export type DockConfig = {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  preserveBorder?: true;
};

export type ContentfulTextFields = {
  text: string;
};

export type ContentfulText = Entry<ContentfulTextFields>;

export type ContentfulBlogPostFields = {
  title: string;
  slug: string;
  description: string;
  content: Array<ContentfulText>;
};

export type ContentfulBlogPost = Entry<ContentfulBlogPostFields>;
