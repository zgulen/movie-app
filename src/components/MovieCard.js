import { useState, useEffect } from 'react'
import axios from 'axios'
import image from "../assets/defImg.jpg"
import { useNavigate } from 'react-router-dom'



const MovieCard = () => {
    const [data, setData] = useState([])
    const [target, setTarget] = useState("")
    const [showOverview, setShowOverview] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [searchData, setSearchData] = useState([])
    const [isSearched, setIsSearched] = useState(false)
    const [oppositeisSearched, setOppositeIsSearched] = useState(true)
    const navigate = useNavigate()
    const APP_KEY = process.env.REACT_APP_APP_KEY

    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${APP_KEY}&query=${inputValue}`
    const getSearchedMovies = async () => {
        await axios.get(searchUrl)
            .then(res => setSearchData(res.data.results))
    }
    useEffect(() => {
        getSearchedMovies()
    }, [isSearched])
    
    console.log(searchData);
    const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${APP_KEY}`
    const moviesData = async () => {
        try {
            await axios.get(baseUrl)
                .then((res) => (setData(res.data.results)))
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        moviesData()
    }, [])

    const handleMovieData = (e, id) => {
        setTarget(id)
        setShowOverview(true)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSearched(!isSearched)
        setOppositeIsSearched(!oppositeisSearched)
    }
    const handleInput = (e) => {
        setInputValue(e)
    }
    return (
        <>
            <>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input 
                    onChange={(e) => handleInput(e.target.value)} 
                    type="search" placeholder='Search a Movie' 
                    className='form-ele' />
                    <button className='form-ele'>{isSearched ? "New Search" : "Search"}</button>
                </form>
                {isSearched && <div className='searched-movies'>
                    {
                        searchData.map((item) => {
                            const {poster_path,title,overview,id} = item
                            return (
                                <div 
                                className='movie' 
                                key={id}
                                onClick={() => navigate(`/${id}`)}
                                onMouseOver={() => handleMovieData(overview, id)
                                }>
                                    <img className='image' src={poster_path === null ? image : `https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
                                    <p className='movie-name'>{title}</p>
                                </div>
                            )
                        })
                    }
                </div>}
            </>

            {oppositeisSearched &&
                <div className='movie-cards'>
                    {
                        data.map((item) => {
                            const {poster_path,title,overview,id} = item

                            return (
                                <div 
                                className='movie' 
                                key={id} 
                                onClick={() => navigate(`/${id}`)} 
                                onMouseOver={() => handleMovieData(overview, id)}>
                                    <img className='image' src={poster_path === null ? image : `https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
                                    <p className='movie-name'>{title}</p>
                                    {showOverview && id === target ? <div className='overview'> <h2 >Overview</h2> <p >{overview}</p> </div> : null}
                                </div>
                            )
                        })
                    }
                </div>
            }
        </>
    )
}

export default MovieCard