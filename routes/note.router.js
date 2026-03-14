import { Router } from "express";

const router = Router();
import Note from "../models/Note.js";    // ponemos desde donde se importara Task, la ruta.

router.get('/note', async (req, res) => {
const note = await Note.find()
res.json(note);
});

export default router;