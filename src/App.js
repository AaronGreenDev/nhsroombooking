import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import './Components/layout/NavBar';
import NavBar from "./Components/layout/NavBar";
import RoomSearchBar from "./Components/RoomSearchBar";
import DropDown from "./Components/DropDown"
import FindRoomButton from "./Components/FindRoomButton";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <br/>
      <RoomSearchBar/>
        <DropDown/>
        <FindRoomButton/>
    </div>
  );
}

export default App;
