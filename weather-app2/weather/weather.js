const request = require('request');

var getWeather = (weather, callback) => {
    
    request({
        url: `https://api.darksky.net/forecast/99f9e746e67c2662d83a7e4e2976dd04/${weather.lat},${weather.lng}?units=uk2`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
           callback(undefined, {
               temperature: body.currently.temperature,
               apparentTemperature: body.currently.apparentTemperature
           }); 
        }
        else {
            callback(body.error);
        }
    });
}


module.exports.getWeather = getWeather;