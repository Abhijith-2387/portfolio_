import "./config/env.js";
import app from "./app.js";
import { connectDatabase } from "./config/db.js";

const port = process.env.PORT || 5000;

const startServer = async () => {
  await connectDatabase(process.env.MONGODB_URI);

  app.listen(port, () => {
    console.log(`Portfolio API running on http://localhost:${port}`);
  });
};

startServer().catch((error) => {
  console.error("Failed to start server:", error.message);
  process.exit(1);
});
