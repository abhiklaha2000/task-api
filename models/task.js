const mongoose = require("mongoose");
const uri =  require("../db/conn");
const { v4: uuidv4 } = require('uuid');

const taskSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4(), // Generate a unique ID for each task
    },
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true, 
    },
    status:{
        type:String,
        enum: ['pending', 'completed'],
        require:true, 
        default: 'pending'
    },

},{ timestamps: true })

// creating a collection 
const Task = new mongoose.model("Task",taskSchema);

module.exports = Task;
