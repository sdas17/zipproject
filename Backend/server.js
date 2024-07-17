const express = require('express');
const notes = require('./data/note'); 
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send('Hello World!');
});

app.get("/api/notes", (req, res) => {
    res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
    const noteId = req.params.id;
    const note = notes.find(note => note._id === noteId);
    
    if (!note) {
        res.status(404).json({ message: "Note not found" });
    } else {
        res.json(note);
    }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
