import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [weather, setWeather] = useState({
    temp: '',
    desc: '',
    icon: '',
  });

  useEffect(() => {
    let city = 'London'
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Pusan&units=Metric&APIkey=5f0e971b75b179655bfe19b6090a78d3')
    .then(response => response.json())
    .then(result => {
      setWeather({
        temp: result.main.temp,
        desc: result.weather[0].description,
        icon: result.weather[0].icon,
      })
    })
    .catch(err => console.log(err))
  }, []);

  if(weather.icon) {
    return (
      <>
        <p>온도 : {weather.temp}  도</p>
        <p>설명 : {weather.desc}</p>
        <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="날씨 아이콘" />
      </>
    );
  }
  else {
    <div>로딩중...</div>
  }
}

export default App
