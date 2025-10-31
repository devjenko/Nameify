import express from "express";
import aiGenerator from "../utils/generateAi.js";

const router = express.Router();

// Render the results page
router.get("/category/:categoryName", async (req, res) => {
  const categoryName = req.params.categoryName;

  try {
    res.render("results", {
      title: `${categoryName} Business Names | Nameify`,
      categoryName,
    });
  } catch (error) {
    res.status(401).send("Results page failed to load.");
  }
});

// Render ai business name response
router.get("/api/generate/:categoryName", async (req, res) => {
  try {
    const aiResponse = await aiGenerator(req.params.categoryName);
    res.json({ aiResponse: aiResponse });
  } catch (error) {
    console.error("AI Generation failed:", error);
    res.status(500).send("Something went wrong generating names.");
  }
});

export default router;
