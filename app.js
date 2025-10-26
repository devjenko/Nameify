import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import categories from "./src/data/categories.js";

// __dirname replacement in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Set EJS as templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "Nameify | Free Business Name Generator",
    categories,
  });
});

export default app;
