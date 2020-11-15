import React, {useState, useEffect} from 'react';
import Clear from '../images/clear.png'
import Cloud from '../images/cloud.png'
import Rain from '../images/rain.png'
import Snow from '../images/snow.png'
//function DisplayWeather(props) {
const DisplayWeather = (props) => {
    const { REACT_APP_API_KEY } = process.env;
    async function getWeather(){
      let res = await fetch("http://api.openweathermap.org/data/2.5/weather?q="+props.location+"&appid="+REACT_APP_API_KEY+"&mode=json")
      let data = await res.json()
      let image = null
      if (data.weather[0].main==="Clear"){
        image = Clear
      }
      else if(data.weather[0].main==="Clouds"){
        image = Cloud
      }
      else if(data.weather[0].main==="Rain"){
        image = Rain
      }
      else if(data.weather[0].main==="Snow"){
        image = Snow
      }
      let weather = {
        type: data.weather[0].main,
        description: data.weather[0].description,
        image: image
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
        <div> {token!=null?token.type:null}</div>

        <div> {token!=null?token.description:null}</div>
        <img src={token!=null?token.image:null} width = "100" height = "100"/>
      </div>
    );
  }

export default DisplayWeather

