import type {GetStaticProps} from 'next';
import type {VFC} from 'react';
import Image from 'next/image';
import {format} from 'date-fns';
import Masonry from '../../components/Masonry';
import Tile from '../../components/Tile';
import type {BlogPost} from '../../utils/blogPosts';
import {getBlogPosts} from '../../utils/blogPosts';
import Section from '../../components/Section';
import Heading from '../../components/Heading';
import MetaTags from '../../components/MetaTags';

const Blog: VFC<{posts: Array<BlogPost>}> = ({posts}) => {
  return (
    <>
      <MetaTags
        title="Blog"
        description="Stephen Sorensen (Shuoink LLC) is a freelance javascript developer specializing in JavaScript, Node, and React."
        pathname="/blog"
      />
      <Section className="px-4 xl:px-0 xl:w-10/12 mx-auto my-16">
        <Heading>Blog Posts</Heading>
        <Masonry columns={5}>
          {posts.map(post => (
            <Tile
              key={post.slug}
              href={`/blog/${post.slug}`}
              body={<p>{post.description}</p>}
              title={post.title}
              img={
                <Image
                  src={post.imageUrl}
                  alt={post.imageAlt}
                  width={350}
                  height={(350 / post.imageWidth) * post.imageHeight}
                />
              }
              footer={
                <time className="block w-full text-right">
                  {format(post.pubDate, 'MMM dd, yyyy')}
                </time>
              }
            />
          ))}
        </Masonry>
      </Section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const posts = await getBlogPosts();
  return {
    props: {
      posts: posts.map(({content, ...post}) => post),
    },
  };
};

export default Blog;
