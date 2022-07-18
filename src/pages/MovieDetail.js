import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const MovieDetail = () => {
  const {id} = useParams()
  const [detailData, setDetailData] = useState()
  const APP_KEY = process.env.REACT_APP_APP_KEY
  const baseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${APP_KEY}`
  const movieDetails = async() =>{
    try {
      await axios.get(baseUrl).then(res => setDetailData(res.data))
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
  movieDetails()
  }, [])
  
  console.log(detailData);

  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail