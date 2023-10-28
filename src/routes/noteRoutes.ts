import { Router, Request, Response } from "express";
import { addNoteController, 
         
         deleteNoteController,
         getAllNotesController,
         getSpecificNoteController,
         updateNoteController, } from "../controllers/notesControllers";

const noterouter: Router  = Router()


noterouter.get('/:noteID', getSpecificNoteController)
noterouter.delete("/:noteID", deleteNoteController)
noterouter.post("/", addNoteController)
noterouter.put("/:noteID", updateNoteController)
noterouter.get("/", getAllNotesController)





export default noterouter;