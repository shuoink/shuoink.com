import {GetStaticProps} from 'next';
import {VFC} from 'react';
import Masonry from '../../components/Masonry';
import Tile from '../../components/Tile';
import {BlogPost, getBlogPosts} from '../../utils/blogPosts';
import Image from 'next/image';
import {format} from 'date-fns';
import Section from '../../components/Section';
import Heading from '../../components/Heading';
import Head from 'next/head';

const Blog: VFC<{posts: BlogPost[]}> = ({posts}) => {
  return (
    <>
      <Head>
        <title>Blog - Stephen Sorensen | Shuoink LLC</title>
        <meta
          name="description"
          content="Stephen Sorensen (Shuoink LLC) is a freelance javascript developer specializing in JavaScript, Node, and React."
        />
        <link rel="canonical" href="https://stephensorensen.com" />
      </Head>
      <Section className="px-4 xl:px-0 xl:w-10/12 mx-auto my-16">
        <Heading>Blog Posts</Heading>
        <Masonry columns={5}>
          {posts?.map(post => (
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
