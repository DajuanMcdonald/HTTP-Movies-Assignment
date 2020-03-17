import React from "react";
import { Route } from "react-router-dom";
import UpdateMovie from "./Movies/UpdateMovie";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import axios from 'axios';

const App = () => {
  const [savedList, setSavedList] = React.useState([]);
  const [movieList, setMovieList] = React.useState([]);
  const [updateList, setUpdateList] = React.useState([]);

  const getMovieList = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => setMovieList(res.data))
      .catch(err => console.log(err.response));
  };

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const updateMovieList = movie => {
      setUpdateList([...updateList, movie]);
  }

  React.useEffect(() => {
    getMovieList();
  }, []);

  return (
    <>
      <SavedList list={savedList} />

      <Route exact path="/">
        <MovieList movies={movieList} />
      </Route>

      <Route path="/movies/:id">
        <Movie addToSavedList={addToSavedList} />
      </Route>

        <Route path="/update-movie/:id">
            <UpdateMovie updateMovieList={updateMovieList} />
        </Route>
    </>
  );
};

export default App;
