import classes from "./App.module.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import requests from "./requests";

function App() {
  return (
    <div className={classes.app}>
      {/* Navabr */}
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

// 'https://api.themoviedb.org/3/movie/11?api_key=50832de084e907f7283dcc6fc83e3fec'

// https://api.themoviedb.org/3/trending/movie/day?api_key=50832de084e907f7283dcc6fc83e3fec&language=en-US
// 50832de084e907f7283dcc6fc83e3fec
