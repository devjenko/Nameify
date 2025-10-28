import express from "express";

const router = express.Router();

// Dynamic router for all the categories that will render the results page based on the chosen category
router.get("/category/:categoryName", (req, res) => {
  const categoryName = req.params.categoryName;
  res.render("results", {
    title: `${categoryName} Business Names | Nameify`,
    categoryName: categoryName,
  });
});
export default router;
