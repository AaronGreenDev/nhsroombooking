import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import './Components/layout/NavBar';
import NavBar from "./Components/layout/NavBar";
import RoomSearchBar from "./Components/RoomSearchBar";
import LocationDropDown from "./Components/LocationDropDown"
import FindRoomButton from "./Components/FindRoomButton";
import DatePicker from "./Components/DatePicker";
import TimePicker from "./Components/TimePicker";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <br/>
      <RoomSearchBar/>
        <LocationDropDown/>


        <FindRoomButton/>
    </div>
  );
}

export default App;
