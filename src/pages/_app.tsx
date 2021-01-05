import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

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
