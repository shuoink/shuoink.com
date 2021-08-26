import '../styles/styles.css';
import type {AppProps} from 'next/app';
import {Header} from '../components/Header';

const App = ({Component, pageProps}: AppProps) => (
  <div>
    <Header />
    <main>
      <Component {...pageProps} />
    </main>
  </div>
);

export default App;
