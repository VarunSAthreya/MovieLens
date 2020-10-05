import PropTypes from 'prop-types';

import Footer from '../components/footer';
import Navbar from '../components/navbar';

import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }) => {
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

App.propTypes = {
    Component: PropTypes.node.isRequired,
    pageProps: PropTypes.any.isRequired,
};

export default App;
