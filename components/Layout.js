import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, title }) => {
    return (
        <div className="layout">
            <Head>
                <title>{title ? title : 'Suronjit Pal Portfolio'}</title>
                <meta name="description" content="Suronjit Pal" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className="layout_body">
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;