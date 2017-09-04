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
        notes.logNote(note);
    }
    else {
        console.log('Duplicate found');
    }
}

else if (command === 'list') {
    notes.getAll();
}

else if (command === 'read') {
    var note = notes.getNote(argv.title);
    
    if(note !== null && typeof note === 'object') {
        notes.logNote(note);
    }
    else {
        console.log('Note not found');
    }
    notes.getNote(argv.title);
}

else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note does not exist';
    console.log('---------')
    console.log(message);
    console.log('---------')
}

else { 
    console.log('Command not recognised');
}