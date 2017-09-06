var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(a+b);
            }
            else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
}

asyncAdd(4,9).then((res) => {
    console.log(res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log('should be  46...', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('Hey it worked'); 
//         reject('It didnt work');       
//     }, 2000);
// });

// somePromise.then((message) => {
//     console.log('success: ', message);
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// });

