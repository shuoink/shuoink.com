import {Entry} from 'contentful';

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
