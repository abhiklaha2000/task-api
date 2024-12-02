const express = require("express");
require("./db/conn");
const Task = ("./models/task");
const taskRouter = require("./routes/task");

const app = express();
const port = process.env.Port || 3000;

app.use(express.json());

// Task routes
app.use(taskRouter);


app.listen(3000 , () => {
    console.log(`Server runs at ${port}`);
})