import { Response, Request } from "express"
import { addNote,deleteNote,getNotes, getSpecificNote, updateNote } from "../services/noteServices";



export function getAllNotesController(req: Request, res:Response){
      let notes = getNotes();
      res.json(notes)
}

export function getSpecificNoteController(req:Request, res:Response ){
      let {noteID} = req.params;
      let parsedID = parseInt(noteID)
      let note = getSpecificNote(parsedID);

      res.json(note)
}

export function deleteNoteController(req:Request, res:Response){
      let {noteID} = req.params;
      let parsedID = parseInt(noteID);

      let result = deleteNote(parsedID);

      if(result !== null){
            res.send(`Note on index: ${result} deleted`);
      }else{
            res.send("Note not found")
      }
}

export function addNoteController(req: Request, res:Response){
      let new_note = req.body;

      addNote(new_note);
      res.json({
            id: new_note.id,
            sucess: true
      })
}

export function updateNoteController(req:Request, res:Response){
      let { noteID } = req.params;
      let parsedID = parseInt(noteID)
      let updatedNote = req.body;

      let result = updateNote(parsedID, updatedNote);
      if (result) {
            return res.json({
                  id: parsedID,
                  success: true
            })
      }
      return res.json({
            success: false
      })
}

