import '../styles/styles.css';
import type {AppProps} from 'next/app';
import Header, {LinkDescriptor} from '../components/Header';
import Script from 'next/script';
import Footer from '../components/Footer';
import Head from 'next/head';

const LINKS: Array<LinkDescriptor> = [
  {href: '/', text: 'Home'},
  {href: '/#about', text: 'About'},
  {href: '/#portfolio', text: 'Portfolio'},
  {href: '/blog', text: 'Blog'},
  {href: '/#contact', text: 'Contact'},
];

const App = ({Component, pageProps}: AppProps) => (
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
