"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNote = exports.deleteNote = exports.addNote = exports.getSpecificNote = exports.getNotes = void 0;
const data_1 = require("../data");
;
const dates_1 = require("../utils/dates");
const generateRandomID_1 = require("../utils/generateRandomID");
const dbConnectService_1 = require("./dbConnectService");
function getNotes() {
    return data_1.notes;
}
exports.getNotes = getNotes;
function getSpecificNote(id) {
    let note = data_1.notes.find((note) => note.id === id);
    if (note)
        return note;
    return null;
}
exports.getSpecificNote = getSpecificNote;
function addNote(note) {
    return __awaiter(this, void 0, void 0, function* () {
        // notes.push(note)
        const noteID = (0, generateRandomID_1.uniqueID)();
        const stringID = noteID.toString();
        const id = parseInt(stringID);
        const createdAt = (0, dates_1.formatDates)();
        let { title, content } = note;
        let connectionPool = yield (0, dbConnectService_1.dbConnectService)();
        let query = `INSERT INTO notes (id, title, content, createdAt) VALUES ('${id}', '${title}', '${content}','${createdAt}')`;
        connectionPool === null || connectionPool === void 0 ? void 0 : connectionPool.connect((err) => __awaiter(this, void 0, void 0, function* () {
            if (err) {
                console.log(err);
            }
            else {
                let results = yield (connectionPool === null || connectionPool === void 0 ? void 0 : connectionPool.request().query(query));
                console.log(results);
            }
        }));
    });
}
exports.addNote = addNote;
function deleteNote(id) {
    let indexofNote = data_1.notes.findIndex((note) => note.id === id);
    if (indexofNote < 0) {
        return null;
    }
    else {
        data_1.notes.splice(indexofNote, 1);
        return indexofNote;
    }
}
exports.deleteNote = deleteNote;
function updateNote(id, body) {
    let indexOfNote = data_1.notes.findIndex((note) => note.id === id);
    if (indexOfNote >= 0) {
        data_1.notes[indexOfNote] = body;
        let success = true;
        return success;
    }
    else {
        return false;
    }
}
exports.updateNote = updateNote;
