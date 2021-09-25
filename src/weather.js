import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function displayTemperature(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=12467fda41908ef87e1dd41e5c89d6d2&units=metric`;
  axios.get(url).then(displayTemperature);
  return (
    <div className="Weather">
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
}
