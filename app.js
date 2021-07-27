const fs = require("fs");
const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notes.js");

yargs.version("1.0.0");

//Add command is added
yargs.command({
  command: "add",
  describe: "This adds a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Adding remove command
yargs.command({
  command: "remove",
  describe: "This removes a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

//Adding list command
yargs.command({
  command: "list",
  describe: "This lists all the notes",

  handler: function () {
    notes.listNotes();
  },
});

//Adding read command
yargs.command({
  command: "read",
  describe: "This reads a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.read(argv.title);
  },
});

yargs.parse();
// console.log(yargs.argv);
