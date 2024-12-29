import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './component/Navbar';
import { Details } from './component/Details';
import { Video } from './component/Video';
import { Charts } from './component/Charts';
import { About } from './component/About';
import { Footer } from './component/Footer';
import {News} from "./pages/News";
import {Climate, NewsOne} from "./pages/Climate";
import {Temperatures} from "./pages/Temperatures";
import {Innovation} from "./pages/Innovation";
import {LiveCam} from "./pages/LiveCam";
import {Photoes} from "./pages/Photoes";
import {Contact} from "./pages/Contact";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />

                {/* Define Routes */}
                <Routes>
                    <Route path="/" element={<Details />} />
                    <Route path="/charts" element={<Charts />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/video" element={<Video />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/climate" element={<Climate />} />
                    <Route path="/temperatures" element={<Temperatures />} />
                    <Route path="/innovation" element={<Innovation />} />
                    <Route path="/liveCam" element={<LiveCam />} />
                    <Route path="/photos" element={<Photoes />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
