const chalk = require("chalk");
const fs = require("fs");

const removeNote = (title) => {
  const data = loadNotes();

  const isValid = data.filter(
    (note) => note.title.toLowerCase() === title.toLowerCase()
  );

  if (isValid.length !== 0) {
    const reqnote = data.filter((note) => note.title !== title);
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(reqnote);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }

  // console.log(reqnote);
};
const addNote = (title, body) => {
  const notesData = loadNotes();

  // const duplicateNotes = notesData.filter((note) => note.title === title);
  const duplicateNote = notesData.find((note) => note.title === title);

  if (!duplicateNote) {
    notesData.push({
      title: title,
      body: body,
    });
    console.log(chalk.green.inverse("New note added!"));
    saveNotes(notesData);
  } else {
    console.log(chalk.red.inverse("Note already exists!"));
  }
};

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const listNotes = () => {
  const data = loadNotes();
  console.log(chalk.blue.inverse("Your notes"));
  data.forEach((element) => {
    console.log(element.title);
  });
};

const readNote = (title) => {
  const data = loadNotes();

  const reqNote = data.find(
    (note) => note.title.toLowerCase() === title.toLowerCase()
  );

  if (reqNote) {
    console.log(chalk.magenta.inverse(reqNote.title));
    console.log(chalk.magenta(reqNote.body));
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  read: readNote,
};
