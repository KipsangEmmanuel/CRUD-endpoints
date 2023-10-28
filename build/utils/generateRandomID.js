"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueID = void 0;
function uniqueID() {
    const min = 100000000;
    const max = 999999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.uniqueID = uniqueID;
