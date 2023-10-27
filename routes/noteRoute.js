const express = require('express');
const router = express.Router();
const { test, createNote, getAllNotes, updateNote, deleteNote } = require('../controllers/noteController');

router.get('/test', test); 
router.post('/create', createNote);
router.get('/all', getAllNotes);
router.put('/update', updateNote);
router.delete('/delete', deleteNote);

module.exports = router;
