const request = require('request');

geocodeAddress = (address) => {

    var address = encodeURIComponent(address);

    const spacer = '===========================';

    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
        json: true
    }, (error, response, body) => {

        if(error) {
            console.log('unable to connect to Google servers');
        }
        else if (body.status === 'ZERO_RESULTS') {
            console.log('unable to find that address');
        }
        else if(body.status === 'OK') {
            console.log(spacer);
            console.log(`Address: ${body.results[0].formatted_address}`);
            console.log(spacer);
            console.log(`Lat: ${body.results[0].geometry.location.lat}`);
            console.log(`Lat: ${body.results[0].geometry.location.lng}`);
            console.log(spacer);
        }
    });
}

module.exports = {
    geocodeAddress
};