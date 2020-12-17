import React from "react";
import './App.css';


const api = {
  key: "6cba4494ea3720d9f5389a6bf15786ae",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  const 

  const dateBuilder = (d) => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${month} ${date}, ${year}`
  }
  return (
    <div className="app">
      <main>
        <div className="searchBox">
          <input
            type="text"
            className="searchBar"
            placeholder="Search"
          />
        </div>
        <div className="locationBox">
          <div className="location">New York City, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
          <div className="weatherBox">
            <div className="temp">
              80° F
            </div>
            <div className="weather">Sunny</div>
          </div>
      </main>
    </div>
  )

}
export default App;
