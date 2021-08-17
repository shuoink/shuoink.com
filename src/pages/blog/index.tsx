import Link from 'next/link';
import {VFC} from 'react';
import ButtonLink from '../../components/LinkButton';
import getBlogPosts from '../../utils/getBlogPosts';
import {ContentfulBlogPost} from '../../utils/types';

const Blog: VFC<{blogPosts?: ContentfulBlogPost[]}> = ({blogPosts}) => {
  console.log({blogPosts});
  return (
    <div>
      <ul>
        {blogPosts?.map(post => (
          <li key={post.sys.id}>
            <Link href={`/blog/${post.fields.slug}`}>
              <a>{post.fields.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/contact" passHref>
        <ButtonLink className="my-4">Work With Me</ButtonLink>
      </Link>
    </div>
  );
};

export const getServerSideProps = async () => {
  return {props: {blogPosts: await getBlogPosts()}};
};

export default Blog;
