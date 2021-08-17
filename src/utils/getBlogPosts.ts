import client from './contentful-client';
import {ContentfulBlogPostFields} from './types';

const getBlogPosts = async () => {
  const result = await client.getEntries<ContentfulBlogPostFields>({content_type: 'post'});
  return result.items;
};

export default getBlogPosts;
