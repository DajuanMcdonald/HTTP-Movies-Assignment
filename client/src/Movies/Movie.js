import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteMatch, Link } from 'react-router-dom';
import MovieCard from './MovieCard';



function Movie({ addToSavedList, updateMovieList }) {
  const [movie, setMovie] = useState(null);
  const [update, setUpdate] = useState('')
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

  const deleteMovie = (id) => {
    axios
      .delete(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  const updateMovie = () => {
    console.log('updating...', movie)
  }

  useEffect(() => {
    fetchMovie(match.params.id);
  }, [match.params.id]);

  if (!movie) {
    return <h2>Loading...</h2>

  }

  return (
    <div className='save-wrapper'>
      <MovieCard movie={movie} />

      <div className='save-button' onClick={saveMovie}>
        Save
      </div>

      <div
        
        className='update-button'
        onClick={deleteMovie}>
        Delete
      </div>
      <Link to={`/update-movie/:id`}>
        <button>Edit</button>

      </Link>
    </div>
  );
}

export default Movie;
