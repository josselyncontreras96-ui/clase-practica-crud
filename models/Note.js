import mongoose from "mongoose";

const noteSchema = new mongoose.Schema ({
    tittle: String,
    Content: String,
});

const Note = mongoose.model('Note', noteSchema);

export default Note;