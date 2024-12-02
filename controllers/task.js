const Task = require('../models/task');

/**
 * Create a task
 */
const create_task = async (req, res) => {
    const { title, description } = req.body;
    // Validate required fields
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required.' });
    }
    try {
        // Create a new task
        const newTask = new Task({ title, description });
        // Save the task to the database
        await newTask.save();
        // Respond with the created task
        res.status(201).json({
            message: 'Task created successfully.',
            task: newTask,
        });
    } catch (error) {
        // Respond with an error message
        res.status(500).json({ error: 'An error occurred while creating the task.' });
    }
};

/**
 * Get all task
 */
const all_task = async(req,res) => {
    try{
        const get_task = await Task.find().select('title description status');
        // Respond with the tasks
        res.status(200).json(get_task);
    } catch (err) {
        // Respond with an error message
        res.status(500).json({
            error: 'An error occurred while fetching tasks.',
            details: err.message,
        });
    }
}

/**
 * Get single task
 */
const get_task = async(req,res) => {
    try{
    const _id = req.params.id;
    const get_task = await Task.findById(_id);
    res.status(200).json(get_task);
    }
    catch(err){
        // Respond with an error message
        res.status(500).json({
            error: 'An error occurred while fetching tasks.',
            details: err.message,
        });
    }
}

/**
 * Update the status of a task by task ID
 * 
 * @param {*} req - The request object, containing the task id in the URL parameter and the updated status in the request body.
 * @param {*} res - The response object, used to send a response to the client.
 * @returns - Returns a JSON response with the updated task details if the task is found and updated, or an error message if the task is not found.
 */
const update_task_status = async (req, res) => {
    const { id } = req.params; // Extract the task ID from the URL parameter
    const { status } = req.body; // Extract the new status from the request body

    // Validate that the status provided is either 'pending' or 'completed'
    if (!['pending', 'completed'].includes(status)) {
        return res.status(400).json({
            error: 'Status must be either "pending" or "completed".',
        });
    }

    try {
        // Find the task by its ID and update the status
        const task = await Task.findByIdAndUpdate(
            id, // Task ID from URL parameter
            { status }, // New status to update
            { new: true } // Return the updated task after the update
        );

        // If no task was found with the provided ID
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        // Respond with the updated task details
        res.status(200).json({
            message: 'Task updated successfully',
            task,
        });
    } catch (error) {
        // Handle any errors that occur during the update operation
        res.status(500).json({
            error: 'An error occurred while updating the task.',
            details: error.message,
        });
    }
};


/**
 * Delete a task by task ID
 * 
 * @param {*} req - The request object, containing the task ID in the URL parameter.
 * @param {*} res - The response object, used to send a response to the client.
 * @returns - Returns a success message if the task is deleted, or an error message if the task is not found.
 */
const delete_task = async (req, res) => {
    const { id } = req.params; // Extract the task ID from the URL parameter
    try {
        // Attempt to delete the task by its ID
        const task = await Task.findByIdAndDelete(id);
        // If no task is found with the provided ID
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        // Respond with a success message if the task was deleted
        res.status(200).json({
            message: 'Task deleted successfully',
        });
    } catch (error) {
        // If there is an error during the delete operation, return a 500 Internal Server Error
        res.status(500).json({
            error: 'An error occurred while deleting the task.',
            details: error.message,
        });
    }
};

/**
 * Get tasks filtered by status
 * 
 * @param {*} req - The request object, containing the status in the URL parameter.
 * @param {*} res - The response object, used to send a response to the client.
 * @returns - Returns a list of tasks matching the given status, or an empty array if no tasks match.
 */
const get_tasks_by_status = async (req, res) => {
    const { status } = req.params; // Extract the status from the URL parameter

    // Validate that the status is either 'pending' or 'completed'
    if (!['pending', 'completed'].includes(status)) {
        return res.status(400).json({
            error: 'Status must be either "pending" or "completed".',
        });
    }

    try {
        // Find tasks that match the provided status
        const tasks = await Task.find({ status });

        // Return the list of tasks (empty array if no tasks match)
        res.status(200).json(tasks);
    } catch (error) {
        // Handle any errors during the query
        res.status(500).json({
            error: 'An error occurred while retrieving tasks.',
            details: error.message,
        });
    }
};



module.exports = {
    create_task,
    all_task,
    get_task,
    update_task_status,
    delete_task,
    get_tasks_by_status
}
