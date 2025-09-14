import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./pages/Navigation";
import Logo from "./pages/Logo";
import Footer from "./pages/Footer";
import VideoGallery from "./pages/VideoGallery";

function App() {
  return (
    <Router>
      {/* Main container with full height */}
      <div className="flex flex-col w-full min-h-screen bg-slate-700">
        {/* Fixed header elements */}
        <Navigation />
        <Logo />

        {/* Add 'flex-grow' to make the content expand */}
        <div className="flex-grow flex">
          <Routes>
            <Route path="/" element={<VideoGallery />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
