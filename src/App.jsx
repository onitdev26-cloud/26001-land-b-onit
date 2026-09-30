import { Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";

import Home from "./pages/Home";
import PortfolioDetail from "./pages/PortfolioDetail";
import Contact from "./pages/Contact";
import ContactComplete from "./pages/ContactComplete";

function App() {
  return (
    <>
      <ScrollToHash />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/complete" element={<ContactComplete />} />
      </Routes>
    </>
  );
}

export default App;