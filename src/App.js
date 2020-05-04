import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  //make a state for the data then set the state
  //make a useEffect with a axios call with my chosen api
  const [nasaData, setNasaData] = useState("");
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod")
      .then((response) => {
        console.log("Nasa Api Response", response);
      })
      .catch((error) => {
        console.log("nasa api error", error);
      });
  });

  return <div className="App"></div>;
  //return the components
}

export default App;

// Left off on
