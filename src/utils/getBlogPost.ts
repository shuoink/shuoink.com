import client from './contentful-client';
import {ContentfulBlogPostFields} from './types';

const getBlogPost = async (slug: string) => {
  const result = await client.getEntries<ContentfulBlogPostFields>({'fields.slug': {slug}});
  return result.items[0];
};

export default getBlogPost;
