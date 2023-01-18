import React from 'react';
import '../assets/styles/App.css';

import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import AnimatedText from "../components/InformationComponents/InformationSideComponets";
import AboutMCU from "../components/InformationComponents/AboutMCU";
import PhasesDisplayed from "../components/InformationComponents/PhasesDisplayed";
import {MovieDisplayer} from "../components/ProductionDisplayer/MoviesDisplayer/MovieDisplayer";
import {TvshowDisplayer} from "../components/ProductionDisplayer/TvshowsDisplayer/TvshowDisplayer";

function Home() {
    return (
    <div className="App">
      <Header/>
      <AnimatedText/>
      <AboutMCU/>
      <PhasesDisplayed/>
      <MovieDisplayer/>
      <TvshowDisplayer/>
      <Footer/>
    </div>
  );
}

export default Home;
