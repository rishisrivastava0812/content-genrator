import express from "express";
import { generateContent } from "./aicontroller.js";

const router = express.Router();

router.post("/generate-content", generateContent);

export default router;
