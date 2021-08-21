import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return <div className="App">
<div class="container">  
    
        <form>
        <input type="text" placeholder="Enter a location" class="search-bar"/>        
        <button class="search-button">Search</button>
        </form>
    
    <div class="row">     
    <div class="col"> 
        <i class="fas fa-cloud-sun page-icon"></i>
        <br />
        <div class="search-result">weather description</div>
        <br />
        <div class="location-block">
          <div class="country">country</div>
          <div class="city">CITY</div>
          <div class="date">
            day of week, time
            <br />
            day month year
          </div>
        </div>
    </div>
    <div class="col"> 
         
    </div>
    <div class="col">         
        <div class="current-temp">20&deg;</div>
      </div>     
    </div>  
    
    <div class="bottom-banner">
      <div class="row">
        <div class="col">
          <div class="day-of-week">
            Saturday
            <br />
            <i class="fas fa-cloud-sun daily-icon"></i>
            <div class="daily-temp">h/l</div>
          </div>
        </div>
        <div class="col">
          <div class="day-of-week">
            Sunday
            <br />
            <i class="fas fa-cloud-sun daily-icon"></i>
            <div class="daily-temp">h/l</div>
          </div>
        </div>
        <div class="col">
          <div class="day-of-week">
            Monday
            <br />
            <i class="fas fa-cloud-sun daily-icon"></i>
            <div class="daily-temp">h/l</div>
          </div>
        </div>
        <div class="col">
          <div class="day-of-week">
            Tuesday
            <br />
            <i class="fas fa-cloud-sun daily-icon"></i>
            <div class="daily-temp">h/l</div>
          </div>
        </div>
        <div class="col">
          <div class="day-of-week">
            Wednesday
            <br />
            <i class="fas fa-cloud-sun daily-icon"></i>
            <div class="daily-temp">h/l</div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>

  </div> 
  
 
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
