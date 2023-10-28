"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDates = void 0;
function formatDates() {
    const date = new Date();
    return date.toLocaleString();
}
exports.formatDates = formatDates;
formatDates();
