const express = require("express");
require("./db/conn");
const Task = ("./models/task");
const taskRouter = require("./routes/task");

const app = express();
const port = process.env.Port || 4000;

app.use(express.json());

// Task routes
app.use(taskRouter);


app.listen(4000 , () => {
    console.log(`Server runs at ${port}`);
})