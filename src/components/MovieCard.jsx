import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {useNavigate} from "react-router-dom"
import { toastWarnNotify } from '../helpers/ToastNotify';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';
const defaultImage =
  'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';

const MovieCard = ({ poster_path, title, overview, vote_average, id }) => {
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext);
  const setVoteClass = (vote) => {
    if (vote > 8) {
      return 'green';
    } else if (vote >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  };
  return (
    <div className="movie" onClick={e => {
      navigate(`/details/${id}`)
      toastWarnNotify("Please Login to See Details")
      }}>
      <img
        loading="lazy"
        src={poster_path ? IMG_API + poster_path : defaultImage}
        alt="movie-card"
      />
      <div className="d-flex align-items-baseline justify-content-between p-1 text-white">
        <h5>{title}</h5>
        {currentUser && (
          <span className={`tag ${setVoteClass(vote_average)}`}>
            {vote_average}
          </span>
        )}
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
