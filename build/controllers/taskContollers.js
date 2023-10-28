"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskController = exports.addTaskController = exports.deleteTaskController = exports.getSpecificTaskController = exports.getAllTasksController = exports.appTest = void 0;
const taskServices_1 = require("../services/taskServices");
function appTest(req, res) {
    return res.send("Test okay");
}
exports.appTest = appTest;
function getAllTasksController(req, res) {
    let tasks = (0, taskServices_1.getTasks)();
    res.json(tasks);
}
exports.getAllTasksController = getAllTasksController;
function getSpecificTaskController(req, res) {
    let { taskID } = req.params;
    let parsedID = parseInt(taskID);
    let task = (0, taskServices_1.getSpecificTask)(parsedID);
    res.json(task);
}
exports.getSpecificTaskController = getSpecificTaskController;
function deleteTaskController(req, res) {
    let { taskID } = req.params;
    let parsedID = parseInt(taskID);
    let result = (0, taskServices_1.deleteTask)(parsedID);
    if (result !== null) {
        res.send(`Task on index: ${result} deleted`);
    }
    else {
        res.send("Task not found");
    }
}
exports.deleteTaskController = deleteTaskController;
function addTaskController(req, res) {
    let new_task = req.body;
    (0, taskServices_1.addTask)(new_task);
    res.json({
        id: new_task.id,
        sucess: true
    });
}
exports.addTaskController = addTaskController;
function updateTaskController(req, res) {
    let { taskID } = req.params;
    let parsedID = parseInt(taskID);
    let updatedTask = req.body;
    let result = (0, taskServices_1.updateTask)(parsedID, updatedTask);
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
exports.updateTaskController = updateTaskController;
