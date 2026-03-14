import { Router } from "express";

const router = Router();

import {
    getTasks,
    createTask,
    getTaskById,
    updateTask, 
    deleteTask,
} from "../controllers/task.controller.js";

router.get("/", getTasks);
router.get("/:id", getTaskById)

router.post('/', createTask);

router.put("/:id", updateTask)
router.delete("/:id", deleteTask)

export default router;