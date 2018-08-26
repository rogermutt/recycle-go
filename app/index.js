import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Switch,
    Route,
  } from 'react-router-dom';

import "./index.css";



const Home = () => {
    return (<h1>Home Page</h1>);
};
 
const About = () => {
    return (<h1>About</h1>); 
}

class App extends React.Component {
    render () {
        return ( 
            <div>


            <BrowserRouter>

            <Switch>
                <Route exact path="/" render={ (props) => <Home/> } />
                <Route exact path="/about" render={ (props) => <About/> } />
                
            </Switch>
            


            </BrowserRouter>

                <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-secondary">Secondary</button>
                <button type="button" class="btn btn-success">Success</button>
                <button type="button" class="btn btn-danger">Danger</button>
                <button type="button" class="btn btn-warning">Warning</button>
                <button type="button" class="btn btn-info">Info</button>
                <button type="button" class="btn btn-light">Light</button>
                <button type="button" class="btn btn-dark">Dark</button>

                <button type="button" class="btn btn-link">Link</button>

            </div>
               
        );
    }
}

ReactDOM.render(  <App/> ,  document.getElementById("app") );

