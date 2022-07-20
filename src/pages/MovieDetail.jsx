import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [detail, setDetail] = useState("");

    const API_KEY = process.env.REACT_APP_APP_KEY;
    const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
    const defaultImage =
        "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

    useEffect(() => {
        axios
            .get(movieDetailBaseUrl)
            .then((res) => setDetail(res.data))
            .catch((err) => console.log(err));
    }, [movieDetailBaseUrl]);
    const {
        title,
        poster_path,
        overview,
        release_date,
        vote_average,
        vote_count,
    } = detail;

    return (
        <div className="container py-5">
            <h1 className="text-center">{title}</h1>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={
                                poster_path
                                    ? baseImageUrl + poster_path
                                    : defaultImage
                            }
                            className="img-fluid rounded-start"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-8 d-flex flex-column ">
                        <div className="card-body">
                            <h5 className="card-title">Overview</h5>
                            <p className="card-text">{overview}</p>
                        </div>
                        <ul className="list-group ">
                            <li className="list-group-item">
                                {"Release Date : " + release_date}
                            </li>
                            <li className="list-group-item">
                                {"Rate : " + vote_average}
                            </li>
                            <li className="list-group-item">
                                {"Total Vote : " + vote_count}
                            </li>
                            <li className="list-group-item"></li>
                            <li className="list-group-item">
                                <Link to={-1}>Go back</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <button onClick={(e) => navigate("/")}>Go to home</button>
            </div>
        </div>
    );
};

export default MovieDetail;
