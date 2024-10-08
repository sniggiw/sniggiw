import { Outlet, createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/front")({
    component: () => (
        <div>
            <Navbar />
            <div className="lg:container mx-3 mb-12">
                <Outlet />
            </div>
            <Footer />
        </div>
    ),
});
