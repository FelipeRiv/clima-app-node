
const {argv} = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// * URLS 
// * guana CR https://geocode.xyz/guanacaste?json=1
// * NY
// * Madrid https://geocode.xyz/madrid?json=1


console.log(argv.direccion);

// lugar.getLugarLatLng(argv.direccion)
//      .then(console.log)
//      .catch(console.log);


// clima.getClima(40.750000,-74.000000)
//      .then(console.log)
//      .catch(err => console.log);

const showInfo = (direccion, pais, temp, tempMin, tempMax) =>{
     
     return `El clima de ${direccion}, ${pais} es de: 
                    Temperatura: c ${temp} 
                    Temperatura mínima: ${tempMin},
                    Temperatura máxima: ${tempMax}`;
     
}

const showError = (direccion) => {
  
     return `No se pudo determinar el clima de ${direccion}`;

}

const getInfo = async (direccion) => {

     let lat;
     let longt;
     let pais;
     let temp;
     let tempMin;
     let tempMax;

     await lugar.getLugarLatLng(direccion)
          .then(data => {

               console.log(data);

               lat = data.lat;
               longt = data.longt;
               pais = data.pais;

          })
          .catch(console.log);

     await clima.getClima(lat, longt)
                .then(clima => {

                    console.log(clima);
            
                    temp = clima.temp;
                    tempMax =  clima.temp_max;
                    tempMin = clima.temp_min;

                    if (pais !== undefined) {
                         
                         console.log(showInfo(direccion, pais, temp, tempMin, tempMax));
                    } else {
                         console.log(showError(direccion));
                    }

               })
               .catch(console.log);
               
 
}

getInfo(argv.direccion);

const getInfo2 = async (direccion) => {

     
     try {
    
          const coords = await lugar.getLugarLatLng(direccion);

          const temp = await clima.getClima(coords.lat, coords.longt);

          return `El clima de ${coords.direccion} es de ${temp.temp}`;

     } catch (e) {
          return `no se pudo determinar el clima de ${direccion}`
     }

}


// getInfo2(argv.direccion)
//         .then(console.log)
//         .catch(console.log);