import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function TvDetails() {
    let params = useParams();
    let prefxImg = "https://image.tmdb.org/t/p/w500"

    const [tv, setTv] = useState({})
    useEffect(() => {
        getTv()
    
     
    }, [])
    
    const getTv=async()=>{
       
   
 
        let {data}= await axios.get(`https://api.themoviedb.org/3/tv/${params.id}?api_key=0d3d1e9e1c59328e1b2d6061742ec320&language=en-US`)
        setTv(data)
        
       
       }

       return<>
       <div className=' container mt-3 pt-3'>
       
       <div className="row" >
             <div className=" col-md-4 mt-3">
                 <img src={prefxImg+tv.poster_path} className=" w-100 " alt=""/>
             </div>
             <div className=" col-md-8 mt-3">
                 <h2>{tv.title}</h2>
                 <p>{tv.tagline}</p>
                 <p className="pt-5">vote: {tv.vote_average}</p>
                 <p className="pt-1">vote_count: {tv.vote_count}</p>
                 <p className="pt-1">popularity: {tv.popularity}</p>
                 <p className="pt-1">release_date: {tv.release_date}</p>
                 <p className="pt-5 mt-5 fs-5"> {tv.overview}</p>
             </div>
         </div>
     </div>
     
       
     
         
         
         </> 
}
