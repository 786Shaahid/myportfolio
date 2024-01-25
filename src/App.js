import "./App.css";
import HeadersComponent from "./components/HeadersComponents/HeadersComponent";
import AboutUs from "./components/BodyComponents/AboutUs";
import Portfolio from "./components/BodyComponents/Porfolio";
import Contact from "./components/BodyComponents/Contact";
import Footer from "./components/BodyComponents/Footer";
import React from 'react'
// import ReactDOM from 'react-dom'
function App() {
  return (
    <div>
      <HeadersComponent />
      <AboutUs />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;