import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import categories from "./src/data/categories.js";
import categoryRouter from "./src/routes/categoryRouter.js";


// __dirname replacement in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Set EJS as templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Root route
app.get("/", (req, res) => {
  res.render("index", {
    title: "Nameify | Free Business Name Generator",
    categories,
  });
});

// Use category router
app.use(categoryRouter);

export default app;
