import React from "react";
import Footer from "./footer";
import Header from "./header";

interface PropTypes {
    children: JSX.Element;
}

function Layout({ children }: PropTypes) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
