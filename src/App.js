import "./App.css";
import Header from "./components/header/Header.js";
import Home from "./pages/home/Home";
import axios from "axios";
import { useEffect, useState } from "react";
import Details from "./pages/Details/Details";
// api = https://api.tvmaze.com/search/shows?q=all/
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("all");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.tvmaze.com/search/shows?q=${search}/`
        );
        console.log(res.data);
        setShows(res.data);
        setError(false);
      } catch (error) {
        console.log("can not get the data");
        setError(true);
        console.log(error);
      }
    };
    fetchData();
  }, [search, error]);

  // fetchData();
  return (
    <div className="App">
      <Router>
        <Header setSearch={setSearch} />
        <Switch>
          <Route exact path="/">
            {!error && <Home shows={shows} />}
          </Route>
          <Route path="/details">
            <Details id="31428" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
