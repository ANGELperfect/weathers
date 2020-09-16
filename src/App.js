import React, { Component } from 'react'
import './App.css'
import Weather from './components/Weather'
import Locate from './components/Locate'

var apiKey = "e0e628851654f684ace9162ac8ecc2aa"

class App extends Component {

  state={
    temp: '',
    city: '',
    country: '',
    hum: '',
    desc: '',
  }

  getWeather = async (e) =>{
    e.preventDefault()
    console.log("weather")
    var cty = e.target.elements.city.value
    var cntry = e.target.elements.country.value
    if(cty && cntry){ 
    var api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cty},${cntry}&appid=${apiKey}&units=metric`)
    var data = await api.json()
    try{
    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      hum: data.main.humidity,
      desc: data.weather[0].description,
    })}
    catch(e){
      alert(cty+" is not valid");
    }
    }
    else{
      alert("fill all fields")
    }
  }

  render(){
    return (
      <div className="App">
        <div className="form">
        <Locate weather={this.getWeather}/>
        <Weather
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              hum={this.state.hum}
              desc={this.state.desc}
        />
        </div>
      </div>
    )
  }
}

export default App
