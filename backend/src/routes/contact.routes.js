import express from "express";

import contactLimiter from "../middleware/contactLimiter.js";
import submitContactForm from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/", contactLimiter, submitContactForm);

export default router;