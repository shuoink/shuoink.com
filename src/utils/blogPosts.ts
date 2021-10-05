import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';

const BLOG_POSTS_DIR = path.join(process.cwd(), 'blog');

export type BlogPost = {
  categories: Array<string>;
  description: string;
  pubDate: number;
  title: string;
  content: string;
  slug: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
};

export const getBlogPost = async (slug: string): Promise<BlogPost> => {
  const fullPath = path.join(BLOG_POSTS_DIR, `${slug}.mdx`);
  const fileContents = await fs.promises.readFile(fullPath, 'utf-8');
  const {data, content} = grayMatter(fileContents) as {
    data: {[key: string]: unknown};
    content: string;
  };

  if (
    typeof data.categories !== 'string' ||
    typeof data.description !== 'string' ||
    typeof data.pubDate !== 'string' ||
    typeof data.title !== 'string' ||
    typeof data.imageUrl !== 'string' ||
    typeof data.imageAlt !== 'string' ||
    typeof data.imageWidth !== 'string' ||
    typeof data.imageHeight !== 'string' ||
    !content
  ) {
    throw new Error(`Incomplete Blog Post: ${slug}`);
  }

  return {
    slug,
    categories: data.categories.trim().split(/\w*,\w*/u),
    description: data.description,
    title: data.title,
    pubDate: Date.parse(data.pubDate),
    imageUrl: data.imageUrl,
    imageAlt: data.imageAlt,
    imageWidth: Number(data.imageWidth),
    imageHeight: Number(data.imageHeight),
    content,
  };
};

export const getBlogPosts = async (): Promise<Array<BlogPost>> => {
  const files = await fs.promises.readdir(BLOG_POSTS_DIR);
  const posts = await Promise.all(
    files.map(async name =>
      getBlogPost(path.basename(name, path.extname(name)))
    )
  );
  return posts.sort((a, b) => (a.pubDate > b.pubDate ? -1 : 1));
};
