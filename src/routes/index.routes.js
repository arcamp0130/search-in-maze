import { Router } from "express";

const router = Router();
const rootDir = "public";

// Defining route for "/" 
router.get("/", (_, res) => {
    res.sendFile("index.html", { root: rootDir });
});

export default router;