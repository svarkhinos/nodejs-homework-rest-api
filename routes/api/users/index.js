import express from "express";
import guard from "../../../middlewares/guard";
import { upload } from "../../../middlewares/upload";
import { uploadAvatar } from "../../../controllers/users";

const router = express.Router();

router.patch("/avatar", guard, upload.single("avatar"), uploadAvatar);

export default router;
