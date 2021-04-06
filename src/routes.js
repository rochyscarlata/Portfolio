import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";


function Routes() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
         <Route path="/about" component={About} />
        {/* <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route path="/works" component={Works} /> */} 
        
      </Switch>
    );
  }
  
  export default Routes;