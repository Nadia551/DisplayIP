import MyMap from './components/Map/MyMap';
import './App.css';
import IP  from './components/IP/IP'; 
import { useState, useEffect } from 'react';
function App() {
  
  const [countryInformation, setCountryInformation] = useState(null);

  useEffect(() => {
    // Fetch country information and update state
    async function fetchCountryInformation() {
      const response = await fetch('https://restcountries.com/v3.1/name/Germany');
      const data = await response.json();
      setCountryInformation(data);
      console.log(data)
    }
    fetchCountryInformation();
  }, []);



  return (
    <div className="App">
    <MyMap/>
    <IP/>
    <h3>Capital: {countryInformation[0].capital[0]}</h3>
    <img src={countryInformation[0].flags.png} />
    </div>
  );
}

export default App;
