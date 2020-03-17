import React from 'react';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';
import MovieCard from './MovieCard';
import Loader from 'react-loader-spinner';

function Movie({ addToSavedList, updateMovieList }) {
  const [movie, setMovie] = React.useState(null);
  const [update, setUpdate] = React.useState(null)
  const match = useRouteMatch();

  const fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  const updateMovie = () => {
      updateMovieList(update);
  }

  React.useEffect(() => {
    fetchMovie(match.params.id);
  }, [match.params.id]);

  if (!movie) {
    return <Loader
        type="Hearts"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
    />
  }

  return (
    <div className='save-wrapper'>
      <MovieCard movie={movie} />

      <div className='save-button' onClick={saveMovie}>
        Save
      </div>
      <div className='update-button' onClick={updateMovie}>
        Update
      </div>
    </div>
  );
}

export default Movie;
