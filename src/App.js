import React, {useState}from 'react';
import Navbar from './Componentes/Navbar';
import { BrowserRouter as Router, Switch, Route} 
from 'react-router-dom';
import './App.css';
import Home from './Componentes/pages/Home';
import Footer from './Componentes/Footer';
import Cards from './Componentes/Cards';
import Servicios from './Componentes/pages/Servicios';
import Destinos from './Componentes/pages/Destinos';
import SignUp from './Componentes/pages/SignUp';

function App() {
  return (

     <>
       <Router>
           <Navbar/>
           <Switch>
            <Route path='/' exact component = {Home} />
            <Route path='/Servicios' component={Servicios} />
            <Route path='/products' component={Destinos} />
            <Route path='/sign-up' component={SignUp} />
           </Switch>
       </Router>
       </>

  );
}

export default App;