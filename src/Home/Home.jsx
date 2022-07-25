import React, { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MediaContext } from '../mediaContext';
import Typed from 'typed.js';

export default function Home() {

  let prefxImg = "https://image.tmdb.org/t/p/w500"
  const { movis, tv, people } = useContext(MediaContext)



  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  React.useEffect(() => {

    const options = {
      strings: [
        'wellcom to nexo',
      ],
      typeSpeed: 100,
      backSpeed: 50,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])



  return (
    <>

      <div className=' vh-100 d-flex justify-content-center align-items-center' >
        <div className="row">
          <h1 className='text-center' ref={el}></h1>
        </div>
      </div>

      {
        movis ? <div className='   container' >
          <div className='row '>
            <div className="col-md-4">
              <div className="title ">
                <div className=' line mb-5 pb-5 w-25'></div>
                <h2>Trinding Movies <br />To watch naw </h2>
                <p className='fst-light text-secondary pt-2'>most watched movies by days</p>
                <div className=' line  mb-5 w-75'></div>
              </div>
            </div>
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
        </div> : ''
      }



      <div className=' mt-5 pt-5 container' >
        <div className='row '>

          <div className="col-md-4">
            <div className="title ">
              <div className=' line mb-5 pb-5 w-25'></div>
              <h2>Trinding Tv <br />To watch naw </h2>
              <p className='fst-light text-secondary pt-2'>most watched movies by days</p>
              <div className=' line  mb-5 w-75'></div>
            </div>
          </div>


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
      </div>



      <div className=' mt-5 pt-5 container' >
        <div className='row '>

          <div className="col-md-4">
            <div className="title ">
              <div className=' line mb-5 pb-5 w-25'></div>
              <h2>Trinding Tv <br />To watch naw </h2>
              <p className='fst-light text-secondary pt-2'>most watched movies by days</p>
              <div className=' line  mb-5 w-75'></div>
            </div>
          </div>


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
      </div>
    </>
  )
}
