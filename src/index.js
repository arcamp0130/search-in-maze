import { fileURLToPath } from "url";
import router from "./routes/index.routes.js";
import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 5500;

// Get current file dir from current path
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Check for enviroment status to serve correct files
const staticPath = process.env.NODE_ENV === "production"
    ? path.join(__dirname, "../dist/public")    // Built
    : path.join(__dirname, "../public");        // Dev

// Implementing server configs
app.use(express.static(staticPath));
app.use("/", router);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});