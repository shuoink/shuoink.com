import type {VFC} from 'react';
import Head from 'next/head';

const MetaTags: VFC<{
  title: string;
  description: string;
  pathname: string;
}> = ({title, description, pathname}) => {
  const titleSuffix = 'Custom ReactJS Development - Stephen Sorensen | Shuoink';
  const fullTitle = `${title}${titleSuffix}`;
  if (process.env.NODE_ENV === 'development' && fullTitle.length > 60) {
    // eslint-disable-next-line no-console -- needed
    console.warn(`Page title too long (${fullTitle.length} > 60 chars)`);
  }
  return (
    <Head>
      <title key="title">{fullTitle}</title>
      <meta key="description" name="description" content={description} />
      <link
        key="canonical"
        rel="canonical"
        href={`https://stephensorensen.com${pathname}`}
      />
    </Head>
  );
};

export default MetaTags;
