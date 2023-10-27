
const { v4: uuidv4 } = require('uuid');

const test = (req, res) => {
    res.json('test is working')
}

const Note = require('../models/Notes');

const getAllNotes = async (req, res) => {
    try {
      const notes = await Note.find();
  
      res.status(200).json(notes);
    } catch (error) {
      console.error('Error fetching notes:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Both title and content are required.' });
    }

    const newNote = new Note({
      title,
      content,
    });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error('Error creating a note:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateNote = async (req, res) => {
    try {
      const { id, title, content } = req.body;
  
      if (!id || !title || !content) {
        return res.status(400).json({ error: 'ID, title, and content are required for updating a note.' });
      }
  
      const updatedNote = await Note.findOneAndUpdate(
        { id: id }, 
        { title, content }, 
        { new: true } 
      );
  
      if (!updatedNote) {
        return res.status(404).json({ error: 'Note not found' });
      }
  
      res.status(200).json(updatedNote);
    } catch (error) {
      console.error('Error updating a note:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const deleteNote = async (req, res) => {
    try {
      const { id } = req.body;
  
      if (!id) {
        return res.status(400).json({ error: 'ID is required for deleting a note.' });
      }
  
      const deletedNote = await Note.findOneAndDelete({ id: id });
  
      if (!deletedNote) {
        return res.status(404).json({ error: 'Note not found' });
      }
  
      res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
      console.error('Error deleting a note:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports = { test, createNote, getAllNotes, updateNote, deleteNote }