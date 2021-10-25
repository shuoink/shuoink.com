import type {GetStaticPaths, GetStaticProps} from 'next';
import type {ComponentType, FC, VFC} from 'react';
import {serialize} from 'next-mdx-remote/serialize';
import {MDXRemote} from 'next-mdx-remote';
import type {PromiseValue} from 'type-fest';
import {format} from 'date-fns';
import {CopyBlock, atomOneDark} from 'react-code-blocks';
import Image from 'next/image';
import {getBlogPost, getBlogPosts} from '../../utils/blogPosts';
import type {BlogPost as $BlogPost} from '../../utils/blogPosts';
import Heading from '../../components/Heading';
import MetaTags from '../../components/MetaTags';

// SEO suggestions from MOZ:
// Broad Keyword Use in Page Title
// Exact Keyword is Used in Page Title
// Keyword Placement in Page Title
// Use Keywords in your URL
// Keywords in the Meta Description
// Optimal Use of Keywords in Header Tags
// Keywords in Image Alt Attribute

type Properties = {
  meta: Omit<$BlogPost, 'content'>;
  content: PromiseValue<ReturnType<typeof serialize>>;
};

const Paragraph: FC<JSX.IntrinsicElements['p']> = properties => (
  <p {...properties} />
);

const bindProperties = <ALL_PROPS, BOUND_PROPS extends ALL_PROPS>(
  boundProperties: BOUND_PROPS,
  Comp: ComponentType<ALL_PROPS>,
  displayName: string
) => {
  const NewComp: FC<Omit<ALL_PROPS, keyof BOUND_PROPS>> = properties => (
    <Comp {...boundProperties} {...properties} />
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
  const match =
    className != null ? /language-(?<lang>\w+)/u.exec(className) : null;
  return <Code lang={match?.groups?.lang}>{children}</Code>;
};
CodeAdapter.displayName = 'CodeAdapter';

const components = {
  h1: bindProperties({level: 1}, Heading, 'h1'),
  h2: bindProperties({level: 2}, Heading, 'h2'),
  h3: bindProperties({level: 3}, Heading, 'h3'),
  h4: bindProperties({level: 4}, Heading, 'h4'),
  h5: bindProperties({level: 5}, Heading, 'h5'),
  h6: bindProperties({level: 6}, Heading, 'h6'),
  p: Paragraph,
  code: CodeAdapter,
};

const BlogPost: VFC<Properties> = ({
  meta: {slug, title, categories, description, pubDate, imageUrl, imageAlt},
  content,
}) => (
  <>
    <MetaTags
      title={title}
      description={description}
      pathname={`/blog/${slug}`}
    />
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
    </div>
  </>
);

export const getStaticProps: GetStaticProps<Properties> = async context => {
  const slug = context.params?.slug;
  const post = slug != null ? await getBlogPost(slug as string) : undefined;
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
