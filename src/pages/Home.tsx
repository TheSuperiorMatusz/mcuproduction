import React from 'react';
import '../assets/styles/pages/Home.css';
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import AnimatedText from "../components/information/InformationSideComponets";
import AboutMCU from "../components/information/AboutMCU";
import PhasesDisplayed from "../components/information/PhasesDisplayed";
import {MovieDisplayer} from "../components/ProductionDisplayer/MoviesDisplayer/MovieDisplayer";
import {TvshowDisplayer} from "../components/ProductionDisplayer/TvshowsDisplayer/TvshowDisplayer";
import Purpose from "../components/information/Purpose";

function Home() {
    return (
    <div className="App">
      <Header/>
      <AnimatedText/>
      <Purpose/>
      <AboutMCU/>
      <PhasesDisplayed/>
      <MovieDisplayer/>
      <TvshowDisplayer/>
      <Footer/>
    </div>
  );
}

export default Home;
