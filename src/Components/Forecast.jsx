
import React from "react";

const Forecast = ({ forecastWeather, location }) => {
    return (
        <>
            <div className="container mt-5">
                <h1 className="text-white text-center p-4"><span className='text-success'>ForeCast Weather of </span><span className='text-primary'>{location.name}, {location.region}</span></h1>
            </div>
            {
                // Map the forecastWeather.forecastday data values
                forecastWeather.forecastday.map((data, index) => {
                    // Return the mapped values
                    return (
                        // Accordion - Bootstrap
                        <div className="accordion accordion-flush mt-3" id="accordionFlushExample">

 
 
                            <div id="foreca1" className="accordion-item bg-white overflow-auto overflow-x:hidden; overflow-y: hidden;">

                                <h2 class="accordion-header">
                                    <button className="accordion-button collapsed"
                                        type="button" data-bs-toggle="collapse"
                                        // Assign the array value - index
                                        data-bs-target={`#${index}`}
                                        aria-expanded="false" aria-controls="flush-collapseOne">
                                        <div className="d-flex flex-row align-items-center mb-3">
                                            {/* fetch the data values from forecastWeather.forecastday */}
                                            <div className="p-2 fs-4 fw-medium"><span className=" fs-4 p-2 text-warning">Day: </span> {data.date}</div>
                                            <div className="p-2"><img src={data.day.condition.icon} /></div>
                                            <div className="p-2">{data.day.condition.text}</div>
                                            <div className="p-2 fw-medium text-warning">Max temp: {data.day.maxtemp_c}</div>
                                            <div className="p-2">Min temp: {data.day.mintemp_c}</div>
                                            <div className="p-2 fw-medium text-success">Sunrise: {data.astro.sunrise}</div>
                                            <div className="p-2">Sunset: {data.astro.sunset}</div>
                                        </div>
                                    </button>
                                </h2>
                                <div id={`${index}`}
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body ">
                                        {/* // Map the data values of forecastday.hour */}
                                        {data.hour.map((data) => {
                                            return (
                                                <>
                                                    {/* <div className="d-flex flex-row align-items-center mb-1 row"> */}
                                                    <div className="d-flex justify-content-start">
                                                        <div className="fw-medium fs-4 p-2">Time : <span className="text-success fw-medium p-2">{data.time}</span></div><div>
                                                            <div className="d-flex justify-content-center">
                                                                {/* Get the data from forecastday.hour */}
                                                                <div className="p-2">max temp : {data.temp_c}</div>
                                                                <div className="p-2 text-success fw-medium">Wind Direction :{data.wind_dir}</div>
                                                                <div className="p-2">Wind(kph) :{data.wind_kph}</div>
                                                                <div className="p-2 text-success fw-medium">Condition : {data.condition.text}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Progress Bar - Bootstrap */}
                                                    <div className="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar progress-bar-striped bg-warning" style={{ width: `${data.temp_c}%` }}></div>
                                                    </div >
                                                </>
                                            )
                                        }
                                        )}
                                    </div>
                                </div >
                            </div >
                        </div >
                    )
                }
                )
            }
        </>
    )
}

export default Forecast;