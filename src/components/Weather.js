import React from 'react'



var Weather = (p) =>{
        return(
            <div className="weather">
                {
                    p.temp && <p className="infoLabel">Temperature : <span className="infoValue">{p.temp} °C</span></p>
                }

                {
                    p.city && <p className="infoLabel">City : <span className="infoValue">{p.city}</span></p>
                }

                {
                    p.country && <p className="infoLabel">Country code : <span className="infoValue">{p.country}</span></p>
                }

                {
                    p.hum && <p className="infoLabel">Humidity : <span className="infoValue">{p.hum}%</span></p>
                }

                {
                    p.desc && <p className="infoLabel">Description : <span className="infoValue">{p.desc}</span></p>
                }
                

                
            </div>
        )
    }



export default Weather