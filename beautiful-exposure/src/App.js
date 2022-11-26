import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutJs"


import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      
      <Routes>
        
      <Route path="/"
        element={<Body/>}/>
        
      <Route path="/AboutUs"
        element={<AboutUs/>}/>

        <Route path="/ContactInfo"
        element={<ContactInfo/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;



    