const mongoose = require("mongoose");
const uri =  require("../db/conn");

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true, 
    },
    due_date:{
        type:Date,
        require:true, 
    },

},{ timestamps: true })

// creating a collection 
const Task = new mongoose.model("Task",taskSchema);

module.exports = Task;
