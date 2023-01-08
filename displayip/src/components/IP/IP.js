

import { useState } from 'react';
import axios from 'axios';

function IP(){
    const  [ipadress, setipadress] = useState('');
    
    
    axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_zxEBUb5TGhcOVYi22Ry7ySdzAKdo3')
    .then(function (response) {
      // handle success
      setipadress(response.data.ip);
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    return <h3>IP: {ipadress}</h3>
}
export default IP 