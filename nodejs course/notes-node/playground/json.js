// var obj = {
//     name: 'Richard'
// }

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Richard", "age": 33}';

// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: 'Some body'
}

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);


var originalNoteString = fs.readFileSync('notes.json');

var note = JSON.parse(originalNoteString);

console.log(typeof note);
console.log(note.title);