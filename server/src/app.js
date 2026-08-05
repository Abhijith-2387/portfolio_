import express from "express";
import cors from "cors";
import "./config/env.js";
import helmet from "helmet";
import morgan from "morgan";
import path from "node:path";
import { fileURLToPath } from "node:url";
import contactRoutes from "./routes/contactRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "../..");

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
  }),
);
app.use(express.json({ limit: "20kb" }));
app.use(morgan("dev"));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "portfolio-api" });
});

app.use("/api/contact", contactRoutes);

app.use(express.static(path.join(rootDir, "client/dist")));

app.use((req, res) => {
  res.sendFile(path.join(rootDir, "client/dist/index.html"));
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.status || 500).json({
    message: error.message || "Internal server error",
  });
});

export default app;
