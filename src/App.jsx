import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
 import Gallery from "./pages/Gallery"
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
// import Volunteers from "./pages/Volunteers";
import ProgramDetails from "./pages/ProgramDetails";
 
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        {/* <Route path="/volunteers" element={<Volunteers />} /> */}
        <Route path="/donate" element={<Donate />} />
        <Route path="/programs/:id" element={<ProgramDetails />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
