const fs=require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;
var command = argv._[0];


// console.log('Process', process.argv);
// console.log('Yargs', argv);

if(command == 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note Created');
        notes.logNote(note);
    }else{
        console.log("Note title taken");
    }
}else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach(note => notes.logNote(note));
    
//     Commemts are impotany
}else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log('Note Found');
        notes.logNote(note);
    }else{
        console.log("Note Not Found");
    }
}else if(command === 'remove'){
    var removed = notes.removeNote(argv.title);
    if(removed){
        console.log('Removed Note');
        console.log('--');
        console.log(`Title: ${argv.title}`);
        console.log(`Body: ${argv.body}`);
    }else{
        console.log('Note Not Found');
    }
    
}else{
    console.log('Command not recognised');
}
