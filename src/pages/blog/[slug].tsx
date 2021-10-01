import {GetStaticPaths, GetStaticProps} from 'next';
import {ComponentProps, ComponentType, FC, VFC} from 'react';
import Heading from '../../components/Heading';
import {
  getBlogPost,
  BlogPost as $BlogPost,
  getBlogPosts,
} from '../../utils/blogPosts';
import Head from 'next/head';
import {serialize} from 'next-mdx-remote/serialize';
import {MDXRemote} from 'next-mdx-remote';
import {PromiseValue} from 'type-fest';
import About from '../../content/About';
import {format} from 'date-fns';
import {CopyBlock, atomOneDark} from 'react-code-blocks';
import Image from 'next/image';

type Props = {
  meta: Omit<$BlogPost, 'content'>;
  content: PromiseValue<ReturnType<typeof serialize>>;
};

const Paragraph: FC<JSX.IntrinsicElements['p']> = props => <p {...props} />;

const bindProps = <ALL_PROPS, BOUND_PROPS extends ALL_PROPS>(
  boundProps: BOUND_PROPS,
  Comp: ComponentType<ALL_PROPS>,
  displayName: string
) => {
  const NewComp: FC<Omit<ALL_PROPS, keyof BOUND_PROPS>> = props => (
    <Comp {...boundProps} {...props} />
  );
  NewComp.displayName = displayName;
  return NewComp;
};

const Code: FC<{lang?: string}> = ({lang, children}) => (
  <CopyBlock
    text={children}
    language="javascript"
    showLineNumbers
    wrapLines
    theme={atomOneDark}
    codeBlock
  />
);

const CodeAdapter: FC<JSX.IntrinsicElements['code']> = ({
  className,
  children,
}) => {
  const match = className ? /language-(\w+)/.exec(className) : null;
  return <Code lang={match?.[1]}>{children}</Code>;
};
CodeAdapter.displayName = 'CodeAdapter';

const components = {
  h1: bindProps({level: 1}, Heading, 'h1'),
  h2: bindProps({level: 2}, Heading, 'h2'),
  h3: bindProps({level: 3}, Heading, 'h3'),
  h4: bindProps({level: 4}, Heading, 'h4'),
  h5: bindProps({level: 5}, Heading, 'h5'),
  h6: bindProps({level: 6}, Heading, 'h6'),
  p: Paragraph,
  code: CodeAdapter,
};

const BlogPost: VFC<Props> = ({
  meta: {slug, title, categories, description, pubDate, imageUrl, imageAlt},
  content,
}) => (
  <>
    <Head>
      {/* TODO: create a <MetaTags /> component with required props to ensure every page has all the needed SEO meta tags */}
      <title>{title} - Stephen Sorensen | Shuoink LLC</title>
      <meta name="keywords" content={categories.join(',')} />
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://stephensorensen.com/blog/${slug}`} />
    </Head>
    <div className="space-y-16">
      <article className="leading-loose">
        <div className="relative h-[50vh]">
          <Image
            src={imageUrl}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="px-4 xl:px-0 xl:w-1/2 mx-auto space-y-8">
          <Heading>{title}</Heading>
          <time>{format(pubDate, 'MMM dd, yyyy')}</time>
          <MDXRemote {...content} components={components} />
        </div>
      </article>
      <About />
    </div>
  </>
);

export const getStaticProps: GetStaticProps<Props> = async context => {
  const slug = context.params?.slug;
  console.log(context.params);
  const post = slug ? await getBlogPost(slug as string) : undefined;
  console.log({post});
  if (!post) {
    return {notFound: true};
  }
  const {content, ...meta} = post;
  return {
    props: {content: await serialize(content), meta},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getBlogPosts();
  return {
    paths: posts.map(post => ({params: {slug: post.slug}})),
    fallback: false,
  };
};

export default BlogPost;
