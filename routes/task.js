const express = require("express");
const task_router =  new express.Router();
const Task = require("../models/task");

// Task controller 
const taskController = require('../controllers/task');

task_router.post('/create-task',taskController.create_task);
task_router.get('/get-all-task',taskController.all_task);
task_router.get('/get-task/:id',taskController.get_task);
task_router.patch('/update-task/:id',taskController.update_task);
task_router.delete('/delete-task/:id',taskController.delete_task);


module.exports = task_router;