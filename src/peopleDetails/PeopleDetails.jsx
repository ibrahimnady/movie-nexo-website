import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function PeopleDetails() {
    let params = useParams();
    let prefxImg = "https://image.tmdb.org/t/p/w500"

    const [person, setperson] = useState({})
    useEffect(() => {
        getperson()
    
     
    }, [])
    
    const getperson=async()=>{
       
   
 
        let {data}= await axios.get(`https://api.themoviedb.org/3/person/${params.id}?api_key=0d3d1e9e1c59328e1b2d6061742ec320&language=en-US`)
        setperson(data)
        
       
       }

       return<>
     <div className=" container">
    <div className="row" >
        <div className=" col-md-4 mt-3">
            <img src={prefxImg+person.profile_path} className=" w-100 " alt=""/>
        </div>
        <div className=" col-md-8 mt-3">
            <h2>{person.name}</h2>
            <p className="pt-5">birthday: {person.birthday}</p>
            <p className="py-5">biography: {person.biography}</p>
           
        </div>
    </div>
</div>
     
       
     
         
         
         </> 
  return (
    <div>PeopleDetails</div>
  )
}
