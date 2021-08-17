import '../styles/styles.css';
import type {AppProps} from 'next/app';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';

const App = ({Component, pageProps}: AppProps) => (
  <div>
    <Header />
    <main>
      <Component {...pageProps} />
    </main>
    <Footer />
  </div>
);

export default App;
