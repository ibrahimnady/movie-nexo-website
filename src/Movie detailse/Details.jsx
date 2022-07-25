import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Details() {
    let params = useParams();
    let prefxImg = "https://image.tmdb.org/t/p/w500"

    const [movies, setMovie] = useState({})
    useEffect(() => {
        getmovie()


    }, [])

    const getmovie = async () => {



        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=0d3d1e9e1c59328e1b2d6061742ec320&language=en-US`)
        setMovie(data)


    }
    return <>
        <div className=' container mt-3 pt-3'>

            <div className="row" >
                <div className=" col-md-4 mt-3">
                    <img src={prefxImg + movies.poster_path} className=" w-100 " alt="" />
                </div>
                <div className=" col-md-8 mt-3">
                    <h2>{movies.title}</h2>
                    <p>{movies.tagline}</p>
                    <p className="pt-5">vote: {movies.vote_average}</p>
                    <p className="pt-1">vote_count: {movies.vote_count}</p>
                    <p className="pt-1">popularity: {movies.popularity}</p>
                    <p className="pt-1">release_date: {movies.release_date}</p>
                    <p className="pt-5 mt-5 fs-5"> {movies.overview}</p>
                </div>
            </div>
        </div>





    </>
}
