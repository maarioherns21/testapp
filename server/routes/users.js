import express from "express";
import { deleteUser, fetchUser, login, profile, signup } from "../controllers/users.js";
const router = express.Router();



router.get("/", fetchUser);

router.post("/signup", signup);

router.post("/login", login);

router.get("/:username", profile);

router.delete("/:id", deleteUser);

export default router;
