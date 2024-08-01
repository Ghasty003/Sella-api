import { Router } from "express";
import { create } from "../controllers/listing";
import upload from "../config/multer";

const router = Router();

router.post("/", upload.single("image"), create);

export default router;
