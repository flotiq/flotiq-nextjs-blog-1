import '../styles/globals.css';
import React from 'react';

const MyApp = ({ Component, pageProps }) => (
    <div>
        <Component {...pageProps} />
    </div>
);

export default MyApp;
