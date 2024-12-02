const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://abhiklaha2000:dumdum123@cluster0.mae0k64.mongodb.net/Task").then(() => {
    console.log('Connected to Mongodb!!!');
}
).catch((err) =>{
    console.log(err);
})
