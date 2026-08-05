import { Router } from "express";
import {
  createContactMessage,
  listContactMessages,
} from "../controllers/contactController.js";
import { requireAdmin } from "../middleware/adminAuth.js";

const router = Router();

router.post("/", createContactMessage);
router.get("/", requireAdmin, listContactMessages);

export default router;
