import express from "express";
import guard from "../../../middlewares/guard";
import { upload } from "../../../middlewares/upload";
import {
  uploadAvatar,
  verifyUser,
  repeatEmailForVerifyUser,
} from "../../../controllers/users";

const router = express.Router();

router.patch("/avatar", guard, upload.single("avatar"), uploadAvatar);
router.get("/verify/:token", verifyUser);
router.post("/verify", repeatEmailForVerifyUser);

export default router;
