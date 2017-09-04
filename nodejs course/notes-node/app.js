const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes');

var titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

var bodyOptions = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
}

const argv = yargs.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
})
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

var command = argv._[0];


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note !== null && typeof note === 'object') {
        notes.logNote(note);
    }
    else {
        console.log('Duplicate found');
    }
}

else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log('---------');
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
}

else if (command === 'read') {
    var note = notes.getNote(argv.title);

    if (note !== null && typeof note === 'object') {
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
    console.log('---------');
    console.log(message);
    console.log('---------');
}

else {
    console.log('Command not recognised');
}