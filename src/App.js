import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./component/common/Header";
import Footer from "./component/common/Footer";

import Home from "./component/home/Home";
import AboutUs from "./component/about-us/AboutUs";
import Contact from "./component/contact-us/Contact";
import Service from "./component/Services/Service";
import PreOrder from "./component/PreOrder/PreOrder";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/preorder" element={<PreOrder />} />
        <Route path="/services" element={<Service />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
