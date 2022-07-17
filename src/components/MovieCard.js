import { useState, useEffect } from 'react'
import axios from 'axios'


const MovieCard = () => {
    const [data, setData] = useState([])
    const [target, setTarget] = useState("")
    const [showOverview, setShowOverview] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [searchData, setSearchData] = useState([])
    const [isSearched, setIsSearched] = useState(false)
    const [oppositeisSearched, setOppositeIsSearched] = useState(true)
    const APP_KEY = process.env.REACT_APP_APP_KEY

    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${APP_KEY}&query=${inputValue}`
    const getSearchedMovies = async () => {
        await axios.get(searchUrl)
            .then(res => setSearchData(res.data.results))
    }
    console.log(searchData);
    useEffect(() => {
        getSearchedMovies()
    }, [isSearched])

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
        setIsSearched(true)
        setOppositeIsSearched(false)
    }
    const handleInput = (e) => {
        setInputValue(e)
    }
    // console.log(data);
    return (
        <>
            <>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input onChange={(e) => handleInput(e.target.value)} type="search" placeholder='Search a Movie' className='form-ele' />
                    <button className='form-ele'>Search</button>
                </form>
                {isSearched && <div className='searched-movies'>
                    {
                        searchData.map((e) => {
                            return (
                                <div className='movie' key={e.id} onMouseOver={() => handleMovieData(e.overview, e.id)}>
                                    <img src={`https://image.tmdb.org/t/p/w300/${e.poster_path}`} alt="" />
                                    <p className='movie-name'>{e.title}</p>
                                </div>
                            )
                        })
                    }
                </div>}
            </>

            { oppositeisSearched &&
                <div className='movie-cards'>
                {
                    data.map((e) => {
                        return (
                            <div className='movie' key={e.id} onMouseOver={() => handleMovieData(e.overview, e.id)}>
                                <img src={`https://image.tmdb.org/t/p/w300/${e.poster_path}`} alt="" />
                                <p className='movie-name'>{e.title}</p>
                                {showOverview && e.id === target ? <div className='overview'> <h2 >Overview</h2> <p >{e.overview}</p> </div> : null}
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