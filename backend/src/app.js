import express from "express";
import cors from "cors";

import { env } from "./config/env.js";
import contactRoutes from "./routes/contact.routes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

// Global middleware
app.use(express.json({ limit: "10kb" }));

app.use(
  cors({
    origin: env.frontendUrl,
  })
);

// API routes
app.use("/api/contact", contactRoutes);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
});

// Global error handler (must be last)
app.use(errorHandler);

export default app;