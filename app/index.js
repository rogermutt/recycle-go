import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Switch,
    Route,
  } from 'react-router-dom';

import Table from "./Components/Table-items"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Button from "./Components/Button"

import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => (<h1>Home Page</h1>);
const About = () => (<h1>About</h1>); 


class App extends React.Component {
    render () {
        return ( 

            <React.Fragment>

            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={ (props) => <Home/> } />
                    <Route exact path="/about" render={ (props) => <About/> } />
                    <Route exact path="/table" render={ (props) => <Table/> } />       
                </Switch>
            </BrowserRouter>

            <Button type={"btn btn-primary"}/>

            <Footer/>

            </React.Fragment>
               
        );
    }
}

ReactDOM.render(  <App/> ,  document.getElementById("app") );

