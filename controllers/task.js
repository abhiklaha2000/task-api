const Task = require('../models/task');

// creating a task
const create_task = async(req,res) => {

    try{
        
    const task = new Task(req.body);
    const create_task = await task.save();
    res.send(create_task);

    }
    catch(err){
        res.send(err);
    }
}

// getting a task

const all_task = async(req,res) => {

    try{

     const get_task = await Task.find().sort({"ranking":1});
     res.send(get_task);

    }
    catch(err){
      res.send(err);
    }
}

//getting single task
const get_task = async(req,res) => {

    try{

    const _id = req.params.id;
    const get_task = await Task.findById(_id);
    res.send(get_task);

    }
    catch(err){
       res.send(err);
    }
}

// update a task
const update_task = async(req,res) => {

    try{

    const _id = req.params.id;
    const updated_task = await Task.findByIdAndUpdate(_id, req.body , {
        new:true
    });
    res.send(updated_task);

    }
    catch(err){
       res.send(err);
    }
}

// deleting a task
const delete_task = async(req,res) => {

    try{

    const _id = req.params.id;
    const task_deleted = await Task.findByIdAndDelete(_id);
    res.send(task_deleted);

    }
    catch(err){
       res.send(err);
    }
}


module.exports = {
    create_task,
    all_task,
    get_task,
    update_task,
    delete_task
}
