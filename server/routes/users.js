import express from "express";
import UCTRL from "../controllers/users.js";
const router = express.Router();



router.get("/", UCTRL.fetchUser);

router.post("/signup", UCTRL.signup);

router.post("/login", UCTRL.login);

router.get("/:username", UCTRL.profile);

router.delete("/:id", UCTRL.deleteUser);

export default router;
