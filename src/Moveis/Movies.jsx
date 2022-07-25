import React, { useContext } from 'react'
import { MediaContext } from '../mediaContext';
import { Link } from 'react-router-dom'
export default function Movies() {
    let prefxImg = "https://image.tmdb.org/t/p/w500"
    const { movis } = useContext(MediaContext)
    return (
        <>
            <div className="row">
                {movis.map((movie, index) =>
                    <div key={index} className="col-lg-2  col-md-4 col-6  ">
                        <div className="content  position-relative">
                            <Link to={`/Details/${movie.id}`}>
                                <img src={prefxImg + movie.poster_path} alt="" className='w-100' />
                                <h3 className='mb-3'>{movie.title}</h3>
                                <div className=" position-absolute top-0 end-0 p-2 bg-info">
                                    {movie.vote_average}
                                </div>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
