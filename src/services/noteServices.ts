import { notes } from "../data";;
import { Note } from "../Types/interface";
import { formatDates } from "../utils/dates";
import { uniqueID } from "../utils/generateRandomID";
import { dbConnectService } from "./dbConnectService";


export function getNotes(){
      return notes;
    }

    export function getSpecificNote(id: number){
      let note = notes.find((note)=>note.id===id)
      if(note)return note;
      return null
    }

    export async function addNote(note: Note){
      // notes.push(note)
      const noteID=uniqueID()
      const stringID=noteID.toString();
      const id=parseInt(stringID)
      const createdAt=formatDates();
      
      let {  title, content } = note;
      let connectionPool = await dbConnectService();
      let query = `INSERT INTO notes (id, title, content, createdAt) VALUES ('${id}', '${title}', '${content}','${createdAt}')`;

      connectionPool?.connect(async(err)=>{
        if(err){
          console.log(err)
        }else{
         let results = await  connectionPool?.request()
                                             .query(query)
         console.log(results)
        }
      })

      

    }

    export function deleteNote(id: number){
      let indexofNote = notes.findIndex((note)=>note.id === id)

      if(indexofNote<0){
        return null
      }else{
        notes.splice(indexofNote, 1)
        return indexofNote
      }
    }


    export function updateNote(id:number, body:Note){
      let indexOfNote = notes.findIndex((note)=>note.id===id)

      if(indexOfNote>=0){
        notes[indexOfNote] = body;
        let success = true
        return success
      }else{
        return false
      }
    }