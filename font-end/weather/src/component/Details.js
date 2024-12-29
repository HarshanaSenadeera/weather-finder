import {Video} from "./Video";
import {Charts} from "./Charts";
import {About} from "./About";
import {useEffect, useState} from "react";

export const Details = () => {


    /*const [weatherData, setWeatherData]=useState(null);

    useEffect(() => {

        const fetchWeatherData = async () => {

            try{
                const response = await fetch('http://localhost:5000/forecast');
                const data= await response.json();
                setWeatherData(data)
            }catch (e) {
                console.log("Somthing happen wrong" , e)
            }

            await fetchWeatherData();
        };

        if (!weatherData) return <div>Loading...!</div>

    },);*/

    return(

        <>
            <div
                className="hero"
                style={{
                    backgroundImage: 'url(images/coverN.jpg)',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container">
                    <form action="#" className="find-location">
                        <input type="text" placeholder="Find your location..." />
                        <input type="submit" value="Find" />
                    </form>
                </div>
            </div>


            <div className="forecast-table">
                <div className="container">
                    <div className="forecast-container">

                        {/*{weatherData.map((day,index)=>*/}
                            <div  className="today forecast">
                                <div  className="forecast-header">
                                    <div className="day">Tuesday</div>
                                    <div className="date">07/08</div>
                                </div>
                                <div className="forecast-content">
                                    <div className="location">New York</div>
                                    <div className="degree">
                                        <div className="num">23<sup>o</sup>C</div>
                                        <div className="forecast-icon">
                                            <img src="images/icons/icon-1.svg" alt="" width='90'/>
                                        </div>
                                    </div>
                                    <span><img src="images/icon-umberella.png" alt=""/>20%</span>
                                    <span><img src="images/icon-wind.png" alt=""/>18km/h</span>
                                    <span><img src="images/CNN.png" alt=""/>East</span>
                                </div>
                            </div>
                        {/*)}*/}


                        <div className="forecast">
                            <div className="forecast-header">
                                <div className="day">Tuesday</div>
                            </div>
                            <div className="forecast-content">
                                <div className="forecast-icon">
                                    <img src="images/icons/icon-3.svg" alt="" width='48'/>
                                </div>
                                <div className="degree">23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                        <div className="forecast">
                            <div className="forecast-header">
                                <div className="day">Wednesday</div>
                            </div>
                            <div className="forecast-content">
                                <div className="forecast-icon">
                                    <img src="images/icons/icon-5.svg" alt="" width='48'/>
                                </div>
                                <div className="degree">23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                        <div className="forecast">
                            <div className="forecast-header">
                                <div className="day">Thursday</div>
                            </div>
                            <div className="forecast-content">
                                <div className="forecast-icon">
                                    <img src="images/icons/icon-7.svg" alt="" width='48'/>
                                </div>
                                <div className="degree">23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                        <div className="forecast">
                            <div className="forecast-header">
                                <div className="day">Friday</div>
                            </div>
                            <div className="forecast-content">
                                <div className="forecast-icon">
                                    <img src="images/icons/icon-12.svg" alt="" width='48'/>
                                </div>
                                <div className="degree">23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                        <div className="forecast">
                            <div className="forecast-header">
                                <div className="day">Saturday</div>
                            </div>
                            <div className="forecast-content">
                                <div className="forecast-icon">
                                    <img src="images/icons/icon-13.svg" alt="" width='48'/>
                                </div>
                                <div className="degree">23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                        <div className="forecast">
                            <div className="forecast-header">
                                <div className="day">Sunday</div>
                            </div>
                            <div className="forecast-content">
                                <div className="forecast-icon">
                                    <img src="images/icons/icon-14.svg" alt="" width='48'/>
                                </div>
                                <div className="degree">23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Video/>

            <Charts/>

            <About/>
        </>
    )
}