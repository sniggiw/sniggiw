import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FrontLayout = React.forwardRef<HTMLDivElement, any>(({ children }, ref) => {
    return (
        <div ref={ref}>
            <Navbar />
            <div className="container mb-12">{children}</div>
            <Footer />
        </div>
    );
});

export default FrontLayout;
