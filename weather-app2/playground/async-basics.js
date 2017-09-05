console.log('Starting app');

setTimeout(() => {
    console.log('Inside of call back');
},2000);

setTimeout(function(){
    console.log('my timeout');
}, 0);

console.log('Finishing up');