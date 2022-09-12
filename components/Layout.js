import Head from "next/head";
import Footer from "./Footer";
import Left from "./Left";
import Navbar from "./Navbar";
import Right from "./Right";

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
                <Left/>
                {children}
                <Footer />
                <Right />
            </div>
        </div>
    );
};

export default Layout;