import React from 'react';
import Home from '../../pages/home/home';
import AddRecipe from '../../pages/contact/addRecipe';
import About from '../../pages/about/about';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from '../navBar/navBar';

const NavRouter = () => {

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path ="/about" component = {About}></Route>
          <Route exact path ="/contact" component = {AddRecipe}></Route>
          <Route exact path ="" component = {Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default NavRouter;