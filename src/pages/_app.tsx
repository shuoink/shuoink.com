import '../styles/styles.css';
import type {AppProps} from 'next/app';
import Script from 'next/script';
import Head from 'next/head';
import type {VFC} from 'react';
import type {LinkDescriptor} from '../components/Header';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LINKS: Array<LinkDescriptor> = [
  {href: '/', text: 'Home'},
  {href: '/#about', text: 'About'},
  {href: '/#portfolio', text: 'Portfolio'},
  {href: '/#pricing', text: 'Pricing'},
  {href: '/blog', text: 'Blog'},
  {href: '/#contact', text: 'Contact'},
];

const App: VFC<AppProps> = ({Component, pageProps}) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DEMCT5610Z"
        strategy="afterInteractive"
      />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-DEMCT5610Z');`,
        }}
      />

      <Header links={LINKS} />
      <main id="main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  </>
);

export default App;
