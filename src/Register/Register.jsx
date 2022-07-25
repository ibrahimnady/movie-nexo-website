import axios from 'axios';
import Joi from 'joi';
import React, { useState }  from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    let Navigate = useNavigate();
    const [errorList, setErrorList] = useState([])
    const [isLoding, setIsLoding] = useState(false)
    const [error, setError] = useState('')
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        age: 0,
        email: '',
        password: '',
    })
    function getUser(e){
        let myUser = {...user};
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
        // console.log(user);
    }
    async function submitRegister(e){
        e.preventDefault();
        setIsLoding(true)
        let validatonResult = validateRegisterForm(user)
        if(validatonResult.error){
            setIsLoding(false)
            // console.log(validatonResult.error.details);
            setErrorList(validatonResult.error.details)
        }else{
            setIsLoding(true)
        let {data} = await axios.post('https://route-egypt-api.herokuapp.com/signup', user) 
        // console.log(data);
        if(data.message == 'success'){
            setIsLoding(false);
            Navigate('/Login')

        }else{
            setError(data.message)
            setIsLoding(false)
        }
        }
    }
    function validateRegisterForm(user){
        let schema = Joi.object({
            first_name:Joi.string().alphanum().min(3).max(8).required(),
            last_name:Joi.string().alphanum().min(3).max(8).required(),
            age:Joi.number().min(15).max(80).required(),
            email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password:Joi.string().pattern(/^[A-Z][a-z]{3,8}$/)
        })
        return schema.validate(user, {abortEarly:false});
    }
    return (
        <div className='container'>
            <h2 className='my-3'>Register Now</h2>
            {errorList.map((error , index)=> {
                if(index === 4){
                    return <div key={index} className='alert alert-danger'>Password invalid</div>
                }else{
                    return <div key={index} className='alert alert-danger'>{error.message}</div>
                }
                
            }
            )}
            {error?<div className="alert alert-danger">{error}</div>:''}
            <form className='py-4' onSubmit={submitRegister}>
                <label htmlFor="first_name">First Name :</label>
                <input onChange={getUser} type="text" className='form-control my-3 ' name='first_name' id='first_name'/>

                <label htmlFor="last_name">Last Name :</label>
                <input onChange={getUser} type="text" className=' form-control my-3 ' name='last_name' id='last_name'/>

                <label htmlFor="age">Age :</label>
                <input onChange={getUser} type="number" className=' form-control my-3 ' name='age' id='age'/>

                <label htmlFor="email">Email :</label>
                <input onChange={getUser} type="text" className=' form-control my-3 ' name='email' id='email'/>

                <label htmlFor="password">Password :</label>
                <input onChange={getUser} type="password" className=' form-control my-3 ' name='password' id='password'/>

                <button type='submit' className=' btn btn-outline-info'>{isLoding?<i className='fas fa-spinner fa-spin'></i>:'Register'}</button>
                
            </form>
        </div>
    )
}
