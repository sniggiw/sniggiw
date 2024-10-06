import Navbar from "./components/Navbar";
import Activities from "./components/Activities";
import Tips from "./components/Tips";

function App() {
    return (
        <>
            <Navbar />
            <div className="lg:container px-3 mb-60 grid lg:grid-cols-[1fr_auto] items-start gap-6">
                <Activities />
                <Tips className="lg:w-[350px]" />
            </div>
        </>
    );
}

export default App;
