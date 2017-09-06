const request = require('request');

geocodeAddress = (address, callback) => {

    var address = encodeURIComponent(address);

    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
        json: true
    }, (error, response, body) => {

        if(error) {
            callback('unable to connect to Google servers');
        }
        else if (body.status === 'ZERO_RESULTS') {
            callback('unable to find that address');
        }
        else if(body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
        }
    });
}

module.exports = {
    geocodeAddress
};