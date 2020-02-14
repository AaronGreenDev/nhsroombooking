import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import './Components/layout/NavBar';
import NavBar from "./Components/layout/NavBar";
import RoomSearchBar from "./Components/RoomSearchBar";
import LocationDropDown from "./Components/LocationDropDown"
import FindRoomButton from "./Components/FindRoomButton";
import LocationList from "./Components/LocationList";
import DatePicker from "./Components/DatePicker";
import TimePicker from "./Components/TimePicker";
import RoomList from "./Components/RoomList";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <br/>
      <RoomSearchBar/>
      <LocationList/>
      <FindRoomButton/>
    </div>
  );
}

export default App;
