const axios = require('axios');

// console.log(argv.direccion);
// const direccion = argv.direccion;
// const encodedDireccion = encodeURI(direccion);
// console.log('encodeULR', encodedDireccion);
// const URI = `https://geocode.xyz/${encodedDireccion}?json=1`;


const getLugarLatLng = async (direccionParam) => {

    // -- 3-3 Fernando sin ponerle headers - adaptacion

    const encodedDireccion = encodeURI(direccionParam);
  
    const URI = `https://geocode.xyz/${encodedDireccion}?json=1`;
              // https://geocode.xyz/madrid?json=1   

    const instance = axios.create({
        baseURL: URI,
        // timeout: 5000
    });

    const resp = await instance.get();

    const data = resp.data;
    const direccion = data.standard.city;
    const pais = data.standard.countryname;
    const lat = data.latt;
    const longt = data.longt;

        return {
            pais,
            direccion,
            lat,
            longt
        }

}



// -- 1-3 Promise
// ? retorno solo la promesa acá con axios
const getInfoPromise = () => axios.get(URI);

//? trato el then y catch acá
// const getInfoThen = () => {

//     getInfoPromise()
//     .then(function (response) {
//         // handle success
//         // console.log('Info Request: ', response);// * request info and data
//         console.log('Info status: ', response.status);// * status
//         console.log('Info Request: ', response.data);//* all data
//         console.log('Longitud: ' + response.data.longt);
//         console.log('Latitud: ' + response.data.latt);
//         console.log(`OKKK ☺`);
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);

//         console.log(`ERROR ☺`);
//       })
//       .then(function () {
//         // always executed
//       });

// }

// getInfoThen();



// -- 2-3 async await
// async function getCity() {
//   try {
//     const response = await axios.get(URI);

//     console.log(response.data);
//     console.log(`-------------------`);
//     console.log(response.data.latt);

//   } catch (error) {

//     console.error(error);
//     console.error('error ☺');

//   }
// }

// getCity();



module.exports = {
    getLugarLatLng
}