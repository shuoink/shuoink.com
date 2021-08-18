import {createClient} from 'contentful';
import {CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID} from '../constants';

const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

export default client;
