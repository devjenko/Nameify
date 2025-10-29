import express from "express";
import aiGenerator from "../utils/generateAi.js";

const router = express.Router();

router.get("/category/:categoryName", async (req, res) => {
  const categoryName = req.params.categoryName;

  try {
    // Call the function and wait for it to finish
    const aiResponse = await aiGenerator(categoryName);

    res.render("results", {
      title: `${categoryName} Business Names | Nameify`,
      categoryName,
      aiResponse,
    });
  } catch (error) {
    console.error("AI Generation failed:", error);
    res.status(500).send("Something went wrong generating names.");
  }
});

export default router;
