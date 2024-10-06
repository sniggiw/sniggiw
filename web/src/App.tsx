import Navbar from "./components/Navbar";
import Activities from "./components/Activities";

function App() {
    return (
        <>
            <Navbar />
            <div className="container mb-60">
                <Activities />
            </div>
        </>
    );
}

export default App;
