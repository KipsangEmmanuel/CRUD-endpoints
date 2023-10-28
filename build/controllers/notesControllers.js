"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNoteController = exports.addNoteController = exports.deleteNoteController = exports.getSpecificNoteController = exports.getAllNotesController = void 0;
const noteServices_1 = require("../services/noteServices");
function getAllNotesController(req, res) {
    let notes = (0, noteServices_1.getNotes)();
    res.json(notes);
}
exports.getAllNotesController = getAllNotesController;
function getSpecificNoteController(req, res) {
    let { noteID } = req.params;
    let parsedID = parseInt(noteID);
    let note = (0, noteServices_1.getSpecificNote)(parsedID);
    res.json(note);
}
exports.getSpecificNoteController = getSpecificNoteController;
function deleteNoteController(req, res) {
    let { noteID } = req.params;
    let parsedID = parseInt(noteID);
    let result = (0, noteServices_1.deleteNote)(parsedID);
    if (result !== null) {
        res.send(`Note on index: ${result} deleted`);
    }
    else {
        res.send("Note not found");
    }
}
exports.deleteNoteController = deleteNoteController;
function addNoteController(req, res) {
    let new_note = req.body;
    (0, noteServices_1.addNote)(new_note);
    res.json({
        id: new_note.id,
        sucess: true
    });
}
exports.addNoteController = addNoteController;
function updateNoteController(req, res) {
    let { noteID } = req.params;
    let parsedID = parseInt(noteID);
    let updatedNote = req.body;
    let result = (0, noteServices_1.updateNote)(parsedID, updatedNote);
    if (result) {
        return res.json({
            id: parsedID,
            success: true
        });
    }
    return res.json({
        success: false
    });
}
exports.updateNoteController = updateNoteController;
