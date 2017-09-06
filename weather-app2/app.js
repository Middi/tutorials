const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
})
.help()
.alias('help', 'h')
.argv;

var line = "============================";

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    }
    else {
        console.log(line);
        console.log(results.address);
        console.log(line);
        
        weather.getWeather({lat: results.lat, lng: results.lng}, (errorMessage, weatherResults) => {
            if(errorMessage) {
                console.log(errorMessage);
            }
            else {
                console.log(`It's currently ${weatherResults.temperature}, but it feels like ${weatherResults.apparentTemperature}.`);
            }
        });
    }
});

