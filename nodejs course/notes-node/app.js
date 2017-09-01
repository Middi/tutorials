console.log('starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes');

const argv = yargs.argv;


var command = argv._[0];

console.log('Command: ', command);

console.log('Yargs', argv)


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note !== null && typeof note === 'object') {
        console.log('---------')
        console.log('Added Succesfully:', note.title);
        console.log('---------')
    }
    else {
        console.log('Duplicate found');
    }
}

else if (command === 'list') {
    notes.getAll();
}

else if (command === 'read') {
    notes.getNote(argv.title);
}

else if (command === 'remove') {
    notes.removeNote(argv.title);
}

else { 
    console.log('Command not recognised');
}