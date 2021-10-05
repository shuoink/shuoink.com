import type {VFC} from 'react';

const MetaTags: VFC<{
  title: string;
  description: string;
  pathname: string;
}> = ({title, description, pathname}) => {
  const titleSuffix = ' - Stephen Sorensen | Shuoink';
  if (title.length > 60 - titleSuffix.length) {
    throw new Error('title is too long!');
  }
  return (
    <>
      <title key="title">
        {title}
        {titleSuffix}
      </title>
      <meta key="description" name="description" content={description} />
      <link
        key="canonical"
        rel="canonical"
        href={`https://stephensorensen.com${pathname}`}
      />
    </>
  );
};

export default MetaTags;
