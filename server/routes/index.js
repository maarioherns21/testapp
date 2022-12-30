import express from "express";
import { createMovie, deleteMovie, index, updateMovie } from "../controllers/index.js";
const router = express.Router();


router.get("/", index);

router.post("/new", createMovie);

router.patch("/:id", updateMovie);

router.delete("/:id", deleteMovie);

export default router;
