import React from "react";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Hero from "./components/Hero";
import NavigationBar from "./components/NavigationBar";
import Newsletter from "./components/Newsletter";
import Portfolio from "./components/Portfolio";
import Products from "./components/Products";
import Services from "./components/Services";
export default function App(){
  return(
    <>
    <ScrollTop />
    <NavigationBar />
    <Hero/>
    <Services/>
    <Portfolio/>
    <Feedback />
    <Products/>
    <Newsletter/>
    <Footer/>
    </>
  );
}