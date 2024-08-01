import { Router } from "express";
import userRoute from "./user";
import listingRoute from "./listing";

const router = Router();

router.use("/user", userRoute);
router.use("/listing", listingRoute);

export default router;
