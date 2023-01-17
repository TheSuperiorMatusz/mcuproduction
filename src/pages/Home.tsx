import React, {useState} from 'react';
import '../assets/styles/App.css';
import MovieFetcher from "../services/dataFetcher/MovieFetcher";
import MovieDisplayed from "../components/ProductionDisplayer/MovieDisplayed";
import {Movie} from "../services/dataFetcher/MovieFetcher";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import AnimatedText from "../components/InformationComponents/InformationSideComponets";
import AboutMCU from "../components/InformationComponents/AboutMCU";
import PhasesDisplayed from "../components/InformationComponents/PhasesDisplayed";
import SeriesFetcher, {TvShow} from "../services/dataFetcher/SeriesFetcher";
import SeriesDisplayed from "../components/ProductionDisplayer/SeriesDisplayed";

function Home() {
  const [movies,setMovies]= useState<Movie [] | null>([]);
  const [shows,setTvShows] = useState<TvShow[] | null>([]);

    return (
    <div className="App">
      <Header/>
      <AnimatedText/>
      <AboutMCU/>
      <PhasesDisplayed/>
      <MovieFetcher endpoint={'/movies'} onDataFetched={setMovies} />
      <SeriesFetcher endpoint={'/tvshows'} onDataFetched={setTvShows}/>
      {movies && <MovieDisplayed data={movies} />}
      {shows && <SeriesDisplayed data={shows}/>}
      <Footer/>
    </div>
  );
}

export default Home;
