// @ts-nocheck
import React from 'react';
import'./App.css';
import Home from './Screens/Home';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Login from './Screens/Login';
 import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
 import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
 import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './Screens/Signup.js';

function App() {
  return (
  <>
  <cartprovider>

 <Router>
  <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/createuser' element={<Signup/>}/>
      <Route path='/myorder' element={<myorder/>}/>
    </Routes>
  </div>
 </Router>
  </cartprovider>
  </>
  );
}

export default App;
