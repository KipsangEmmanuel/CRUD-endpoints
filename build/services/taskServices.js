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
exports.updateTask = exports.deleteTask = exports.addTask = exports.getSpecificTask = exports.getTasks = void 0;
const data_1 = require("../data");
;
const dbConnectService_1 = require("./dbConnectService");
function getTasks() {
    return data_1.tasks;
}
exports.getTasks = getTasks;
function getSpecificTask(id) {
    let task = data_1.tasks.find((task) => task.id === id);
    if (task)
        return task;
    return null;
}
exports.getSpecificTask = getSpecificTask;
function addTask(task) {
    return __awaiter(this, void 0, void 0, function* () {
        // tasks.push(task)
        let { id, title, completed } = task;
        let connectionPool = yield (0, dbConnectService_1.dbConnectService)();
        let query = `INSERT INTO tasks (task_id, task_title, completed) VALUES ('${id}', '${title}', '${completed}')`;
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
exports.addTask = addTask;
function deleteTask(id) {
    let indexofTask = data_1.tasks.findIndex((task) => task.id === id);
    if (indexofTask < 0) {
        return null;
    }
    else {
        data_1.tasks.splice(indexofTask, 1);
        return indexofTask;
    }
}
exports.deleteTask = deleteTask;
function updateTask(id, body) {
    let indexOfTask = data_1.tasks.findIndex((task) => task.id === id);
    if (indexOfTask >= 0) {
        data_1.tasks[indexOfTask] = body;
        let success = true;
        return success;
    }
    else {
        return false;
    }
}
exports.updateTask = updateTask;
