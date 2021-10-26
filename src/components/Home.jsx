import React from "react";
import Navbar from "./global-components/Navbar";
import Banner from './section-components/Banner';
import FindFood from './section-components/FindFood';
import Services from "./section-components/Services";
import Map from './section-components/Map';
import Cities from "./section-components/Cities.jsx"
import Footer from "./global-components/Footer";
import SectionFooter from "./global-components/SectionFooter";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <FindFood/>
      <Services/>
      <Map/>
      <Cities/>
      <Footer/>
      <SectionFooter/>
    </div>
  );
};

export default Home;
