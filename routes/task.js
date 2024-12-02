const express = require("express");
const task_router =  new express.Router();
const Task = require("../models/task");

// Task controller 
const taskController = require('../controllers/task');

task_router.post('/task',taskController.create_task);
task_router.get('/task',taskController.all_task);
task_router.get('/task/:id',taskController.get_task);
task_router.put('/task/:id',taskController.update_task_status);
task_router.delete('/task/:id',taskController.delete_task);
task_router.get('/task/status/:status',taskController.get_tasks_by_status);


module.exports = task_router;