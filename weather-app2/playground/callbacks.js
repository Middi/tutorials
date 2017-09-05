
var request = require('request');

var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Richard'
    }
    setTimeout(() => {
        callback(user);
    }, 3000);
}

console.log('Starting');

getUser(12, (user) => {
    console.log(user);
})

request('http://maps.googleapis.com/maps/api/geocode/json?address=2%20middle%20lane%20knottingley', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
});