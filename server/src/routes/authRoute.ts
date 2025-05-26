import { Router } from "express";
import { signup, login } from "../controllers/authController";
import { authenticateJWT } from "../middleware/authMiddleware";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/protected", authenticateJWT, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

export default router;