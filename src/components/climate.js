import React, {useState, useEffect} from 'react';
import './climate.css'
//function DisplayWeather(props) {
const DisplayWeather = (props) => {
    const { REACT_APP_API_KEY } = process.env;
    async function getWeather(){
      let res = await fetch("http://api.openweathermap.org/data/2.5/weather?q="+props.location+"&appid="+REACT_APP_API_KEY+"&mode=json")
      let data = await res.json()

      let weather = {
        temp: data.weather[0].main
      }
      return weather
    }  
    const [token, setToken] = useState(null);
    
    useEffect(() => {
      getWeather().then(value=>{
        console.log(value)
        setToken(value);
      })
    }, []);


    return (
      <div>
        <div className="response"> {token!=null?token.temp:null}</div>
      </div>
    );
  }

export default DisplayWeather

