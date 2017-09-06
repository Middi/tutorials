const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
        
        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if(error) {
                reject('unable to connect to Google servers');
            }else if (body.status === 'ZERO_RESULTS') {
                reject('unable to find that address');
            }else if(body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    lat: body.results[0].geometry.location.lat,
                    lng: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('2 Middle Lane KNottingley').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
  }, (errorMessage) => {
    console.log(errorMessage);
  });
  