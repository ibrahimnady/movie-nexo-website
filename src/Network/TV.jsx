import React, { useContext } from 'react'
import { MediaContext } from '../mediaContext';
import { Link } from 'react-router-dom'

export default function TV() {
    let prefxImg = "https://image.tmdb.org/t/p/w500"
    const { tv } = useContext(MediaContext)
    return (
        <>
            <div className="row">
                {tv.map((tv, index) =>
                    <div key={index} className="col-lg-2  col-md-4 col-6  ">
                        <div className="content position-relative ">
                            <Link to={`/tvdetails/${tv.id}`}> <img src={prefxImg + tv.poster_path} alt="" className='w-100' />
                                <h3 className='mb-3'>{tv.name}</h3>
                                <div className=" position-absolute top-0 end-0 p-2 bg-info">
                                    {tv.vote_average}
                                </div>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
