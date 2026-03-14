import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    tittle: String,
    completed: Boolean,

});

const Task = mongoose.model('Task', taskSchema);

export default Task;


