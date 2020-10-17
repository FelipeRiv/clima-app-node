const axios = require('axios');

const getClima = async (lat, longt) => {

    const APIKEY = 'c98e6ee9525f89dba72a057737bbbcec';
    const APIKEYExterna = '32f843d833c38373032f825c4a92418a';
    const UNITS = 'metric';
    
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longt}&appid=${APIKEY}&units=${UNITS}`;

    const resp = await axios.get(URL);

    if (resp) {
        // console.log(`clima`);
        // console.log(resp);
        return resp.data.main;
        
    }

}

module.exports = {
    getClima
}
