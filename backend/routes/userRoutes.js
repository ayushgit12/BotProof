import express from "express";
import {
  registerUser,
  loginUser,
  emailVerification,
} from "../controllers/userController.js";
// import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id/verify/:token/", emailVerification);
export default router;
