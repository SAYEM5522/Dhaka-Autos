import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import AboutUs from "./component/about-us/AboutUs";
import Contact from "./component/contact-us/Contact";
import Service from "./component/Services/Service";
import Preorder from "./component/Preorder/Preorder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/preorder" element={<Preorder />} />
        <Route path="/services" element={<Service />} />


      </Routes>
    </Router>
  );
}

export default App;
