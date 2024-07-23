import { Router } from "express";
import { Login, createUser } from "../controllers/user";

const router = Router();

router.post("/create", createUser);
router.post("/login", Login);

export default router;
