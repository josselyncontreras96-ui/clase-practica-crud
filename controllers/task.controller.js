import Task from '../models/Task.js'; 

export const getTasks = async (req, res) => {
const tasks = await Task.find()
res.json(tasks);
}

export const getTaskById = async (req, res) => {
    const { id } = req.params;

    const task = await Task.findById(id);

   if (!task){
    return res.status(404).json({ error: "Task not found"});

   }
   res.json(task);
};


export const createTask = async (req, res) => {
    const task = new Task(req.body)

await task.save();
res.status(201).json(task);
};

export const updateTask = async (req, res) => {
    const { id } = req.params;
const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
    returnDocument: "after",});
if (!updateTask) {
    return res.status(404).json({ error: "TASK NOT FOUND"});
}
res.json(updatedTask);
}