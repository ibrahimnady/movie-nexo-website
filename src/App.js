// import logo from './logo.svg';
import './App.css';
import Navebar from './Navebar/Navebar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Movies from './Moveis/Movies';
import Aboute from './Aboute/Aboute';
import Login from './Login/Login';
import Register from './Register/Register';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Details from './Movie detailse/Details';
import TvDetails from './tvDetails/TvDetails';
import PeopleDetails from './peopleDetails/PeopleDetails';
import { MediaContextProvieder } from './mediaContext';
import TV from './Network/TV';
import Person from './Person/Person';

function App() {
  let navigate = useNavigate();
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      getUserData();
    }
  }, [])
  function getUserData() {
    let decodedToken = jwtDecode(localStorage.getItem('userToken'));
    setUserData(decodedToken);


  }
  function logOut() {
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate('/Login');
  }
  // function ProdectRoute({children}){
  //   if(!localStorage.getItem('userToken')){
  //     return <Navigate to='/Login' />
  //   }else{
  //     return children;
  //   }

  // }
  return (
    <div>
      <Navebar userData={userData} logOut={logOut} />
      <MediaContextProvieder>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Home' element={<Home />} />
          <Route path='Movies' element={<Movies />} />
          <Route path='About' element={<Aboute />} />
          <Route path='TV' element={<TV />} />
          <Route path='Person' element={<Person />} />
        // <Route path='Login' element={<Login getUserData={getUserData} />} />
        // <Route path='Register' element={<Register />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
          <Route path='Details' element={<Details />}>
            <Route path=':id' element={<Details />} />
          </Route>
          <Route path='tvdetails' element={<TvDetails />}>
            <Route path=':id' element={<TvDetails />} />
          </Route>
          <Route path='peopleDetails' element={<PeopleDetails />}>
            <Route path=':id' element={<PeopleDetails />} />
          </Route>
        </Routes>
      </MediaContextProvieder>
    </div>
  );
}

export default App;
