import { Component } from "react";
import { store } from "./store"
import {   Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from "react-redux";

import Patient from "./components/Patient";
import Doctor from "./components/patient-components/doctor";

import './App.css';
import NavBar from "./components/Navbar";

export default class App extends Component{

  /* Which function does react call : render() */
  render(){  /* render must return something(JSX) */
    return(
        <div>
          <Provider store={store}> 
          <NavBar />
          
          <Routes>
            <Route path="/patient" element={ <Patient />} /> 
            
            {/* <Route path="/doctor" element={ <Doctor />} /> 
            
           <Route path="/addPatient" element={ <addPatient />} />  */}

            {/* <Route path="/posts" element={ <Post />} /> 
            <Route path="/patient" element={ <Patient />} /> 
            <Route path="/sign-up" element={ <SignUp />} /> 
            <Route path="/users" element={ <User />} /> 
            <Route path="*" element={ <PageNotFound />} /> */}
          </Routes>
          </Provider>
        </div>
    );
  }
}