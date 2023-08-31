import React, { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/layout/Header";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
