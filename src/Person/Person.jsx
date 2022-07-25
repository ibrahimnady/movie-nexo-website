import React, { useContext } from 'react'
import { MediaContext } from '../mediaContext';
import { Link } from 'react-router-dom'

export default function Person() {
    let prefxImg = "https://image.tmdb.org/t/p/w500"
    const { people } = useContext(MediaContext)
    return (
        <>
            <div className="row">
                {people.map((people, index) =>
                    <div key={index} className="col-lg-2  col-md-4 col-6  ">
                        <div className="content position-relative ">
                            <Link to={`/peopleDetails/${people.id}`}>  <img src={prefxImg + people.profile_path} alt="" className='w-100 ' />
                                <h3 className='mb-3'>{people.name}</h3>
                                <div className=" position-absolute top-0 end-0 p-2 bg-info">
                                    {people.popularity}
                                </div>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
