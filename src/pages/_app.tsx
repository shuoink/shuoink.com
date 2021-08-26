import '../styles/styles.css';
import type {AppProps} from 'next/app';
import {Header} from '../components/Header';
import Script from 'next/script';

const App = ({Component, pageProps}: AppProps) => (
  <div>
    <Script
      data-host="https://microanalytics.io"
      data-dnt="false"
      src="https://microanalytics.io/js/script.js"
      id="ZwSg9rf6GA"
      async
      defer
      strategy="afterInteractive"
    />
    <Header />
    <main>
      <Component {...pageProps} />
    </main>
  </div>
);

export default App;
