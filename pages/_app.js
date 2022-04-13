import '../styles/globals.css'
import Layout from "../layouts/layout";

function MyApp({ Component, pageProps }) {

    return (
        <Layout title={pageProps.title}>
            <div className="bg-dark-blue">
                <Component {...pageProps} />
            </div>
        </Layout>
    )
}

export default MyApp;
