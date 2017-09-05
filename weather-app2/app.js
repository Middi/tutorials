const request = require('request');

const spacer = '===========================';

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=2%20middle%20lane%20knottingley',
    json: true
}, (error, response, body) => {
    console.log(spacer);
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(spacer);
    console.log(`Lat: ${body.results[0].geometry.location.lat}`);
    console.log(`Lat: ${body.results[0].geometry.location.lng}`);
    console.log(spacer);
});