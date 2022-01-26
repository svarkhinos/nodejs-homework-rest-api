import express from "express";
import {
  registration,
  logout,
  login,
  current,
} from "../../../controllers/auth";
import { validateCreateUser } from "./validation";
import guard from "../../../middlewares/guard";
import limiter from "../../../middlewares/rate-limit";

const router = express.Router();

router.post(
  "/registration",
  limiter(15 * 60 * 1000, 20),
  validateCreateUser,
  registration
);
router.post("/login", validateCreateUser, login);
router.post("/logout", guard, logout);
router.get("/current", guard, current);

export default router;
