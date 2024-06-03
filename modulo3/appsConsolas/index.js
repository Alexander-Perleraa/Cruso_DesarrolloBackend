const axios = require(`axios`);
const yargs = require("yargs");


const argv = yargs
    .option(`address`, {
        alias: `a`,
        description: `Direccion para encontrar`,
        type: `string`,
        demandOption: true
    })
    .help()
    .alias(`help`, `h`)
    .argv;




const accessToken=`pk.eyJ1Ijoid2lsbGl3b25rYSIsImEiOiJjbHdyYnVhMDIwOGd5MmlvZ3lsZnRsbTg0In0.bSSPmW9wZJj0mqVX6z3Wsg`

async function geocode(address) {
    try {
        const response = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json', {
            params: {
                access_token: accessToken,
            },
        });
        if (response.data.features.length > 0) {
            const location = response.data.features[0];
            console.log("Dirección:", location.place_name);
            console.log("Coordenadas:", location.geometry.coordinates);
        } else {
            console.log("No se encontró la dirección");
        }
    } catch (error) {
        console.error("Error al obtener la ubicación:", error);
    }
}
 

const address = argv.address
geocode(address);