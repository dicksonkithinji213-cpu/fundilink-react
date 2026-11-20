import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";
import Providers from "./components/Providers.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/contact.jsx";
import ProviderDetails from "./pages/ProviderDetails.jsx";
import AddProvider from "./pages/AddProvider.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/providers/:id" element={<ProviderDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-provider" element={<AddProvider />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
