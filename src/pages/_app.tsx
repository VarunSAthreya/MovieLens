import ProgressBar from '@badrap/bar-of-progress';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../css/tailwind.css';

const progress = new ProgressBar({
    color: '#60A5FA',
    className: 'bar-of-progress',
    delay: 100,
    size: 2,
});

if (typeof window !== 'undefined') {
    progress.start();
    progress.finish();
}

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', () => {
    progress.finish();
    window.scrollTo(0, 0);
});
Router.events.on('routeChangeError', progress.finish);

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <>
            <Navbar />
            <main id="content">
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
};

export default App;
