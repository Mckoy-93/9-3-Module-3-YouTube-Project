import './App.css';
import ErrorBoundary from './Components/ErrorBoundary';
import React from "react";
//import { useState } from "react";
import Searchbar from "./Components/SearchBar";
import Home from "./Components/Home"
import Nav from "./Components/Nav"

function App() {
  return (
   <div>
    <ErrorBoundary>
    <Nav/>
    <Searchbar/>
    <Home/>
    </ErrorBoundary>
   </div>
  );
}

export default App;
