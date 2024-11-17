import React from "react";

const Current = ({ currentWeather, location }) => {
  return (
    <div className="container mt-5">
      <h1 className="text-white text-center p-3"><span className='text-warning'><b>Current Weather of</b>  </span> <span className='text-dark'> {location.name} , {location.region} </span> </h1>
      {/* Card - Bootstrap */}
      <div className="card-body text-white">
      <div className="d-flex overflow-auto justify-content-sm-center">
        <div className="container text-center">
          
       <div><h1 className="card-title text-center mb-2 text-success"><b>{currentWeather.condition.text}</b></h1></div>
         <div> <h1><b><img 
            style={{ width: "35%", height: "40%" }} 
            src={currentWeather.condition.icon} 
            className="card-img-top" 
            alt="..." 
          /></b>
        </h1></div> 
          {/* Row */}
          <div className="row g-2">
            {/* Coloumn-1 */}
            <div className="col-4">
              <div className="p-3 text-dark"><h3><b>Temp in C : {currentWeather.temp_c}</b></h3></div>
            </div>
            {/* Coloumn-2 */}
            <div className="col-4">
              <div className="p-3 text-dark"><h3><b>Temp in F : {currentWeather.temp_f}</b></h3></div>
            </div>
            {/* Coloumn-3 */}
            <div className="col-4">
              <div className="p-3 text-dark"><h3><b>humidity : {currentWeather.humidity}</b></h3></div>
            </div>
            {/* Coloumn-4 */}
            <div className="col-4">
              <div className="p-3 text-dark"><h3><b>Wind degree : {currentWeather.wind_degree}</b></h3></div>
            </div>
            {/* Coloumn-5 */}
            <div className="col-4">
              <div className="p-3 text-dark"><h3><b>Wind Dir : {currentWeather.wind_dir}</b></h3></div>
            </div>
            {/* Coloumn-6 */}
            <div className="col-4">
              <div className="p-3 text-dark"><h3><b>Wind Speed(kph) : {currentWeather.wind_kph}</b></h3></div>
            </div>
          </div>
        </div>
      </div></div>
    </div>
  )
}

export default Current;