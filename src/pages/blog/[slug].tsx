import {GetServerSideProps} from 'next';
import Link from 'next/link';
import {Fragment, VFC} from 'react';
import ButtonLink from '../../components/LinkButton';
import getBlogPost from '../../utils/getBlogPost';
import {ContentfulBlogPost} from '../../utils/types';

const BlogEntry: VFC<{post: ContentfulBlogPost}> = ({post}) => (
  <article key={post.sys.id}>
    <h1>{post.fields.title}</h1>
    <p>
      <i>{post.fields.description}</i>
    </p>
    {post.metadata.tags.map(tag => (
      <Fragment key={tag.sys.id}>
        <span>#{tag.sys.id}</span>{' '}
      </Fragment>
    ))}
    {post.fields.content.map(ref => (
      <div key={ref.sys.id}>
        {ref.sys.contentType.sys.id === 'text' ? (
          <p>{ref.fields.text}</p>
        ) : (
          <p>UNKNOWN CONTENT TYPE</p>
        )}
      </div>
    ))}
    <div>
      About the Author
      <div>TODO</div>
      <Link href="/contact" passHref>
        <ButtonLink className="my-4">Work With Me</ButtonLink>
      </Link>
    </div>
  </article>
);

export const getServerSideProps: GetServerSideProps = async context => {
  const post = await getBlogPost(context.query.slug as string);

  return {
    props: {post},
    notFound: !post,
  };
};

export default BlogEntry;
