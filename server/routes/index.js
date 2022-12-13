import express from "express";
import CTRL from "../controllers/index.js";
const router = express.Router();




router.get("/", CTRL.index);

router.post("/new" , CTRL.createMovie);

router.patch("/:id" , CTRL.updateMovie);

router.delete("/:id", CTRL.deleteMovie);

export default router;
