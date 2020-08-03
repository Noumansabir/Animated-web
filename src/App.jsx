import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Contect from "./Contect"
import Footer from './Footer'
import Service from "./Service"
import { Switch,Route, Redirect } from 'react-router-dom';


const App=()=> {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact  path="/about" component={About}/>
      <Route exact  path="/contect" component={Contect} /> 
      <Route  exact path="/service" component={Service} />
      <Redirect to="/" />
     
      </Switch>
      <Footer/>
    </> 
  );
}

export default App;
