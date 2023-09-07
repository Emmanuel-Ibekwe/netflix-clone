import "./App.css";
import Row from "./components/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Clever Programmer</h1>

      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;

// 'https://api.themoviedb.org/3/movie/11?api_key=50832de084e907f7283dcc6fc83e3fec'

// https://api.themoviedb.org/3/trending/movie/day?api_key=50832de084e907f7283dcc6fc83e3fec&language=en-US
// 50832de084e907f7283dcc6fc83e3fec
